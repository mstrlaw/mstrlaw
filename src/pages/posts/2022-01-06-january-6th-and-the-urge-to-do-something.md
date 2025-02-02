---
layout: /src/layouts/PostLayout.astro
title: January 6th And The Urge To Do Something Against It
summary: Today marks the one year anniversary of the storming of the U.S.
  Capitol. I'm not American but I believe in the democratic system and, at that
  moment, I felt the urge to do something.
feat_image: /images/uploads/capitol_preview.gif
feat_image_alt: The city of Washington D.C. seen on Mapbox with circles
  indicating the location of videos from the Parler hack.
description: Reflecting on January 6th and the urge to do something about it
publish_date: 2022-01-06T21:13:36.422Z
update_date: 2022-01-06T21:13:36.435Z
---

In the dullness of the end of a regular day at the office, my colleague Mathieu turns and casually announces "Looks like people are <a href="https://en.wikipedia.org/wiki/2021_United_States_Capitol_attack" target="_blank">attacking the U.S. Capitol building</a>".

\- "Attacking? You mean terrorist attacks?"

\- "No like, Americans. Trump supporters it seems."

We looked at the feeds on Twitter, live streaming CNN or Fox on Youtube and checking the headlines here and there.

Now, Lisbon is far away from Washington D.C. which means that it isn't our Capitol, it wasn't a Portuguese building. That crowd wasn't attacking the Parliament.

But in a very concrete way, it attacked something that we share with Americans: the ideal of Democracy. And that was, indeed, something dystopian to watch live.

<hr>

Days later — as footage surfaced of people denigrating an established democratic process: rioting, breaking an entry, joking around and just having a ball shitting on a concept that literally gave them the life that precisely allowed them to march down and protest — something interesting happened.

The internet got annoyed and thousands of <a href="https://en.wikipedia.org/wiki/Parler#Content_scraping" target="_blank">Parler videos were scraped</a> and released to the web, georeferenced and all.

Parler is just one of the many sad attempts there have been to create alternative virtual communities where the shared reality gets distorted and parallel narratives get to be built in order to avoid facing the actual reality we live in. The latest flavor being Gettr.

I'll never understand people actively looking for a space that tells them what they want to hear. Hearing what we don't want to hear is what strengthens our mental. The oposite ironically makes us even less able to face the inconveniences of an imperfect world.

<hr>

At some point, leaked videos were accessible. Mathieu and I found them <a href="https://jan6attack.com/" target="_blank">hosted</a> by <a href="https://twitter.com/carstensenpol/" target="_blank">Tommy Carstensen</a>. We looked at them, looked at each other and knew we could do something with this and knew we had to do something, anything.

The idea was pretty straightforward: let's do a visual map where people can see where the videos were taken, zoom in on them and look at what happened "as if you were there". This needed to be seen by as many people possible, without any strong rational backing except the belief that this attack on the democratic ideology couldn't be shrugged off as just another day in the U.S.A.

<hr>

<h2>Purposeful Hackathon</h2>

We put our heads down and plowed through what were basically 2 nights in a row until dawn to pull it off as fast as possible and make it available.

The original hosting wasn't meant for streaming videos. Files were raw, too big and couldn't be played on some browsers due to their format.

We downloaded all the available Parler videos hosted by Tommy, converted them into mp4, compressed them and hosted them on a Digital Ocean Spaces to serve them through their CDN. We also extracted the first frame of each video to create a preview thumbnail.

Then, we moved onto positioning the videos on Mapbox. The Parler videos were referenced so it was easy. Along the way we learned there were videos being compiled by people around the web form other platforms. When we found <a href="https://mega.nz/folder/30MlkQib#RDOaGzmtFEHkxSYBaJSzVA" target="_blank">this Megaupload folder</a>, we decided to add the Twitter videos too.

Unfortunately those videos didn't have any geolocation, so we went ahead and pinpointed their location manually through a combination of visual cues from other videos, Google Street view for outside videos and researched for the Capitol building interior landmark and cues that could indicate the location of the internal videos.

