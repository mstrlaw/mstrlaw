---
layout: post.hbs
title: January 6th And The Urge To Do Something Against It
summary: Today marks the one year anniversary of the storming of the U.S.
  Capitol. I'm not American but I believe in the democratic system and, at that
  moment, I felt the urge to do something.
feat_image: /static/images/capitol_preview.gif
feat_image_alt: The city of Washington D.C. seen on Google Maps with circles
  indicating the location of videos from the Parler hack.
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

Parler is just one of the many sad examples of the attempts there have been to create alternative virtual communities where the shared reality gets distorted and parallel narratives get to be built in order to avoid facing the actual reality we live in.

I'll never understand people actively looking for a space that tells them what they want to hear. Hearing what we don't want to hear is what strengthens our mental. The oposite ironically makes us even less able to face the inconveniences of an imperfect world.

<hr>

At some point, leaked videos were accessible. Mathieu and I found them <a href="https://jan6attack.com/" target="_blank">hosted</a> by <a href="https://twitter.com/carstensenpol/" target="_blank">Tommy Carstensen</a>. We looked at them, looked at each other and knew we could do something with this and knew we had to do something, anything.

The idea was pretty straightforward: let's do a visual map where people can see where the videos were taken, zoom in on them and look at what happened "as if you were there". We just felt this needed to be seen by as many people possible, without any strong rational backing except the belief that this attack on the democratic ideology couldn't be shrugged off as just another day in the U.S.A.

What happens in the U.S.A. has consequences for the rest of the world whether we acknowledge it or not. A strong man gets elected in the most influential nation in the world, others are going to start popping out, as it has been the case. An idiot is in charge, other idiots are going to feel legitimized. A mob attacks the ideal of democracy, other fools are going to do the same.

<hr>

<h2>Purposeful Hackathon</h2>

We put our heads down and plowed through what were basically 2 nights in a row until dawn to pull it off as fast as possible and make it available.

The original hosting wasn't meant for streaming videos. Files were raw, too big and couldn't be played on some browsers due to their format. 

We downloaded all the available Parler videos hosted by Tommy, converted them into mp4, compressed them and hosted them on a Digital Ocean Spaces to serve them through their CDN. We also extracted the first frame of each video to create a preview thumbnail.

Then, we moved onto positioning the videos on Google Maps. The Parler videos were referenced so it was relatively ok. Along the way we learned there were videos being compiled by people around the web form other platforms. When we found <a href="https://mega.nz/folder/30MlkQib#RDOaGzmtFEHkxSYBaJSzVA" target="_blank">this Megaupload folder</a>, we decided to add the Twitter videos too.

Unfortunately those videos didn't have any geolocation, so we went ahead and added their location manually through a combination of visual cues from other videos, Google Street view for external landmarks and research for landmarks that could indicate the location of the internal videos.

![A set of google maps screenshots with landmark references and a map of the U.S. Capitol](/static/images/references.png "Set of reference images used to pinpoint location of videos that didn't have associated geodata")

<p class="u-ImageDescription">Set of reference images used to pinpoint location of videos that didn't have associated geodata</p>

<h2>Technologists Must Improve What They Can</h2>

Even though there's no way of measuring if any of this had any impact, we felt that adding another voice to the chorus of people manifesting against this event means something more than just shaking our heads. 

Many other technologists tried in their own ways to do what they could to disseminate this event, fearful that it could be scrubbed from the mainstream web or spun into something else by propagandists and sycophants.