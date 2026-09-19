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

In May '26 I was approached to help build [Free The Flat](https://https://freetheflat.co.uk), a project for helping UK home owners to manage their buildings. Cool founders, a real apparent problem and a worthy cause.

On top of that, an evergreen codebase where product engineering can meet AI driven development full blast. An opportunity to build in this new world I keep hearing of.

I'm not going to go into details of the product itself but it isn't the next Uber for Housing or whatever. It's not a high-frequency crypto trading product with realtime needs.
Simple enough that I could build it, complexity enough to assess the possibilities and pitfalls of AI driven product engineering.

### Fundamental Things Apply As Time Goes By

As of writing the industry is far from having any established, standardized way of applying AI SDLC. It's like when DevOps emerged. It took years until the practices were understood and normalized (and then, naturally, captured and repackaged by the industry), and for the tooling around it to become stable and established.

It's the same now. A bunch of people trying to see they can cook up with the current ingredients, but each with their own recipe. 

I think the differences between the "AI Is Dumb!" and the "It's So Over!" camps can, in part, be explained by how much one has deeply engaged with the technology and experienced the cutting edge. I'm not talking about whether it's good or not to use AI. I’m talking output and quality.

I see this in my interviews, online and everyday discussions with friends and colleagues. Engineers that use LLMs to do a thing here and there by prompting back and forth have a very different take from those that look to setup AI as a central part of how they develop.

Having said that, just because you plan with AI, assign the resulting tasks to AI and wait until it finishes them, I wouldn't call it AI SDLC. Because, well, you need the SDLC part. Ideally a well though out one.

![Screenshot of a GitLab pipeline showing several jobs green.](/images/uploads/Screenshot%202026-09-06%20at%2022.59.59.png "GitLab pipeline an MR is openened")

<small>GitLab Pipeline when opening an MR</small>

You need to actually plan and design your system and harness, _a lot_. Good software engineering practices apply, perhaps more than ever.
Right. Harnesses. Because now the job is closer to taming a wild horse than what used to be called safety mechanisms or quality control.

As an engineer you might end up working on this almost exclusively. Oh, and QA-ing as hell too.

<hr>

**Project Structure**

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

Discuss with humans what to implement. Take that discussion and do some planning with AI for defining jobs to be done. Spin another session and start building this with another AI and steer it until the outputs get good enough. Follow along each step or review things once done.

Maybe spin a couple of parallel sessions to go quicker (multi-tasking yay..).
It becomes unsustainable to try mentally keeping up with corner case you chose 4 turns ago for your 2nd session agent.

This is the phase where my basic AI workflow was defined. Multiple MDs, initial guardrails, skills, and fine tuning the relationship between humans and AI.

As the project grows and you accelerate your [cycle time](https://martinfowler.com/bliki/CycleTime.html), you move from holding code and structure in your head, patterns, technical caveats, to holding conversations context, what is being built in sessions A and B, the state of work. Directing an agent to follow up on a bug. Remembering what the agent should remember, so that you remind yourself to tell the agent to remember that edge case.

Update the harness. The harness! Also, review the user feedback and spec it in a digestable way for the agent. 

Days of this. But it got us to our first product launch after about 1.5 months. It's also a recipe for breaking your brain.

## Is this AI SDLC?

Hello - Linear as the spine. Cyrus for Agentic AI. Tighter feedback loop between humans. Lessons learned from v1.

![](/images/uploads/AI%20SDLC%20v1.png)

**Interactive Explorer**

Full explanation of how it works. After a while I had to generate something to let me keep track of all the small tweaks. AI SDLC projects need this as part of their documentation so that agents understand the reality they work in and their relationship to humans and other agents.

<iframe src="/posts/agentic-workflow.html" title="Agentic workflow" loading="lazy" class="w-full h-[600px] rounded-xl border-0"></iframe>

[View full size.](https://mstrlaw.com/posts/agentic-workflow)

## The future?

![Still of 2006 movie Idiocracy with Brawndo CEO in a video call, panicking, yelling "The Computer did that auto-layoff thing to everybody"](/images/uploads/brawndo.png "Brawndo CEO panicking")

<small>Brawndo CEO [panicking](https://www.youtube.com/watch?v=7THG28GprSM) as the computer does that auto-layoff thing.</small>
