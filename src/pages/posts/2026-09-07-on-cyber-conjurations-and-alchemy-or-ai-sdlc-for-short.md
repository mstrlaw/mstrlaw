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

We're in the second half of 2026 and an increasingly large swath of the tech world is now waist deep in Agentic software development (or whatever word you're using at the time or reading).

Naturally, you want (do you?) to know what the fuss is about. You've got to _upskill_ yourself, stay relevant and remain valuable in the job market. "It's not AI that'll take your job, it's someone else that uses AI better than you".

So you embark on a journey, still ongoing, to see where this leads. FOMO and all of that.

You wanna experience the new paradigm being touted on X and other corners of the civilized web. If this is the last frontier before either utopia or dystopia — depending on who you ask — let's see it up close.

You might read this as coming out a bit snarky and think: another pissed programmer because of <_insert reason_> but no. I'm simultaneously highly skeptic of the AI boosters stating this technology will replace us all and

<hr/>

I've written code for most of my career although I've not been doing it professionally for some years now. Nevertheless I'm still fond of building things. I'm always building something. Digital things.

I spend day managing humans, teams, decisions, tradeoffs and deliveries. At my day job I can't experience the full scale of this transformation. Too many restrictions, for the right reasons. 

That's fine, but by the time a decisions gets made, the state of the art has shifted 12 times and whatever you thought was cool isn't anymore. An evergreen project is needed.

<hr>

Haven't written a post in ages but I wanted to do this one. I want it to be a technical time capsule as well as something that captures the awkwardness of it all.

My trigger for wanting to write wasn't: "_This surely will be handy to others_".

It was more of "What the _hell_ are we doing here?".

I want to understand what this all means for me, for us, the industry, for society. And in typical building fashion, building is what I need to understand how it works.

## The Project

In May '26 I was approached to help build [Free The Flat](https://https://freetheflat.co.uk), a project for helping UK home owners to manage their buildings. Cool founders, a real apparent problem and a worthy cause.

On top of that, an evergreen codebase where product engineering can meet AI driven development full blast. An opportunity to build in this new world I keep hearing of.

I'm not going to go into details of the product itself but it isn't the next Uber for Housing or whatever. It's not a high-frequency crypto trading product with realtime needs.
Simple enough that I could build it, complexity enough to assess the possibilities and pitfalls of AI driven product engineering.

## Fundamental Things Apply As Time Goes By

As of writing this I think we're far from having any established, standardized way of applying AI SDLC. It's like when DevOps emerged. It took years until the practices were understood and normalized (and then, naturally, captured and repackaged by the industry), and for the tooling around it to become stable and established.

It's the same now. A bunch of people trying to see they can cook up with the current ingredients, but each with their own recipe.

I think the differences between the "AI Is Dumb!" and the "It's So Over!" camps can, in part, be explained by how much one has deeply engaged with the technology and experienced the cutting edge. I'm not talking about whether it's good or not to use AI, but of the output and quality of AI.

But I see this in my interviews. Engineers that use LLMs to do a thing here and there by prompting back and forth experience have a very different take from those that have looked to have AI as a central part of how they develop.

Having said that, just because you might plan with AI, assign to AI and wait until it's finished, I wouldn't call AI SDLC, because you need the SDLC part. Ideally one well though out.
You need to actually plan and design your system and harness _a lot_. Good software engineering practices apply, perhaps more than ever.

As an engineer you might end just working on this almost exclusively. Oh, and QA-ing as hell too.

<hr>

**Project Details**

For the structure I opted for a monorepo with workspaces. Client and Server. Shared types, etc. More importantly, one singe repo and context for the AI. Top MD with split MDs per workspace, one knowledge folder referenced elsewhere.

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

This has been working more than fine.

It's capable of planning and implementing features E2E, test them, ship them to staging.

![Screenshot of a GitLab pipeline showing several jobs green.](/images/uploads/Screenshot%202026-09-06%20at%2022.59.59.png "GitLab pipeline when opening an MR")

<small>GitLab Pipeline when opening an MR</small>

## Standard AI Lifecycle

Hello - basic AI relationship. MDs, skills. Lots of human intervention.

draft: I've moved from holding all the minute code, patterns and caveats, as well as architecture and systems in my mind, to holding the harness details, the baked in decisions within the AI workflow.

## 

## AI SDLC Development - My recipe

Hello - Linear as the spine. Cyrus for Agentic AI. Tighter feedback loop between humans. Lessons learned from v1.

![](/images/uploads/AI%20SDLC%20v1.png)

**Interactive Explorer**

Full explanation of how it works. After a while I had to generate something to let me keep track of all the small tweaks. AI SDLC projects need this as part of their documentation so that agents understand the reality they work in and their relationship to humans and other agents.

<iframe src="/posts/agentic-workflow.html" title="Agentic workflow" loading="lazy" class="w-full h-[600px] rounded-xl border-0"></iframe>

<a href="[https://mstrlaw.com/posts/agentic-workflow](https://mstrlaw.com/posts/agentic-workflow)" target="_blank">View full size.</a>
