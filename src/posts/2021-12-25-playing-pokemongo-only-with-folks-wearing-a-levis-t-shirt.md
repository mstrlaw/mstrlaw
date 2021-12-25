---
layout: post.hbs
title: Playing PokemonGo, only with folks wearing a Levis t-shirt
summary: If you happen to stroll around Lisbon, Porto or Algarve around some
  crowded areas like shopping malls, there are moments where, at any given
  moment, you’ll literally have a Levis shirt in any of your eyesight's angle.
  There’s no escaping it!
feat_image: /static/images/levis_shirt.png
feat_image_alt: A couple posing for a picture, wearing a Levis shirt.
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

// Within Shutter.vue component

<input id="cameraInput" type="file" name="camera" accept="image/*" class="image-input" capture @change="processImage($event)">

</code>