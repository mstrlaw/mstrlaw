---
layout: /src/layouts/PostLayout.astro
title: '[WIP] On Cyber Conjurations and Product Alchemy. Agentic AI SDLC for short.'
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

We're almost at the end of 2026 and an increasingly large swath of the tech world is waist deep in Agentic software development (or whatever the term is at the time or reading).

Naturally, you want to know what the fuss is about. You've got to _upskill_ yourself. "It's not AI that'll take your job, it's someone else that uses AI better than you" they say.

Anyways. I embarked on a journey, still ongoing, to see where all this might lead. FOMO and all of that.

I wanna experience the new paradigm being touted on X and other corners of the civilized web. If this is the last frontier before utopia or dystopia — depending on who you ask. Let's see it up close.

This might come out to you as snarky and think: another pissed engineer because of _reasons,_ but no. 

I'm highly skeptic of the AI boosters stating this technology will replace us all while at the same time, quite impressed with what it can do and curious on how it might evolve and what it means for creative builders like myself. Luckily we're capable of holding multiple thoughts at once, right?

<hr>

Haven't written a post in ages but I wanted to do this one to act a technical time capsule as well as captures the bizarreness of the moment as I build this project. The journey is still ongoing but have enough to write some thoughts around it.

My trigger for wanting to write wasn't: "_This surely will be handy to others_".
It was more of "What the _hell_ are we doing here?".

I want to understand what this all means for me, for us, the industry, for society. And in typical builder fashion, building is what I need to understand how it works.

## The Project

In May '26 I was approached to help build [Free The Flat](https://freetheflat.co.uk), a project for helping England's home owners to manage their buildings. Cool founders, a seemingly real problem and a worthy cause.

On top of that, an evergreen project where product engineering can meet AI driven development, full blast. An opportunity to build in this new world I keep hearing of.

Simple enough that I can design its architecture and build it, yet complex enough to assess the possibilities and pitfalls of AI driven product engineering.

### Fundamental Things Apply As Time Goes By

As of writing this, the industry is far from having any established, standardized way of applying AI SDLC.
 It's like when DevOps emerged. It took years until the practices were understood and normalized (and then, naturally, captured and repackaged by the industry), and for the tooling around it to become mature.

It's the same now. A bunch of people trying to see what they can cook up with the current ingredients, but each with their own flavor.

I think the differences between the "AI Is Dumb!" and the "It's So Over!" camps can, in part, be explained by how much one has deeply engaged with the technology and experienced the cutting edge. I'm not talking about whether it's a good thing (or morally correct) to use AI.
I’m talking whether the output and quality are good.

I see this in my technical interviews, in everyday discussions with friends and colleagues and in online social circles. Engineers that use LLMs to do a thing here and there by prompting back and forth have a very different take from those that look to setup AI as a central part of how they develop.

Having said that, just because you plan with AI, assign the resulting tasks to AI and wait until it finishes them, I wouldn't call it AI SDLC. Because, well, you need the SDLC part. Ideally a well though out one.

Good software engineering practices apply, perhaps more than ever. Weirdly enough, a lot of teams seem to have forgotten this? Because of AI, now, it's as if we can skip thinking altogether? Terrible stance.

You need to actually spend more time with your plan and designing your system more thoroughly. If you're going to retain any type of context it won't be code itself but the contours of your architecture, the tradeoffs you made decisions upon. How the whole thing fits together.

