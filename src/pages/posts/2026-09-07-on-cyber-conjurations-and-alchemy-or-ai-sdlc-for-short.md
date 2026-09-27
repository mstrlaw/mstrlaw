---
layout: /src/layouts/PostLayout.astro
title: '[WIP] On Cyber Conjurations and Product Alchemy. AI SDLC for short.'
summary: An exploration of AI driven Product Engineering,
feat_image: /images/uploads/aisdlc_v0.jpeg
feat_image_alt: ''
hide_feat_image: false
description: ''
publish_date: 2026-09-07T23:38:00
update_date: 2026-09-07T23:38:00
type:
  - post
date: ''
thumbnail: ''
thumbnail_description: ''
---

## Preface

We're in the second half of 2026 and an increasingly large swath of the tech world is waist deep in Agentic software development (or whatever word you're using at the time or reading).

Naturally, you want to know (do you?) what the fuss is about. You've got to _upskill_ yourself, stay relevant and remain valuable in the job market. "It's not AI that'll take your job, it's someone else that uses AI better than you" they say, as they as they look at workers fighting among themselves and miss the bigger picture.

Anyways. You embark on a journey, still ongoing, to see where all this might lead. FOMO and all of that.

You wanna experience the new paradigm being touted on X and other corners of the civilized web. If this is the last frontier before either utopia or dystopia — depending on who you ask — let's see it up close.

This might come out to you as snarky and think: another pissed engineer because of <_insert reason_> but no. I'm highly skeptic of the AI boosters stating this technology will replace us all while at the same time, quite impressed with how things might evolve and what it means for creative builders. Luckily we can hold multiple emotions at once.

<hr/>

I've written code for most of my career although I've not been doing it professionally for some years now. Nevertheless I'm still fond of building things. I'm always building something. Digital things.

I spend day managing humans, teams, decisions, tradeoffs and deliveries. At my day job I can't experience the full scale of this transformation. Too many restrictions, for the right reasons. 

That's fine, but by the time a decisions gets made, the state of the art has shifted 12 times and whatever you thought was cool isn't anymore. An evergreen project is needed.

<hr>

Haven't written a post in ages but I wanted to do this one. I want it to be a technical time capsule as well as something that captures the awkwardness of it all.

My trigger for wanting to write wasn't: "_This surely will be handy to others_".

It was more of "What the _hell_ are we doing here?".

I want to understand what this all means for me, for us, the industry, for society. And in typical builder fashion, building is what I need to understand how it works.

## The Project

In May '26 I was approached to help build [Free The Flat](https://freetheflat.co.uk), a project for helping UK home owners to manage their buildings. Cool founders, a real apparent problem and a worthy cause.

On top of that, an evergreen codebase where product engineering can meet AI driven development full blast. An opportunity to build in this new world I keep hearing of.

I'm not going to go into details of the product itself but it isn't the next Uber for Housing or whatever. It's not a high-frequency crypto trading product with realtime needs.
Simple enough that I could build it, complexity enough to assess the possibilities and pitfalls of AI driven product engineering.

### Fundamental Things Apply As Time Goes By

As of writing the industry is far from having any established, standardized way of applying AI SDLC. It's like when DevOps emerged. It took years until the practices were understood and normalized (and then, naturally, captured and repackaged by the industry), and for the tooling around it to become stable and established.

It's the same now. A bunch of people trying to see what they can cook up with the current ingredients, but each with their own flavor.

I think the differences between the "AI Is Dumb!" and the "It's So Over!" camps can, in part, be explained by how much one has deeply engaged with the technology and experienced the cutting edge. I'm not talking about whether it's a good thing (or morally correct) to use AI.
I’m talking whether the output and quality are good

I see this in my technical interviews, in everyday discussions with friends and colleagues and in online social circles. Engineers that use LLMs to do a thing here and there by prompting back and forth have a very different take from those that look to setup AI as a central part of how they develop.

Having said that, just because you plan with AI, assign the resulting tasks to AI and wait until it finishes them, I wouldn't call it AI SDLC. Because, well, you need the SDLC part. Ideally a well though out one.

![Screenshot of a GitLab pipeline showing several jobs green.](/images/uploads/Screenshot%202026-09-06%20at%2022.59.59.png "GitLab pipeline an MR is openened")

<small>GitLab Pipeline when opening an MR.</small>

Good software engineering practices apply, perhaps more than ever.

You need to actually plan and design your system more thoroughly, because if you'll retain any type of context, it won't be code itself but the contours of your architecture.

