---
layout: post.hbs
title: Balancing Engineering And Product Mindsets
summary: Thoughts and learnings on the relationship between the product and
  engineering roles, more specifically between product managers and tech leads.
feat_image: /static/images/cloud.png
feat_image_alt: Hand drawn blue and green circles with the words Engineering
  Mindset and Product Mindset pointing to each other.
publish_date: 2021-07-08T23:00:27.886Z
update_date: 2021-06-08T23:00:27.897Z
---
I’m lucky to have both a background in engineering but also in marketing & management. These areas complement each other wonderfully, although sometimes it can be tough to strike the right balance between both when building products.

## Delivery Starts on Discovery

This is, to me, the most fundamental notion that can impact the success of a product.
If you’re any sort of product owner — founder, CEO, product manager — you’ll get the best bang for your buck by involving engineers as early as possible in the discovery stage.

“If you’re just using your engineers to code, you’re only getting about half their value.”
— Marty Cagan, Inspired

<br>

Of course the quality of the feedback you get will depend on the seniority and specialization of the engineers you talk to but it also depends on their overall business savviness. In essence, you want someone that can do a balanced, comprehensive analysis of the problem to be solved.

To simplify we can look at two axises: technical knowledge and business knowledge.

![A chart representing Technical Knowledge in the Y axis and Business Knowledge in the X axis.](/static/images/balance.png "The sweet spot for a balanced tech lead.")

<p class="u-ImageDescription">The sweet spot for a balanced tech lead.</p>

Technically strong engineers with deep expertise in their stack are good at determining technical feasibility: can the technology support it? Can we scale it? What resources will it require?

But if they lack knowledge on key business aspects and nuances, or if they have no understanding of the customer and the problem to be solved, then you’re minimizing your chances of finding the best possible solution.

Conversely, someone that has a solid understanding of how the business is meant to run, that knows what customers want and how users use the product can probably come up with interesting alternatives and solutions. But if they are less experienced engineers then they may not be able to truly assess the depth or complexity of certain technical challenges and underestimate the effort required to deliver them.

Of course, this all depends on the context and scope of the product to be built as well as the skills of the team. What is true though is that engineers are usually very creative and can therefore make valuable contributions in the discovery phase of a new product or feature.

Now, as a tech lead, what you should aim for is to master the best that you can your technical stack all the while being as knowledgeable as possible about your business as a whole.

For the former that means (among other things) always being up-to-date with new techniques and industry standards and getting your hands dirty often. For the latter it means talking frequently and extensively with the product manager(s), asking for feedback from customer support and sales, diving into the available data, recurrently observing user sessions and even participating in customer interviews. Anything that can put you in the upper-right corner of that quadrant.

<hr>

As an example, while working on [](https://unbabel.com/)<a href="https://unbabel.com/" target="_blank">Unbabel</a>’s web based translation product (think of an interface along the lines of Google Translate), we realized that users had to painstakingly switch between the source and target languages they were requesting translations for.

Together with the product manager we pondered on how this experience could be enhanced. It had come to my attention that our NLP team had developed a service that could do language detection for another product. The idea was straightforward: what if we detected the source language and automatically switched the target translation on the user’s behalf so they wouldn’t have to do it manually?

I reached out to the other team’s tech lead as well as other engineers that worked directly on the service in order to ensure it could handle the load, all the while performing tests to determine that the detection success rate for each of our supported languages was acceptably high.

After validating these, I sat down with the designer to think on how we’d change the UI to support this new feature: the user would need to understand that the translation direction had changed automatically; there could be cases where our detection confidence level would be too low to perform the switch; the user could want to turn off the feature; in some cases the feature wouldn’t even be made available.

![A line chart displaying the evolution of the automatic language detection versus mouse clicks versus keyboard shortcut.](/static/images/mixpanel_feature_tracking.png "Usage of the automatic language detection Vs. mouse clicks Vs. keyboard shortcut.")

<p class="u-ImageDescription">Usage of the automatic language detection Vs. mouse clicks Vs. keyboard shortcut.</p>