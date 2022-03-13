---
layout: post.hbs
title: Escaping the Informational Bubble – on Building Thoro News
summary: As <a href="https://thoro.news" target="_blank">Thoro News</a> reaches
  almost 10MM articles in its database and 2MM clustered topics, I reflect on
  the <em>raison d'être</em> of this personal project that started in 2019.
feat_image: /static/images/thoro_old.gif
publish_date: 2022-03-13T17:05:15.788Z
update_date: 2022-03-13T17:05:15.802Z
---
<p class="u-ImageDescription">Thoro News in 2019.</p>

<br>

I'm a strong believer that the best way to generate a more accurate view of the world is by feeding our minds with a broad and diverse set of information.

<b>Truth lies somewhere in the middle.</b>

We don't control the mental mechanism that shapes our opinions, thoughts and beliefs but we can determine which information we feed our minds.

<hr>

<h2 id="algorithmic-feeds">Algorithmic Feeds Hinder Our Perception Of The World</h2>

It all started around 2017 when I optimized my Facebook news feed to only display posts from news pages. I was following perhaps less than 50 news sources and, for a while, it was ok.

The first problem I noticed was that I was only seeing a subset of news published by the page. If I entered the page, I'd see there were many more posts published on any given day, but Facebook's algorithm had decided that only a couple of posts would get put on my wall. So essentially I had no control over which posts were being shown as well as no understanding to why one post was shown over the other.

The second problem was that, at any point, Facebook could and would change the way its algorithmic feed operated. In 2018, Facebook <a href="https://www.forbes.com/sites/kathleenchaykowski/2018/01/11/facebook-focuses-news-feed-on-friends-and-family-curbing-the-reach-of-brands-and-media/" target="_blank">decided it would prioritize posts mad by friends and family and curbs news posts</a>.

In terms of "tech product years" this was *light-years* ago. Facebook's feed has evolved over the past 5 years and I'm sure it's much more parametrizable. I haven't used it since about 2018.

But even if that's true, Facebook and other social algorithmic feeds operate under the ultimate directive: keep your attention and maximize time spent on the platform. 

<b>Any one algorithm that is optimized for the purpose of attention retention inevitably forces its subjects into informational biases.</b>

<hr>

Mainstream algorithmic feeds are inappropriate when it comes to building a more comprehensive – balanced – view of the world. 

They are not build with that purpose in mind. The most common purpose of these feed algorithm is retention, engagement or both. The Facebook and Twitter like feeds will operate as follows:

1. *"show more of the stuff you interacted with" –* the logic of "if you liked X then take more X to stay with us", in the hopes of keeping you on the platform for longer times;
2. *"show the top voted/discussed (controversial) thing"* – the logic of "a lot of people like this so maybe so will you", in the hopes of getting your attention, engage and retain you on the platform;

Either one of those forces a conditioned view of the world.

1. Pretty straightforward: you see more of the same, so your views get reinforced and there's very few dissent from whichever is your dominating view. The classic filter bubble.
2. You see what's "trending" according to the platform's notion of trending. It may or not be in line with your current view of the world. It can be a sort of "mob mentality" approach. It can also be weaponized. For instance, Twitter bots artificially amplifying narratives.

<h2>Platforms Are Also Ideological</h2>

Finally, algorithms can also reflect the platforms' own ideologies and stances and/or exacerbate/favor existing biases. Again the result is a narrower view of the world.

![](/static/images/google_news_notification.jpg)

<p class="u-ImageDescription">Google News really wanted me to know about this for some reason.</p>

![](/static/images/yahoo_suggestions_edit.png)

<p class="u-ImageDescription">Yahoo News users have some feedback..</p>

![](/static/images/reddit_leftwing_google_results.png)

<p class="u-ImageDescription">Reddit is notoriously left leaning and has become more homogeneous over the years.</p>

<br>

<h2 id="building-news-aggregator">Building Another Type of News Aggregator</h2>

I wasn't happy with existing options.

Platforms like Reddit or Twitter clearly lean towards one spectrum of the political scale. News outlets usually tend towards specific narratives. I like the New York Times, The Guardian or Euronews but I recognize that these too have agendas that end up biasing the views of the world.