Also now you need to think about something called a [harness](https://en.wikipedia.org/wiki/Agent_harness)? Like _a lot_. Because now the job is closer to taming a wild horse than what used to be called safety mechanisms or quality control.

As an engineer you might end up working on this almost exclusively. Oh, and QA-ing as hell too.

<hr>

### Project Structure

We require a backend and some frontend.

My go-to approach is that of a [monorepo with workspaces](https://code.claude.com/docs/en/large-codebases), something I had in mind trying for ages (but didn't want to spend days figuring out how to setup CI/CD). Client and Server, Documentation. Shared types, etc.

One single repo and a unified context for the AI. Top MD with split MDs per workspace, one knowledge folder referenced elsewhere.

```plain
root/
 |-claude.md
 |-apps
 | |-client/
 | | |-claude.md
 | | |-src/
 | | |-components/
 | | |-...
 | |-server/
 | | |-claude.md
 | | |-src/
 | | |-...
 |-knowledge/
 | |-architecture.md
 | |-agentic-workflow.md
 | |-...
```

<small>Simplified repo structure</small>

I keep things simple. The server is hosted on Digital Ocean, client and user docs on Cloudflare. Code hosted and deployed via GitLab.

## Standard AI Lifecycle

Now that we got this out of the way, it was time to build the product. I started through what I call the "Standard" way of using AI. Not sure how it's called, but it's when you're basically a [Reverse Centaur](https://us.macmillan.com/books/9780374621568/thereversecentaursguidetolifeafterai/).

I hear a lot of people still using AI this way.

Discuss with humans what to implement. Take that discussion and do some planning with AI for defining jobs to be done. Spin another session and start building this with another AI and steer it until the outputs get good enough. Follow along each step, click accept. Maybe review things at the end, really depends on your team's culture.

You then go onto spinning a couple of parallel sessions to go quicker (multi-tasking.. yay.).
It becomes unsustainable to try mentally keeping up with corner case you had to make a decision about 4 turns ago for your 2nd agent. You have too many branches, you're waiting on each other sessions to finish things. Bad.

But this is how the basics of an AI workflow get defined. Through these weird beginnings. Gradually you keep improving: multiple MDs, building guardrails as needed, add some skills, and fine tuning how you and your other human teammates relate with AI.

<hr>

As the project grows and you accelerate your [cycle time](https://martinfowler.com/bliki/CycleTime.html), you move from holding code and structure in your head, patterns, technical caveats, to holding conversations context, what is being built in sessions A and B, the state of work. Directing an agent to follow up on a bug. Remembering what the agent should remember, so that you remind yourself to tell the agent to remember that edge case. Update the harness. Discuss the harness with your AI. Also, review the user feedback and spec it in a digestible way for your AI.

Days of this. But it got us to our first product launch after about 1.5 months. It's also a recipe for breaking your brain.

## AI SDLC

Because you don't wanna burn out, to smother that last ounce of critical thinking, it's only logical to handover even more to AI. Truthfully, for a couple of months I was nothing but a glorified [meat proxy](https://dontbeameatproxy.com/), planning requirements from the ground up, reviewing feedback and then planning the implementation of that feedback. Rinse and repeat.


WIP - Linear as the spine. Cyrus for Agentic AI. Tighter feedback loop between humans. Lessons learned from first iterations.

![](/images/uploads/AI%20SDLC%20v1.png)

<small>Product Development centered around AI.</small>

1 WIP

2

3

4

5

### Cyrus Modifications

WIP Describe custom changes to Cyrus local copy to implement the workfow.

### The full picture

After a while I had to generate something to let me keep track of all the small tweaks. AI SDLC projects need this as part of their documentation so that agents understand the reality they work in and their relationship to humans, tasks and other agents working.

<iframe src="/posts/agentic-workflow.html" title="Agentic workflow" loading="lazy" class="w-full h-[600px] rounded-xl border-0"></iframe>

[View full size.](https://mstrlaw.com/posts/agentic-workflow)

## Lessons

Here's a list of things I've learned and keep learning in this new setup. Some are known and maybe common sense, others are more specific to this recipe and others are just what I believe in (yeah we don't need facts when things are non-deterministic, right?)

### Make sure your context is always green AF

If you have long term context in a spine like Linear, GitHub or your local knowledge MDs, always _ALWAYS_ make sure the agent keeps knowledge up to date. Why something exists the way it does, why things relate to each other, when to do/use X versus Y. If a ticket was planned in a way, but then through implementation or review the ticket assumptions were wrong, update the ticket or add a comment with context as to why that happened.

This includes documentation about how your AI SDLC works. Keep this in your repo and each time you tweak your way of working, review the documentation.

Use a form of deterministic way to ensure that (tools, skill invocation). AND even if you use these tricks, for good measure, occasionally run a thorough documentation review at the end of a session or in a new session.

### Analyze your AI SDLC frequently

Every time an autonomous work session ends that had some hiccups (i.e. it got stuck, forgot to follow an instruction, etc), spin a new session with a beefed up model and ask it to run a post-mortem style analysis for a given ticket.

It'll pick up all the sessions invoked by Cyrus and analyze them. It can provide a lot of detailed information as to how an agent performed, what skills and tools were or were not used, and propose improvements. Much of my current flow was refined using this approach.

![](/images/uploads/Screenshot%202026-09-06%20at%2023.07.03.png)

<small>Post Mortem analysis for Linear tickets and. handling by Cyrus</small>

![](/images/uploads/Screenshot%202026-09-06%20at%2023.07.11.png)

<small>Analysis of multiple tickets handled during a given day</small>

### Anthropic is being silly on the AI SDLC gains

What time AI saves you on building, you'll spend it on planning and reviewing.

<small> of multiple tickets handled during a given day</small>

## The future?

WIP

![Still of 2006 movie Idiocracy with Brawndo CEO in a video call, panicking, yelling "The Computer did that auto-layoff thing to everybody"](/images/uploads/brawndo.png "Brawndo CEO panicking")

<small>Brawndo CEO [panicking](https://www.youtube.com/watch?v=7THG28GprSM) as the computer does that auto-layoff thing.</small>
