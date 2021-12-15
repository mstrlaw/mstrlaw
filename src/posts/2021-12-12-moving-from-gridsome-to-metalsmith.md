---
layout: post.hbs
title: Time to refactor my website. Again.
summary: >-
  I've had been wanting to make my website more performant, closer to an old
  school vanilla website, without any fancy frontend framework. Less is more,
  right?


  <br><br>


  After all, what's a dev's website if not a reflection of what they value?
feat_image: /static/images/metalsmith.jpg
feat_image_alt: A person operating a wielding machine.
publish_date: 2021-12-14T00:06:06.391Z
update_date: 2021-12-15T00:09:42.353Z
thumbnail_description: This is the description of the image.
thumbnail: /static/images/metalsmith.jpg
date: 2021-12-12T21:58:24.436Z
description: How often should you refactor your personal website?
---
ssasI don't know how ofter others think about changing their websites. I wonder how often they actually end up doing so. I guess it depends on the sort of developer we're talking about..

In the past, I've used my website as a business card (in a way I still do). But I also like to use it as a "safe space" to test and learn new things.

I want it to embody minimalism, not only visually, but as a whole. This means having a simpler stack too. Isn't it funny to think that a web app could evolve as its owner does so too?

## Choosing a stack

Anyways, after some research with <a href="https://github.com/myles/awesome-static-generators" target="_blank">this list of static site generators</a> as my starting point, I decided to go with <a href="https://www.metalsmith.io/" target="_blank">Metalsmith</a>. It is quite bare bone but extensible enough so that you get layout, templates, and other plugins that turn it into a pretty decent developer experience. Check out <a href="https://github.com/mstrlaw/mstrlaw" target="_blank">the repo</a> if you wanna spin it and use as your own.

## The quest to zero

So what were the performance gains? Well, I was using <a href="https://gridsome.org/" target="_blank">Gridsome</a> previsouly — a very solid static generator if you want to keep it in the Vue universe — so it's not like I was in the red when it comes to web vitals, right?

![A screenshot of Chrome's Lighthouse performance tool for the Gridsome version.](/static/images/old_lighthouse-min.jpg "Lighthouse scores for the Gridsome version. Not too shabby.")

<p class="u-ImageDescription">Lighthouse scores for the Gridsome version. Not too shabby.</p>

Yeah not bad. But the TTI was still high, floating around 2-4 seconds. Also, how much data are we downloading just for this simple website? <a href="https://tools.pingdom.com/" target="_blank">Pingdom Tools</a> has the answer (with Tokyo as the test location):

![A screenshot of Pingdom Tools website speed test tool for the Gridsome version.](/static/images/old_pingdom_tokyo-min.jpg "Pingdom Tools website speed test scores for the Gridsome version.")

<p class="u-ImageDescription">Pingdom Tools website speed test scores for the Gridsome version.</p>

An average Medium page will download some 3-4MB of data *initially.* So it's not that bad but it ain't worthy of the <a href="https://250kb.club/" target="_blank">250kb club</a>. We're also basically hitting 3s load time, not ideal if you want to have that crisp instantaneous feel on your ordinary (depending on where you live) bandwidth speed.

<hr>

Let's look at how Metalsmith's version stacks against Gridsome's.

![A screenshot of Chrome's Lighthouse performance tool metrics between the Gridsome and Metalsmith versions.](/static/images/web_vitals_diference.png "Lighthouse metrics between the Gridsome (above) and Metalsmith (below) versions.")

<p class="u-ImageDescription">Lighthouse metrics between the Gridsome (above) and Metalsmith (below) versions.</p>