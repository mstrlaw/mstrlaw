<template>
  <Layout>

    <section class="container highlighted inverted invert-text">
      <div class="container__content">
        <h1 class="container__title headline">MSTRLAW</h1>
        <div class="intro">
          <div class="intro__text">
            <h2 class="container__subtitle">Hey there! I'm Lawrence</h2>
            <p>I'm a Full-stack developer mostly developing web interfaces and providing tech consultancy.</p>
          </div>
          <div class="intro__image">
            <img src="https://miro.medium.com/fit/c/256/256/1*cOCuZpj7YgGGF6DPTDhoJA.png" alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="container__content mb-0 pb-0">
        <h1 class="container__title headline">About</h1>
        <h2 class="container__subtitle">"The world is mine to shape in the image of my highest values and never to be given up to a lesser standard, no matter how long or hard the struggle."<br>- Dagny Taggart </h2>

        <p>I'm interested in how we interact with technology and how it impacts our lives. I'm usually investing my time in areas such as information scraping &amp; processing, conceptualizing/implementing UX/UI and reading on industry news (I'm a news junkie).</p>

        <p>When not working, I spend time with my significant other, read, play with my cats (3!) or catch some waves.</p>
      </div>

      <StatsArea />
    </section>

    <section class="container highlighted black invert-text">
      <div class="container__content">
        <h1 class="container__title headline">FAQ</h1>
        <div class="container__faq">
          <h3 class="container__subtitle">What's your daily stack?</h3>
          <p>VueJS, NuxtJS, Node, MongoDB.</p>
        </div>

        <div class="container__faq">
          <h3 class="container__subtitle">What else?</h3>
          <p>Javascript, Webpack, SASS, TailwindCSS, Bootstrap, Bulma. Digital Ocean, Netlify, GitLab. Also Meteor.js &amp; ElectronJS, some rusty Python &amp; Django knowledge.</p>
        </div>

        <div class="container__faq">
          <h3 class="container__subtitle">What are you doing currently?</h3>
          <p>Senior Frontend Engineer at <a href="https://unbabel.com/" target="_blank">Unbabel</a></p>
        </div>

        <div class="container__faq">
          <h3 class="container__subtitle">Where are you based?</h3>
          <p>
              <a
                href="https://goo.gl/maps/YJoJtbXKZtP2"
                target="_blank"
              >Lisbon, Portugal
              </a>: Western European Time, UTC+0.<br>Compare the timezone difference to other countries <a
                href="https://www.timeanddate.com/worldclock/converter.html?iso=20190326T120000&p1=240&p2=236&p3=37&p4=133&p5=136&p6=179&p7=224"
                target="_blank"
                class="about-link"
              >here</a>.
            </p>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="container__content">
        <h1 class="container__title headline">The Word</h1>
        <div>
          <br>
          <p><em>"Lawrence is a leader and passionate about all things UX. He has a keen eye for detail, allowing him to deliver high quality products. In the time he spent working with us at SeaBookings, he has helped to design and develop the revamped SeaBookings Portal. A true team player that was always ready to help."</em></p>
          — <a href="https://www.linkedin.com/in/fabioneves85/" target="_blank">Fábio Neves</a>,&nbsp;CTO, SeaBookings
        </div>
        <br>
        <br>
        <div>
          <p><em>"I have come to known Lawrence as a highly responsible professional as an engineer with broad understanding of product / project management. He's flexible to work with various timezones and ready to do the extra that is needed to meet deadlines. Besides regular project work, Lawrence has tried to incubate various digital products himself, making it easy to work with him in the context of developing new products. But above it all, Lawrence is very pleasant to work with, for any product owner, or any development team."</em></p>
          — <a href="https://www.linkedin.com/in/honghavo/" target="_blank">Ha Vo</a>,&nbsp;Team & Project Manager
        </div>
        <br>
        <br>
        <div>
          <p><em>"Lawrence is highly skilled and was extremely valuable in delivering a quality product in a very short period of time. He was great to work with and went above and beyond to ensure our Project launched on time. Since launch we have received positive feedback from our clients who appreciate the ease of use."</em></p>
          — <a href="https://www.linkedin.com/in/michellezar/" target="_blank">Michelle Zar</a>,&nbsp;Technical Project Manager, Politico
        </div>
        <br>
        <br>
        <div>
          <p><em>"Lawrence stood out immediately by offering a very specific and intuitive framework of technologies for our specific project, and this was just in his initial application message. He is very creative at implementing "bootstrapped" technologies to get something done, while maintaining an awesome user experience, one that is well programmed and also beautiful. It can be difficult to find a developer that has a great backend technical knowledge as well as an eye for design, so this was a big help. Lawrence is friendly, fun to talk to, and focused on getting things done. He didn't have to be babysat or checked on - I'd love to work with him again."</em></p>
          — <a href="https://www.linkedin.com/in/michaelleehodge/" target="_blank">Michael Hodge</a>,&nbsp;Director - Global Martial Arts University
        </div>
      </div>
    </section>

    <section class="container">
      <div class="container__content">
        <h1 class="container__title headline">Say Hello</h1>
        <p>
          <br>
          Feel free to connect through <a href="https://www.linkedin.com/in/lawrencebraun/" target="_blank">LinkedIn</a>,
          <a href="https://www.instagram.com/mstrlaw/" target="_blank">Instagram</a>,
          <a href="https://medium.com/@mstrlaw" target="_blank">Medium</a>,
          <a href="https://twitter.com/mstrlaw" target="_blank">Twitter</a>,
          <a href="https://github.com/mstrlaw" target="_blank">GitHub</a>
          <a href="https://gitlab.com/mstrlaw" target="_blank">GitLab</a> or via email:
        </p>
        <h5 class="mb-0 mt-0 text-center"><a href="mailto:law@mstrlaw.com?subject=Hello!">law@mstrlaw.com</a></h5>
      </div>
    </section>

  </Layout>
</template>

<script>
import StatsArea from '~/components/StatsArea.vue'

export default {
  components: {
    StatsArea
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_variables.scss";

.container {
  position: relative;
  margin-bottom: var(--space);
  min-height: 10vh;
  color: #000;
  text-shadow: 1px 0px 0px rgba(255, 255, 255, 1),
              -1px 0px 0px rgba(255, 255, 255, 1),
              0px 1px 0px rgba(255, 255, 255, 1),
              0px -1px 0px rgba(255, 255, 255, 1);

  &.invisible {
    display: none;
  }

  &.highlighted {
    &:before, &:after{
      opacity: .9;
    }

    &:before{
      content: "";
      position: absolute;
      width: 100%;
      height: 80vh;
      top: 10vh;
      -webkit-transform: skewY(-15deg);
      transform: skewY(-15deg);
      transition: transform .5s, background 1s;

      background: linear-gradient(95deg, $black, rgba(136, 152, 170, 0.1));
      background-size: 800% 800%;
      z-index: -20;
    }
    &:after{
      content: "";
      position: absolute;
      width: 100%;
      height: 80vh;
      top: calc(10vh + 10px);
      -webkit-transform: skewY(-15deg);
      transform: skewY(-15deg);
      transition: transform .5s, background 1s;

      background: linear-gradient(95deg, $black, rgba(136, 152, 170, 0.1));
      background-size: 800% 800%;
      z-index: -20;
    }

    &.inverted {
      &:before {
        -webkit-transform: skewY(15deg);
        transform: skewY(15deg);
      }
      &:after {
        -webkit-transform: skewY(15deg);
        transform: skewY(15deg);
      }
    }
  }

  &.highlighted.black {
    margin-top: calc(var(--space) * 2);
    &:before {
      height: 95vh;
    }
    &:after {
      top: 12vh;
      height: 95vh;
    }
    @media #{$small} {
      margin-top: calc(var(--space) * 4);
      padding-top: calc(var(--space) * 2);
      &:before {
        top: 4vh;
        height: 105vh;
      }
      &:after {
        top: 2vh;
        height: 105vh;
      }
    }
  }

  &.invert-text {
    a, > * {
      color: $white;
      text-shadow: 1px 0px 0px rgba(40, 52, 57, 1),
                  -1px 0px 0px rgba(40, 52, 57, 1),
                  0px 1px 0px rgba(40, 52, 57, 1),
                  0px -1px 0px rgba(40, 52, 57, 1);
    }
  }

  &__content {
    margin: 0 auto;
    max-width: 750px;
    padding: var(--space);
  }

  &__subtitle {
    color: inherit;
    font-size: 1.5em;
    // max-width: 450px;
  }

  &__faq {
    a {
      color: $white;
    }
  }
}

.intro {
  display: flex;
  align-items: flex-end;
  margin-top: var(--space);

  &__text {
    max-width: 70%;
    margin-right: 15px;
    @media #{$small} {
      max-width: 100%;
      margin-right: 0;
    }
  }

  &__image {
    height: 150px;
    min-width: 150px;
    width: 150px;
    overflow: hidden;
    border-radius: 50%;
  }

  @media #{$small} {
    margin-top: calc(var(--space) * 4);
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
}

.headline{
  letter-spacing: 4px;
  display: inline;
  position: relative;
  width: auto;
  color: #FFF;
  margin-top: 10px;
  font-weight: bold;
  transition: 1s;
  text-shadow: 0 1px 0 #ccc,
         0 2px 0 #c9c9c9,
         0 3px 0 #bbb,
         0 4px 0 #b9b9b9,
         0 5px 0 #aaa,
         0 6px 1px rgba(0,0,0,.1),
         0 0 5px rgba(0,0,0,.1),
         0 1px 3px rgba(0,0,0,.3),
         0 3px 5px rgba(0,0,0,.2),
         0 5px 10px rgba(0,0,0,.25),
         0 10px 10px rgba(0,0,0,.2),
         0 20px 20px rgba(0,0,0,.15);

  &:after{
    content: '';
    display: block;
    position: absolute;
    bottom: 41%;
    left: -10%;
    width: 0%;
    height: 10%;
    transform: skew(-10deg);
    z-index: -1;
    transition: width .3s;

    background: $red;
    box-shadow: 2px 2px 0 0 $red;
    width: 115%;
    transition: width .5s;
    transition-delay: .2s;
  }
}

.mt-0 {
  margin-top: 0;
}
.mb-0 {
  margin-bottom: 0;
}
.pt-0 {
  padding-top: 0;
}
.pb-0 {
  padding-bottom: 0;
}
.px-spaced {
  padding-bottom: 0 var(--space);
}
.text-center {
  text-align: center;
}
</style>
