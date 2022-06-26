---
layout: post.hbs
title: Team communication frequency as a proxy to discovery/delivery health
summary: While reading the book <a href="https://teamtopologies.com/"
  target=blank>Team Topologies</a> – specifically on the communication dynamics
  between teams – I ponder on a recent release at <a href="https://unbabel.com"
  target="_blank">Unbabel</a>.
feat_image: /static/images/communication_along_time.jpg
feat_image_alt: A depiction of a chart with three different colored inverted
  parabola graphs. The Y axis represents communication volume and frequency. The
  X axis represents the time spectrum of discovery and delivery.
description: Teams communication frequency and volume as a signal to
  discovery-delivery health.
publish_date: 2022-06-26T15:18:02.094Z
update_date: 2022-06-26T15:18:02.104Z
---
For this massive release, the teams had been working intensely for consecutive sprints to meet an important milestone for the business. There was no way around this date but we had managed to negotiate the details of what was to be delivered. Regardless, it was a lot.

Things didn't run smoothly nor equally for many of the team members. Delivery hadn't been thoroughly planned nor accompanied, cross-team dependencies hadn't been mapped or coordinated in detail. Much planning detail was left out as people were subject to a lot of context switch from different cognitive domains.

More reasons were identified during our delivery retrospective. To me, it was a good example of the <a href="https://en.wikipedia.org/wiki/Swiss_cheese_model" target="_blank">Swiss Cheese Model</a> in action in terms of software delivery.

<hr>

As we moved closer to the release date, I noticed that communication was picking up in various Slack channels between team members within and out of their respective teams. Some of it was on aligning expectation to get some dependencies delivered yet much of it was clarification on specificities of what they were delivering.

It was kind of wild seeing the (sometimes recurring) questions, doubts and confusion picking up pace as teams were merging their work together or getting feedback from various stakeholders as they deployed their work.

<hr>

## To what extent can communication frequency and volume be a health proxy when it comes to delivery success?

This thought came from reading the following line from the book's 2nd:

> Fast flow requires restricting communication between teams. Team collaboration is important for gray areas of development, where discovery and expertise is needed to make progress. But in areas where execution prevails – not discovery – communication becomes an unnecessary overhead.

This observation requires to acknowledge that there is not one-size-fits-all scenario or metric.

Considering the above quote, I visualized a couple of lines presented in the above image.

**The green line**

Teams start off in uncertainty and are in a mostly discovery stage with high communication volume and frequency to reduce uncertainty as to what to deliver. They focus mainly on discovery and planning delivery.

As things progress forward, teams *should* require less frequent communication as dependencies, deliveries and estimated date have been defined and planned. Communication levels won't ever reach zero as the delivery date arrives, teams might coordinate more, resolve last minute issues and such. It might not plateau and even pick up, but not be central.

**The yellow line**

This scenario implies some late start to the discovery process – for whatever reasons. As a result teams likely won't spend as much time planning as they should. There can be less communication happening as the depth and breadth of discovery is smaller due to less available time to juggle discovery and delivery. 

As teams arrive closer to the release, the volume of communication might not go down much as they'll be making up for lost ground for less discovery and delivery planning.

**The red line**