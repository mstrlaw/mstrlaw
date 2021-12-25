---
layout: post.hbs
title: Playing PokemonGo, only with folks wearing a Levis t-shirt
summary: If you happen to stroll around Lisbon, Porto or Algarve around some
  crowded areas like shopping malls, there are moments where, at any given
  moment, you’ll literally have a Levis shirt in any of your eyesight's angle.
  There’s no escaping it!
feat_image: /static/images/desktop_test.gif
feat_image_alt: A gif showing the app tacking a picture of a shirt with the
  Levis logo and identifying it correctly.
publish_date: 2018-08-12T14:13:06.029Z
update_date: 2018-08-12T14:13:00.000Z
---
All aboard the Levis shirt train!

So, what if we had an app that recognized a Levis t-shirt and, each time you saw one, you’d could take a photo like PokemonGo and earn some points?

We could call it *Levimon* (get it? 🙊)

## Specs

1. Should be able to take photo with a phone
2. Should be able to identify whether or not the person is wearing a Levis shirt
3. Reward points to the player

<hr>

Initially, my idea was to use the [](https://trackingjs.com/)<a href="https://trackingjs.com/" target="_blank">tracking.js</a> library to [](https://trackingjs.com/examples/color_hello_world.html)<a href="https://trackingjs.com/examples/color_hello_world.html" target="_blank">track the red from the t-shirt</a>, then isolate it in a square with a standard size using image manipulation library [](http://fabricjs.com/)<a href="http://fabricjs.com/" target="_blank">fabric.js</a>.

We’d then use [](http://caza.la/synaptic/#/)<a href="http://caza.la/synaptic/#/" target="_blank">synaptic.js</a> to build a Neural Network that could identify the brand.

In other words, **a ton of work!** 

First, you’d need to handle standardizing the photo to extract the brand area. Moreover and as importantly, you’d need to create a good training data set for the NN to identify the t-shirt.

![An image depicting the app prototype.](/static/images/app_simulation.gif "App prototype")

<p class="u-ImageDescription">App prototype.</p>

That’s too much for an afternoon project! Plus, there are some variations of it with blue shirts instead of white; some others look like a Pepsi logo. So, interesting challenge, but probably crappy solution.

Hold on, how ‘bout using [](https://clarifai.com/)<a href="https://clarifai.com/" target="_blank">Clarifai</a>? Those guys have some solid computer vision solutions, including [](https://clarifai.com/models/logo-image-recognition-model-c443119bf2ed4da98487520d01a0b1e3)<a href="https://clarifai.com/models/logo-image-recognition-model-c443119bf2ed4da98487520d01a0b1e3" target="_blank">identifying brands</a>. On top of that, they have a free tier providing 5k transactions/month, ideal for our test case. Bingo!

## *Actually* building the app

The app itself is a standard VueJS app created using *vue-cli.* The whole code can be found on [](https://github.com/mstrlaw/levimon)<a href="https://github.com/mstrlaw/levimon" target="_blank">GitHub</a>. Below are some of the interesting code nuggets.

<hr>

**Accessing the device’s camera**

We do that by using the *accept* and *capture* parameters on a regular input element, such as:

<code>

<input id="cameraInput" type="file" name="camera" accept="image/*" class="image-input" capture @change="processImage($event)">

</code>

**Reading the image & passing it to Clarifai**

The Shutter component simply passes the whole event on input change. App.vue handles the rest. We call the identifyBrand method when imageData event is triggered. 

Then, to read the content of the image we employ the FileReader API and use the *onload* callback to then feed the data back to Clarifai, such as:

<code>

<pre>
...
methods:{
  identifyBrand(imageData){
    this.hasMatch = null
    let foundBrand = false
    reader.onload = (e) => {
      //  We only want to pass the Base64 encoded string to Clatifai
      let img = e.target.result.replace(/^data:image\/\[a-z]+;base64,/, '')
      clarifai.models
      //  Use the right model to identify brands and pass the image as base64
      .predict(process.env.VUE_APP_PREDICT_MODEL, { base64: img })
      .then((r) => {
        if (r.status.code === 10000) {
          if (r.outputs.length > 0) {
            //  Check if Clarifai has returned any matches
            if (Object.keys(r.outputs\[0].data).length > 0) {
              //  Clarifai returns the multiple places with matches in the image
              r.outputs\[0].data.regions.map( el => {
                //  Bulletproof. Just looking for 'levi' match in the name value
                if (el.data.concepts\[0].name.toLowerCase().match('levi') !== null) {
                  //  Only count the match if the confidence score is above .9
                  if (el.data.concepts\[0].value >= 0.9) {
                    foundBrand = true
                  }
                }
              })
              //  If there's a match, change this value to then display a success/error dialog
              if (foundBrand) {
                this.hasMatch = true
              } else {
                this.hasMatch = false
              }
            } else {
              this.hasMatch = false
            }
          }
        }
      },
      (err) => {
        alert(err)
      })
      .catch(err => {
        console.log(err)
      })
    }
    // Load imageData  
    reader.readAsDataURL(imageData)
  },
  ...

</pre>

</code>

<hr>

## Testing it

![A couple posing for a picture, wearing a Levis shirt.](/static/images/levis_shirt.png "Photo by Bruno Vaz for the amusing NIT article on people wearing Levis t-shirts.")

<p class="u-ImageDescription">Photo by <a href="https://www.instagram.com/godinhovaz/" target="_blank">Bruno Vaz</a> for the amusing <a href="https://www.nit.pt/compras/lojas-e-marcas/porque-e-que-toda-a-gente-no-rock-in-rio-usa-as-mesmas-t-shirts-da-levis" target="_blank">NIT article</a> on people wearing Levis t-shirts.</p>

## In The Wild

After walking for 1h, I spotted *at least* 20 people wearing it! 🙈

Most of them were too far or it was just to awkward to snap a picture hence a lot of missed opportunities.

Regarding the accuracy of Clarifai, unfortunately most of the times it wouldn’t get a match, even on very up-front & close pictures (Lightning conditions? Angle? Ripples in the shirt’s fabric?) so never mind my score..

Keep in mind though that this demo only keeps track of the score using Vuex, so no persistent storage. If time permits, I may have some fun in the future plugin in Firebase, just for the kicks of it.

Besides storing to a DB, some other nice-to-haves would be:

* Streaming the camera image/video directly to Clarifai and have it more real-time;
* Blur people’s faces automatically using tracking.js;
* Adding some geolocation data to it?;

<hr>

And there you go! A very rudimentary way of having some fun-with-friends: "*Hey, who can spot the most Levimons out there? — Ah there’s a ton of ’em here!*"

Try it out <a href="https://suspicious-hawking-79fe18.netlify.app/" target="_blank">here</a>