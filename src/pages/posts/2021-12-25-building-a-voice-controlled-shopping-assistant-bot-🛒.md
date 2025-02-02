---
layout: /src/layouts/PostLayout.astro
title: Voice Controlled Shopping List
summary: A voice powered groceries shopping assistant built for the <a
  href="https://pixels.camp/" target="_blank">Pixels Camp</a>'s 2016 Hackathon.
feat_image: /images/uploads/jarbas_gif.gif
feat_image_alt: A render of Jarbas displaying a list of products.
publish_date: 2016-10-22T16:09:00.000Z
update_date: 2016-10-22T16:09:00.000Z
---

Ever been in a situation where you notice that you're missing something in your house, you need to buy it but then forget to add that product to your shopping list?

Well now with Jarbas, you don't need to open your note app to write down your shopping list.

Simply say "Jarbas" to your phone (Android) or using the Jarbas Webapp (Chrome only) and tell it what you want to add to your shopping list.

It'll be listening to what you want to find and save it. Once you're done, you can ask it to email you the list or request for the groceries to be delivered at your place (using <a href="https://www.continente.pt/" target="_blank">Continente</a>'s API).

No more forgetting to buy that toilet paper! Jarbas is here for you.

## How it Works

- The bot runs on Chrome only (because of Googles Speech to Text API);
- Constantly listens to the user's voice with microphone;
- After the final transcript is returned from Google's API, it attempts to match commands using a [](https://en.wikipedia.org/wiki/Bag-of-words_model)<a href="https://en.wikipedia.org/wiki/Bag-of-words_model" target="_blank">bag of words</a>approach;
- Product matching is done using simple regex;
- If products are found and returned, the bot waits for the user to state which product they wish to add to the shopping list.
- Product string similarity score is calculated using <a href="https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient" target="_blank">Sørensen–Dice's Coefficient</a>;
- Once users are done with their purchase, they can ask for the list to be finalized;
- Previously bought products can be found on the user's main page, including some stats like the most bought product and purchase mean cost;
- Products were provided by [](http://continente.pt/)<a href="https://www.continente.pt/" target="_blank">Continente</a> through their API. To speed up matching, products were stored on a Mongo database so the bot wouldn't constantly request the API to find/retrieve products;
- An Android app was built by <a href="https://www.linkedin.com/in/miguelpescadinha/" target="_blank">Miguel Pescadinha</a> that loads the webapp into a webframe in order to use Android's native Speech to Text API; The native app and webapp talked to each other using Android Javascript Interface;

## Stack

- [](https://www.meteor.com/)<a href="https://www.meteor.com/" target="_blank">Meteor</a> framework;
- <a href="https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html" target="_blank">\[](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)Google WebSpeech API</a> (Chrome Only);
- <a href="http://getbootstrap.com/" target="_blank">\[](http://getbootstrap.com/)Bootstrap</a>;
- <a href="https://www.continente.pt/" target="_blank">Continente</a>'s products API (made specifically for the contest);
- Hosted on <a href="https://blog.meteor.com/modulus-xervo-io-shutdown-dc968bfb725b" target="_blank">Modulus.io</a>

## Results

After 2 days of hacking away and testing, Jarbas was live. The project landed 3rd place ,amongst over 60 participating teams. Not bad! 🏆

You can check the code [](https://github.com/mstrlaw/jarbas)<a href="https://github.com/mstrlaw/jarbas" target="_blank">here</a>.You can check the presentation to the audience below.

<video src="/images/uploads/jarbas_pixels_camp_2016.mp4" controls></video>

![Picture of the ceremony, receiving the trophy for 3rd place.](/images/uploads/16649123_930313473771378_8878488857555919772_n.jpg 'Awards ceremony.')

<p class="u-ImageDescription">Receiving the trophy (and an Apple TV 4K)</p>
