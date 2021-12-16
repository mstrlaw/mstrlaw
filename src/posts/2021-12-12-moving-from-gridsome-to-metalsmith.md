---
layout: post.hbs
title: Time to refactor my website. Again.
summary: I've had been wanting to make my website more performant, closer to an
  old school vanilla website, without any fancy frontend framework. Less is
  more, right?
feat_image: /static/images/metalsmith.jpg
feat_image_alt: A person operating a wielding machine.
publish_date: 2021-12-14T00:06:06.391Z
update_date: 2021-12-15T00:09:42.353Z
thumbnail_description: This is the description of the image.
thumbnail: /static/images/metalsmith.jpg
date: 2021-12-12T21:58:24.436Z
description: How often should you refactor your personal website?
---
I don't know how ofter others think about changing their websites. I wonder how often they actually end up doing so. I guess it depends on the sort of developer we're talking about..

In the past, I've used my website as a business card (in a way I still do). But I also like to use it as a "safe space" to test and learn new things.

I want it to embody minimalism, not only visually, but as a whole. This means having a simpler stack too. Isn't it funny to think that a web app could evolve as its owner does so too?

## Choosing a stack

Anyways, after some research with <a href="https://github.com/myles/awesome-static-generators" target="_blank">this list of static site generators</a> as my starting point, I decided to go with <a href="https://www.metalsmith.io/" target="_blank">Metalsmith</a>. It is quite bare bone but extensible enough so that you get layout, templates, and other plugins that turn it into a pretty decent developer experience. Check out <a href="https://github.com/mstrlaw/mstrlaw" target="_blank">the repo</a> if you wanna spin it and use for yourself.

## The quest to zero

So what were the performance gains? Well, I was using <a href="https://gridsome.org/" target="_blank">Gridsome</a> previsouly — a very solid static generator if you want to keep it in the Vue universe — so it's not like I was in the red when it comes to web vitals, right?

![A screenshot of Chrome's Lighthouse performance tool for the Gridsome version.](/static/images/old_lighthouse-min.jpg "Lighthouse scores for the Gridsome version. Not too shabby.")

<p class="u-ImageDescription">Lighthouse scores for the Gridsome version. Not too shabby.</p>

Yeah not bad. But the TTI was still high, floating around 2-4 seconds. Also, how much data are we downloading just for this simple website? <a href="https://tools.pingdom.com/" target="_blank">Pingdom Tools</a> has the answer (with Tokyo as the test location):

![A screenshot of Pingdom Tools website speed test tool for the Gridsome version.](/static/images/old_pingdom_tokyo-min.jpg "Pingdom Tools website speed test scores for the Gridsome version.")

<p class="u-ImageDescription">Pingdom Tools website speed test scores for the Gridsome version.</p>

An average Medium page can download some 3-4MB of data *initially.*

We're not there, but it's not worthy of the <a href="https://250kb.club/" target="_blank">250kb club</a> too.

We're also basically hitting a 3s load time, not ideal if you want to have that crisp instantaneous feel on your ordinary (depending on where you live) bandwidth speed.

<hr>

Let's look at how Metalsmith's version stacks against Gridsome's.

![A screenshot of Chrome's Lighthouse performance tool metrics between the Gridsome and Metalsmith versions.](/static/images/web_vitals_diference.png "Lighthouse metrics between the Gridsome (above) and Metalsmith (below) versions.")

<p class="u-ImageDescription">Lighthouse metrics between the Gridsome (above) and Metalsmith (below) versions.</p>

TTI was reduced by ≈43% and Blocking Time to 0. The <a href="https://web.dev/speed-index/" target="_blank">Speed Index</a> (speed at which the user can see something) has improved too by ≈58% — all of these imperative for the perceived (and real) speed.

We've shaved milliseconds almost everywhere, understandable as we've reduced our total amount of JS, CSS and HTML in use. So how much are we downloading right now?

![A screenshot of Pingdom Tools website speed test tool for the Metalsmith version.](/static/images/new_pingdom_tokyp.jpg "Pingdom Tools website speed test scores for the Metalsmith version.")

<p class="u-ImageDescription">Pingdom Tools website speed test scores for the Metalsmith version.</p>

Well, we've managed to get a 6.5x reduction in the page size, from 360kb to 55kb. That's pretty cool! And expectedly, load time is now 1.82s, down 1 second from the initial 2.79s.

Granted, bits of text information from the previous version were removed from the homepage that we're testing, but that doesn't explain the 305kb less. All right so what about this current page? What's its score?

![A screenshot of Chrome's Lighthouse performance tool metrics between for this page.](/static/images/new_post_lighthouse.jpg "Lighthouse performance tool metrics for this page.")

<p class="u-ImageDescription">Lighthouse performance tool metrics for this page.</p>

Not that bad.

<br>

And the only reason we're not hitting 100% on Best Practices (93) is because we're only providing JPEG/PNG images and not WebP (even though assets were manually compressed). 

We're also not lazy loading assets or providing an opt-in asset download approach, meaning we're downloading all of those at once, hence having a page download of about 600kb as soon as we land.

![A screenshot of Pingdom Tools website speed test tool for this page version.](/static/images/new_post_pingdom.jpg "Pingdom Tools website speed test scores for this page.")

<p class="u-ImageDescription">Pingdom Tools website speed test scores for this page.</p>

Load time is definitely not terrible.

As for implementing lazy loading, this will likely require a custom NetlifyCMS widget, some code to tell Metalsmith how to compile the markdown to HTML and some custom JS to make use of the IntersectionObserver API to implement the lazy load mechanism itself.

For now, that'll need to wait.

<hr>

So here's to a weekend hacking away the 3rd version of my website. Pretty happy with the improvements. It's not insane, but it's on the right track.

<br>

After all, what's a dev's website if not a reflection of what they value?