Also, you now need to think about something called a [harness](https://en.wikipedia.org/wiki/Agent_harness)? Like _a lot_? Because now the job is closer to taming a wild horse than what used to be called safety mechanisms or quality control.

As a software engineer you might end up working on this almost exclusively. Oh, and QA-ing as hell too.

<hr>

### Project Structure

Ok, let's get into the technicalities. We require a backend and some frontend.

My go-to approach is that of a [monorepo with workspaces](https://code.claude.com/docs/en/large-codebases), something I had in mind trying for ages (but didn't want to spend days figuring out how scaffold the project and setup CI/CD). Client and Server, Documentation. Shared types. Simple.

One single repo and a unified context for the AI.
Top MD with split MDs per workspace, one knowledge folder referenced elsewhere.

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

I keep the infra simple. The server is hosted on Digital Ocean, client and user docs on Cloudflare.
Code hosted and deployed via GitLab.

## AI SDLC

With this out of the way, it was time to build the product.

I started with what I call the "standard" way of using AI. Not sure how it's called, but it's when you're basically a [Reverse Centaur](https://us.macmillan.com/books/9780374621568/thereversecentaursguidetolifeafterai/). I hear a lot of people still use AI this way. And likely, they'll keep using it that way more and more.

That standard looks sort of like this:

- Discuss with humans what to implement.
- Take that discussion and do some planning with AI for defining jobs to be done.
- Spin another session and start building this with another AI and steer it until the outputs get good enough.
- Follow along each step, click accept.
- Maybe review things at the end, really depends on your team's culture.

You then go onto spinning a couple of parallel sessions to go quicker (multi-tasking.. yay).

It becomes unsustainable to try to mentally keep up with corner case you had to make a decision about 4 turns ago in your 3rd session.
You have too many branches, you're waiting on each other sessions to finish things. Bad.

But this is how the basics of an AI workflow get defined. Through these weird beginnings.

Gradually I kept improving: multiple MDs, building guardrails as needed, adding skills, and fine tuning how myself and my human teammates related with AI. 

It got us to our first product launch after about 1.5 months. It's was also a recipe for breaking my brain.

<hr>

As the project grows and the [cycle time](https://martinfowler.com/bliki/CycleTime.html) accelerates, we move from holding code and structure in our head, the patterns and technical caveats, to holding conversations context, what is being built in sessions A and B, the state of work. Directing an agent to follow up on a bug. Remembering what the agent should remember, so that we remind ourselves to tell the agent to remember that edge case. Update the harness. Discuss the harness with the AI. Also, review the user feedback and spec it in a digestible way for AI.

Something better comes along.

## Agentic SDLC

This is where we get more technical.

Because I didn't want burn out, to completely smother that last ounce of a brain cell, the only logical step was to handover even more to AI.

Truthfully, for a couple of months I was nothing but a glorified [meat proxy](https://dontbeameatproxy.com/), planning requirements from the ground up, reviewing feedback and then planning the implementation of that feedback. Rinse and repeat. The only thing I've never done is review the code. Don't @ me.

Earlier this year a friend of mine had shown me how his startup was using Linear and assigning tickets to their agents somehow. How agents would create tickets in Linear, open MRs etc.

The setup was impressive and, myself being a big fan of Linear and having already introduced it to the team so we'd use it among ourselves, it made sense to use it as the long lived context layer for managing the project's work — sometimes called Spine.
I think this is one of the defining characteristics of AI SDLC. That and the ability for agents to work reactively. Also, don't look at any of the code.

<hr>

Anyways I ended up with this current setup. There's a more complex diagram below for the completely detailed flow explanation that you can explore.

![](/images/uploads/AI%20SDLC%20v1.png)

<small>Product Development centered around AI.</small>

### 1 - Communications

Nothing crazy here.
All communication happens digitally, whether that's daily coordination/updates via Slack or meetings on Meet. More interestingly, we keep all of customer interviews' transcripts. These are then periodically looked at to review how we're shaping our experiments and product development development.

### 2 - Standard Agentic Development

All development is done on my machine using a Claude Max subscription.

This is your regular prompt-your-agent workflow. I usually have between 2-4 sessions open in my code editor:

- Planning and reviewing plans. Researching possible implementations, technical investigations, comparing solutions. These are where I spend most of my time with the agents to plan and ultimately have AI write that plan into Linear.
- Reviewing the AI SDLC performance, investigate issues encountered by a Cyrus dispatched agent working on a Linear ticket and brainstorm improvements.
- Miscellaneous sessions with varying purposes. Sometimes to investigate and fix an implementation bug directly in the editor without having to open a ticket. Other times for checking if there are any drifts in the documentation after a couple of day's work. 

### 3 - Providing Feedback

At first, feedback was given regularly via Slack or during a call. It was very much me operating as human router between the team and the agent, translating the feedback into more detailed and technically aware specs.

The first improvement consisted of a Claude skill I built for the founders that would take an arbitrarily long list of feedback in a Google Docs file and transform it into Linear tickets. It was a good first step but, not having access to the codebase, their agents ran with many assumptions on how things worked when speccing the tickets.
Because of that, I had to correct them with my own specific implementation details ("use this to do X", "use the component X for the feature", etc) and then my agent (with actual access to the codebase) would need to review everything with the code context this time.

In order to increase the quality of their Linear specs, I invited them to GitLab (as reporters), had them add the Linear MCP to their own Claude subscription instances and modified the feedback skill to read the repo codebase to get its context before writing a ticket's specs.
Depending on the task size, the agent decides whether to create a simple ticket or a ticket made of multiple sub-tickets.

With that improvement, the tickets started coming in with higher accuracy on how to resolve a bug, or how to improve or modify a feature — an important addition before introducing Cyrus.

### 4 - Autonomous Agentic Development

This is where things get interesting and funky. Plans and tickets were all tidy in Linear, but I still had to relay work to my Claude sessions (using remote sessions extensively) by instructing it to work on a ticket. Literally copying and pasting a Linear ticket, waiting for the work to complete, repeat.

I looked up some options for agent orchestrators and one stood out: [Cyrus](https://www.atcyrus.com/).

Now, it's nothing crazy. It's not OpenClaw or whatever the thing's called. Put simply, you install it on your machine, setup a tunnel to route external webhooks and traffic from the internet (I used Cloudflare) and finally, setup an App in Linear, which will show up as your agent in Linear's UI.

With this, one can assign the agent (I ended up naming it Cyrus, 'cause why bother?) to a Linear ticket and it'll kick off an agent to implement the ticket.

At the time of writing, Cyrus is built to be assigned a single ticket, work on it (in a dedicated worktree) and stop.

I wanted to actually be able to chain work and for it, I had to modify the ticket writing skill and combine it with tweaks to Cyrus itself to be able to work continuously on larger tickets.

The gist of the setup is:

- When instructing an agent to write a linear ticket (including the Feedback skill used by the founders), it uses the `linear-ticket-writer` skill which writes Linear tickets specifically with Cyrus in mind. Tickets are always written to be picked up by an AI. If you have humans in your team, you need to change this.
- The ticket contains the necessary specs to implement whatever is being asked, as well as specific instructions on how to continue working the whole set of sub-tickets when these exist. 
- The sub-ticket instruction tells the agent to add a comment on the parent ticket with a tag to the Cyrus agent and specifying which ticket to pick up.
- Because of the agent tag, it gets picked up automatically with comments+ticket context, and the cycle repeats until all work is done for the parent ticket.

A fully detailed workflow is diagramed further below explaining all these.

![](/images/uploads/cyrus_lane.png)

<small>Linear screenshot of multi-tickets being handled through Cyrus.</small>

**Tunning Cyrus**

Some patches and modifications were needed to be made to Cyrus to have this advance use case working:

1. Cyrus conveniently comes with bundled skills that it'll invoke depending on the ticket it gets. That I recall, it can plan, build, ship and perhaps do more. I modified its `verify-and-ship` skill so that it makes use or the repo's `wrap-up` skill (_docs-sync → review → pre-pr → commit → push → close tickets_).
This way I kept the ship behavior consistent between the Standard and Autonomous Agentic workflows. Beyond that, the agent invoked by Cyrus inherits all other MDs in the repo and behaves accordingly;
2. Added an `end_session` MCP the agent can use to end its own session once it completes its work.
Unless fully stopped by someone via Linear's UI, Cyrus sessions under the same ticket are kept "active" so the user can interact with the agent if needed.
For the multi-tickets case, this meant that every ticket got its own session which would remain active. Each time there was an update due to the last ongoing session running and updating the ticket, all previous ones would be triggered, re-loading and processing the whole context for nothing (sometimes not hitting the cache anymore). This consumed tokens at an insane rate. The MCP tool allows to kill the session because the Linear ignores comments the agent writes itself, so it couldn't just write `stop` to itself (a user writing `stop` will kill that session, but not an agent);
3. Cleanly stop any running sessions for a ticket that gets re-assigned Cyrus, so that two agents can't work on the same ticket;
4. Modify `cyrus/config.json` so that `disallowedTools` blocks force-push and a set of other dangerous commands. Headless mode Cyrus approves every tool automatically. Only deny rules actually stop a command;

Besides these, I also setup:

- A worktree bootstrap script: pnpm install, lefthook, Playwright chromium and `.env` injection, so each worktree can actually run the hooks and tests.
- A Worktree cleanup script, scheduled as a LaunchAgent, for removing worktrees once their branch is merged. Leftover worktrees were fillnig the disk.

There are even more fine-tunes I had to do, like changing the default model to handle tickets, not using `glab` to open MRs and more that I already forgot about. I'll need to ask Claude to re-explain the MD knowledge file..

### 5 - CI/CD

Finally — and there's nothing agentic here — all code gets pushed to GitLab where the runner picks it up and executes our test pipeline for every new MR. Nothing gets merged to the main branch.

![Screenshot of a GitLab pipeline showing several jobs green.](/images/uploads/Screenshot%202026-09-06%20at%2022.59.59.png "GitLab pipeline an MR is opened.")

<small>GitLab Pipeline when opening an MR.</small>

The agent has a script for polling an MR's pipeline status, awaiting for the tests to pass before completing its session. When tests fails, it reads the errors and attempts to fix the implementation and/or tests until these pass.

![](/images/uploads/ai_await_ci.png)

<small>Linear's UI showing the agent awaiting on a pipeline.</small>

### Detailed Scaffolding

After a while I had to generate something to let me keep track of all the small tweaks. AI SDLC projects need this as part of their documentation so that agents understand the reality they work in and their relationship to humans, tasks and other agents working.

<iframe src="/posts/agentic-workflow.html" title="Agentic workflow" loading="lazy" class="w-full h-[600px] rounded-xl border-0"></iframe>

[View full size.](https://mstrlaw.com/posts/agentic-workflow)

## Lessons

Here's a list of things I've learned and keep learning in this new setup. Some are known and maybe common sense, others are more specific to this recipe and others are just what I believe in (yeah we don't need facts when things are non-deterministic, right?)

### Make sure your context is always green AF

If you have long term context in a spine like Linear, GitHub or your local knowledge MDs, always _ALWAYS_ make sure the agent keeps knowledge up to date. Why something exists the way it does, why things relate to each other, when to do/use X versus Y. If a ticket was planned in a way, but then through implementation or review the ticket assumptions were wrong, update the ticket or add a comment with context as to why that happened. Context drift over sessions is something that ends up hurting AI's performance.

This includes documentation about how your AI SDLC works. Keep this in your repo and each time you tweak your way of working, review the documentation.

Use a form of deterministic way to ensure that it happens (tools, skill invocation). AND even if you use these, for good measure, occasionally run a thorough documentation review at the end of a session or in a new session. Never trust that AI understands what has been done..

### Analyze your AI SDLC frequently

In this new world I am not spending time reviewing the code, but spending quite a bit reviewing the AI workflow.

Each time a session has a hiccups in the execution (getting stuck, not following an instruction, etc), I spin a new session with whatever's the smartest model of the week and ask it to run a post-mortem style analysis for the given ticket.

It'll pick up all the sessions invoked by Cyrus and analyze them.

It provides a lot of detailed information as to how an agent performed, what skills and tools were or were not used, and propose improvements. Much of my current flow was refined using this approach.

![](/images/uploads/Screenshot%202026-09-06%20at%2023.07.03.png)

<small>Post Mortem analysis for Linear tickets and. handling by Cyrus</small>

![](/images/uploads/Screenshot%202026-09-06%20at%2023.07.11.png)

<small>Analysis of multiple tickets handled during a given day</small>

### Anthropic is being silly on the AI SDLC gains

When Anthropic put out its 

Whatever time AI saves you on building, you'll spend it on planning and reviewing.

![](/images/uploads/anthorpic_goofing.png)

<small>Revisited "after agents from Anthropic's [AI Native SDLC Playbook](https://claude.com/blog/the-ai-native-sdlc-playbook)</small>

## The future?

WIP

![Still of 2006 movie Idiocracy with Brawndo CEO in a video call, panicking, yelling "The Computer did that auto-layoff thing to everybody"](/images/uploads/brawndo.png "Brawndo CEO panicking")

<small>Brawndo CEO [panicking](https://www.youtube.com/watch?v=7THG28GprSM) as the computer does that auto-layoff thing.</small>
