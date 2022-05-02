---
layout: post.hbs
title: On Practices and How They Shape Resilient Teams
summary: >-
  Product oriented companies usually go through quick cycles of iterations, each
  bringing answers but also new questions. This happens on both operational
  teams — conceptualizing and building the product — as well as executive teams
  — strategizing and defining the product high-level direction.


  <br><br>


  Individuals operate on a spectrum of assumptions, known unknowns and unknown unknowns.


  <br><br>


  And that’s fine. That’s the reality when building novel products and services : you’re making bets on educated guesses and you’re betting time and money on those guesses.
publish_date: 2022-05-02T21:46:50.060Z
update_date: 2022-05-02T21:46:50.072Z
---
<hr>

So what about resiliency? Given this context, resiliency is the ability to cope with constant change and navigate it effectively. From Merriam-Webster: “ability to recover from or adjust easily to adversity or change”. Adjusting and recovering.

A fair amount of people don’t like change. In my experience, Developers and designers don’t enjoy hopping rapidly between missions. But for when that happens, team leaders must help teams become resilient. And to build a resilient team requires acting and caring on an individual level.

<h2 id="practices-to-foster-adaptability">Practices Foster or Hurt Adaptability</h2>

Changing requirements are inevitable, for one reason or another. Therefore, when defining a database's structure or defining the architecture of a system, it’s important to ponder which parts may be more or less prone to change. 

<br>

In the past, when advising on implementation of solutions or reviewing code, I focused much more on standards and avoiding anti-patterns. I'd often go into performance or security related tangents.

<br>

Nowadays, not that I stoped caring for the above, but I find myself more interested in seeing that developers choose an approach that reflects an understanding of what’s known and what's still unknown, to them and to the team.

What should be further improved now and what is likely to change – and how to account for that change in a harmonious way for the codebase, team and product’s stability, whether that's introducing a new feature from scratch or proposing some form of refactoring.

<br>

There are practices that can help or hinder a team’s adaptability (increasing or reducing the speed of changing something and shipping it to production). Some times, this capability - or its limitation - is due to the perception of how crucial (read *sacrosanct*) some practice is to the whole.

<hr>

Picking on just one example: unit testing. 

<br>

Too many times I’ve seen this happen: new feature is delineated and ready to be worked on, developer wants to go for maximum code coverage, TDD for-the-win, sure.

Feature gets shipped, PO/PM realizes feature adoption is weak. Product iterates and introduces changes. Developers rewrite features and associated tests. Repeat the cycle until business value is achieved from said feature or it is discarded.

You get developers averse to changing requirements because it's not just that they have to change features but also rethink and reimplement tests — and that for 2, 3 or more iterations. And, on the other hand, POs/PMs wonder why it takes so long to get changes into production..

<br>

This approach implies longer cycle times which means more time to validate whether or not a feature is worth pursuing. The sooner that's known, the sooner a decision can be made. 

<br>

If developers understand what are the parts more likely to require changes, they can plan their architecture and define unit testing for critical pieces of the architecture that are likely not subject to fundamental alterations, even if some behaviors may changes.

<br>

It’s totally doable to confidently ship software with an initial minimum of unit testing, provided you have sufficient automated end-to-end tests in some pre-prod environment. 

This is especially true for web applications’ frontend where there’s no longer the need to script E2E tests with tools like Cypress. We can instead use point-and-click interfaces to build the scripts with tools like TestProject or Datadog. The time required to build or change the flows is considerably less. Running these every time code is integrated ensures changes don’t break the product and unit test can be gradually implemented during code refractors, as the nature of the feature stabilizes.

<br>

Unit tests require some degree of certainty on the stability of the direction a product is taking. When doing rapid experimentation, this certainty doesn’t necessarily exist. The only certainty is that parts of the code will likely change in the next couple of sprints. Some of it will be scrapped depending on the findings.

<br>

So what’s the problem? Many developers have these notions such as: not only must TDD be the one and only approach to software development (otherwise they are not “real” devs?) but production readiness means the highest possible code coverage, no matter what. 

<br>

This is a sort of inflexible mindset that hurts rapid iteration and sometimes leads to mental blockades. Leads must be aware that 100% test coverage on something that no one wants is wasted time for the whole team. I've been able to ease frustrations by saying "Well, we run all functional end-to-end tests on each commit right? — Right. Meaning that even if piece of your code isn't fully unit tested, breaking changes are still caught in staging right? — Right. And even if some changes do break production for customers, we monitor everything and alarms get triggered, and rolling back is as easy as pushing a button right? — Right. So maybe don't obsess on coverage. And if some of it gets shipped at this discovery stage, that's all right."

<hr>

This is me picking on testing strategies. There are other practices that increase teams resiliency for change like rollout strategies, feature flagging, improving ease of rolling back to stability, depth of system monitoring, escalation processes and team reactivity, etc. 

Understandably, your mileage may vary depending on team seniority, skillset and other constraints.