![A set of google maps screenshots with landmark references and a map of the U.S. Capitol](/images/uploads/references.png "Set of reference images used to pinpoint location of videos that didn't have associated geodata")

<p class="u-ImageDescription">Set of reference images used to pinpoint location of videos that didn't have associated geodata</p>

We even went ahead and put up a how-to description for possible contributors that wished to help identifying the location of videos. The site was live in a couple of nights, but georeferencing the remaining videos took manny more hours.

Hours spent watching a couple of hundreds of videos of people cheering and having a tribal time around this decaying exhibition of disrespect and idiocy, the herd mentality displayed at its best (funny enough from the same group that gleefully threw around the NPC memes).

While having to watch the videos, I ended up tagging videos to allow for some filtering on the app. You can filter the 873 videos for chants, vlogs, police, violence, (discernible) conversations, and even the ones where Trump, Alex Jones and Roger Stone are seen. Fun.

At that moment, for a brief moment, I felt at least I was using technology for something "worthy", whatever that word means. We also took the opportunity to learn a bit here and there.

<hr>

We shared the link on the _r/washingtondc_ subreddit in the hopes it would be useful to Washingtonians (I had traveled to the city months ago, visiting the Capitol too and admittedly felt some connection to the event). We were happy if only even one person got value out of this project to grasp the sheer extreme that his represented to all those that cherish our way of life.

![Screenshots from user feedback from the Reddit post.](/images/uploads/reddit_capitol.png 'Some of the feedback from the post in *r/washingtondc*')

<p class="u-ImageDescription">Some of the feedback from the post in *r/washingtondc*</p>

![A screenshot of the visitor analytics data for January 2021, showing a total of 1,761 sessions.](/images/uploads/capitol_visits.jpg 'Analytics data for visits to the web app.')

<p class="u-ImageDescription">Analytics data for visits to the web app</p>

<h2>Technologists Must Improve What They Can</h2>

Why even do this? There's no way of measuring if any of this had any impact, but I felt that adding another voice to the chorus of people manifesting against this event was better than simply shaking our heads.

What happens in the U.S.A. has consequences for the rest of the world whether or no we acknowledge this fact. A strong man gets elected in the most influential nation in the world, others are going to start popping out, as it has been the case. An idiot is in charge, other idiots are going to feel legitimized. A mob attacks the ideal of democracy, other fools are going to do the same.

We must, with the tools at hand, do our part to protect the system that allows for democracy. Many other technologists around the world did what they could, fearful that this day could be scrubbed from the mainstream web or spun into something else by propagandist TV networks, sycophants and useful idiots. Along the way I discovered <a href="https://facesoftheriot.com/" target="_blank">Faces of the Riot</a>, a website built by someone that had used readily available facial detection tech and applied it to the Parler videos, then listing all of those faces in the hopes of helping people and authorities identifying the perpetrators of the riot.

I ended up interviewing him for <a href="https://criticalfuture.tech/issue-5-march-2021-faces-of-the-riot-2ED4B1DFE5EA" target="_blank">Critical Future Tech</a> and if you read the interview, you'll see that him too, like so many, felt the urge to do something, anything.

I admire any technologist that realizes his ability to do positive change through their knowledge and expertise and acts on it. We must do our part to prevent the erosion of democracy. Although imperfect, it's the best we've got so far that allows for an inclusive human experience.

> The world will not be destroyed by those who do evil, but by those who watch them without doing anything.
>
> \- Albert Einstein

<hr>

For the curious, the app is hosted on <a href="https://capitol.netlify.app/" target="_blank">https://capitol.netlify.app</a> but you no longer can see any media as we took down the Digital Ocean Spaces. We feel that it had served its purpose and the volume of visits doesn't justify its cost. You can see a bit more on the <a href="https://github.com/mstrlaw/capitol" target="_blank">GitHub repo</a>.
