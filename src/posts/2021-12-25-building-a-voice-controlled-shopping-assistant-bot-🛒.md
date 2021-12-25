---
layout: post.hbs
title: Building a Voice Controlled shopping assistant bot 🛒
summary: A voice powered groceries shopping assistant built for the <a
  href="https://pixels.camp/" target="_blank">Pixels Camp</a>'s 2016 Hackathon.
feat_image: /static/images/jarbas_gif.gif
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



* The bot runs on Chrome only (because of Googles Speech to Text API);
* Constantly listens to the user's voice with microphone;
* After the final transcript is returned from Google's API, it attempts to match commands using a [bag of words](https://en.wikipedia.org/wiki/Bag-of-words_model) approach;
* Product matching is done using simple regex;
* If products are found and returned, the bot waits for the user to state which product they wish to add to the shopping list.
* Product string similarity score is calculated using [Sørensen–Dice's Coefficient](https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient);
* Once users are done with their purchase, they can ask for the list to be finalized;
* Previously bought products can be found on the user's main page, including some stats like the most bought product and purchase mean cost;
* Products were provided by [Continente](http://continente.pt/) through their API. To speed up matching, products were stored on a Mongo database so the bot wouldn't constantly request the API to find/retrieve products;
* An Android app was built by [Miguel Pescadinha](https://www.linkedin.com/in/miguelpescadinha/) that loads the webapp into a webframe in order to use Android's native Speech to Text API; The native app and webapp talked to each other using Android [Javascript Interface](https://developer.android.com/guide/webapps/webview.html#BindingJavaScript);