Common news "aggregators" aggregate in the sense of grouping headlines. For instance <a href="https://feedly.com/" target="_blank">Feedly</a>, a very much known news aggregator, simply groups headlines from designated sources into a common feed. But once you get to a large enough amount of sources, headlines start to repeat a lot which can force the user to pick specific sources, hence falling into the possibility of remaining under specific outlet's views of the world.

<hr>

The premise of Thoro's algorithm is pretty basic: <b>organically generate clusters according to the similarity of text in news articles then sort said clusters by volume of articles.</b>

The result of this approach is a news feed that attempts to answer: "What's the most common topic being discussed in the media?"

The way that his is done is by retrieving thousands of articles per day from over 120 sources and clustering them.

Without getting much into the details, the clustering algorithm works as follows:

* pick the latest 5000 articles of the current day
* extract bigrams from the title and body of each individual article
* compare the similitude of the bigrams; cluster articles accordingly



A cluster looks something like this:

```
{
    "_id" : ObjectId("61d01f79ad5e67690ccd089a"),
    "day" : "01-01-2022",
    "mainTheme" : [ 
        "artificial intelligence"
    ],
    "scores" : {
        "technology" : 3.49997019337227,
        "all" : 2.33330334267646
    },
    "sourcesCount" : 2,
    "themes" : [ 
        {
            "label" : "artificial intelligence",
            "score" : 3
        }, 
        {
            "label" : "impact artificial",
            "score" : 2
        }
    ],
    "hasExternalReferences" : true,
    "articles" : [ 
      ObjectId("61d00ec41514fd76b3a45a74"), 
      ObjectId("61cfba551514fd76b3a4536f"), 
      ObjectId("61d071311514fd76b3a46353"), 
      ObjectId("61d0a9681514fd76b3a46b81")
    ],
    "sources" : [ 
      "medium.com", 
      "eff.org"
    ],
    "systemCreateDate" : ISODate("2022-01-01T09:31:37.472Z"),
    "systemUpdateDate" : ISODate("2022-01-01T23:40:59.162Z"),
    "lastArticleDate" : ISODate("2022-01-01T13:40:16.000Z"),
    "firstArticleDate" : ISODate("2022-01-01T01:28:42.000Z"),
}
```

<br>

Then, when visiting Thoro, list the clusters by descending order of volume of articles.

<h2 id="thoro-news">Thoro News</h2>

So what are the advantages of this approach?

<h3>Quick understanding of the discussion</h3>

First, one is capable of surfacing at a glance the main "topics" in the media. You can have a quick idea of what is being discussed just by looking at the topics. 

What I like about this method is that clusters aren't picked by a team of human curators. They are simply the most common pair of words found in the last 5000 articles. What you see is what is out there.

![](/static/images/clusters.jpg)

<p class="u-ImageDescription">Top clusters for the current day.</p>

<h3>Grouping of multiple sources for the same story</h3>

It is easy to check which sources are publishing on a story. It is easy to see which outlets use the same source or have the same stance regarding a story.

![](/static/images/headline_similarity.jpg)

<p class="u-ImageDescription">Multiple news sources reporting on the same story.</p>

Another advantage of clustering is seeing the way in which the same story can be talked about differently.

![](/static/images/screen-shot-2021-07-11-at-15.59.55.jpg)

<p class="u-ImageDescription">Boos? Cheers? Both? Depends of which sources you follow.</p>

Finally, the idea is to allow for diving into the clusters and making up your own mind with what you see. For that I've built a way to check where articles were shared on Reddit and explore the conversation, as well as looking into all articles of the given sources for the cluster.

![](/static/images/cluster_exploration.gif)

<p class="u-ImageDescription">Exploring the contents of a cluster.</p>



<div class="flourish-embed flourish-bar-chart-race" data-src="visualisation/8965711"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

<br>

<br>

<p class="u-ImageDescription">Visualization of the evolution of news clusters per number of articles.</p>

<hr>

Marcus Aurelius said "The things you think about determine the quality of your mind. Your soul takes on the color of your thoughts."

<br>

I'd extend this thought and say "what you feed your mind shapes your interpretation of reality."