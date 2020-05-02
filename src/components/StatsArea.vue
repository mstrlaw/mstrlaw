<template>
  <div
    :class="[ hasData ? 'visible' : 'invisible' ]"
    class="container pt-0"
  >
    <div class="container__content px-spaced pt-0">
      <p>I've spent {{ formatTime(totalTime) }} in front of the screen for the past 7 days</p>
      <small
        class="tools"
        v-html="languages"
      />
      <div class="chart-wrapper">
        <ClientOnly>
          <apexchart
            v-if="hasData"
            type="area"
            :options="chartOptions"
            :series="series"
            height="150"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

  const languageEndpoint = 'https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@mstrlaw/53b23607-58e6-43bd-827e-d76a6a0b4354.json'
  const timeEndpoint = 'https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@mstrlaw/4e394a3c-8d3f-449f-b686-1b0241124e2d.json'

  const _tooltipFormatter = function({series, seriesIndex, dataPointIndex, w}) {
    let serie = w.config.series[seriesIndex]
    let label = serie.labels[dataPointIndex]
    let value = serie.formattedData[dataPointIndex]
    return `<div class="custom-tooltip"><div class="tooltip-inner"><span class="label">${ label }</span>: ${ value }</div></div>`
  }

  export default {
    name: 'StatsArea',
    components: {
      'apexchart': () => import('vue-apexcharts')
    },
    data() {
      return {
        hasData: false,
        totalTime: 0,
        colors: ['#283439'],
        chartOptions: {
          chart: {
            type: 'area',
            sparkline: {
              enabled: true
             },
            toolbar: {
              show: false,
            }
          },
          stroke: {
            width: 4,
            curve: 'smooth',
            colors: ['#ff6573']
          },
          yaxis: {
            min: 0
          },
          fill: {
            // colors: ['transparent', '#283439'],
            // opacity: 0,
            opacity: 0,
            type: 'solid',
          },
          markers: {
            size: 0,
            colors: ['#ee003c']
          },
          tooltip: {
            custom: _tooltipFormatter,
            marker: {
              show: false
            },
            y: {
              show: false,
            }
          }
        },
        series: [],
        languageData: []
      }
    },
    mounted() {
      this.getActivity()
      this.getLanguages()
    },
    computed: {
      languages() {
        if (this.languageData.length > 0) {
          let stats = []
          this.languageData.map( data => {
            stats.push(`<span>${ data.name } - ${ data.percent }%</span>`)
          })
          return 'Tools: ' + stats.join(', ')
        }
      }
    },
    methods: {
      getActivity() {
        axios
          .get(timeEndpoint)
          .then( res => {

            if (res.data.data.length > 0) {
              let tmp = []
              let data = []
              let labels = []
              let formattedData = []

              res.data.data.map( d => {
                tmp.push({
                  date: moment(d.range.start).unix() * 1000,
                  formatted: moment(moment(d.range.start).unix() * 1000).format('ddd, DD MMM'),
                  data: d.grand_total.total_seconds,
                  formattedData: this.formatTime(d.grand_total.total_seconds),
                })

                this.totalTime += d.grand_total.total_seconds
              })

              tmp = tmp.sort( (a,b) => { return a.date - b.date })

              tmp.map( el => {
                data.push(el.data)
                labels.push(el.formatted)
                formattedData.push(el.formattedData)
              })

              this.series = [{
                data: data,
                labels: labels,
                formattedData: formattedData
              }]

              this.hasData = true

            }
          })
          .catch(err => {
            console.log('Unable to fetch Wakatime data')
            console.log(err)
          })
      },
      getLanguages() {
        axios
          .get(languageEndpoint)
          .then( res => {

            if (res.data.data.length > 0) {
              this.languageData = res.data.data
            }
          })
          .catch(err => {
            console.log('Unable to fetch Wakatime data')
            console.log(err)
          })
      },
      formatTime(time) {
        let t = moment.duration(time, 'seconds')

        if (t.asHours() >= 1) {
          return `${ Math.floor(t.asHours()) }h  ${ t.minutes() }m`
        } else if (t.asMinutes() >= 1) {
          return `${ Math.round(t.asMinutes()) }m  ${ Math.floor(t.seconds()) }s`
        } else if (t.asSeconds() >= 1) {
          return `${ Math.floor(t.seconds()) }s`
        } else {
          return `0`
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
@import "@/assets/style/_variables.scss";

.chart-wrapper {
  position: absolute;
  width: 100vw;
  left: 0;
}
.tooltip {
  display: block !important;
  z-index: 10000;
  border-radius: .125rem;


  @media #{$small} {
    transform: translate3d(0, 0, 0) !important;
  }

  .tooltip-inner {
    background: #FFF;
    color: #000;
    padding: 1rem;
    font-size: 1.125em;
    border-radius: 4px;

    .list{
      padding-left: 15px;
    }
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #FFF;
    z-index: 1;

    &:before, &:after{
      content: '';
      display: block;
      width: 1px;
      height: 6px;
      background: #dae1e7;
      position: absolute;
      transform: skew(-40deg);
    }

    &:after{
      transform: skew(40deg);
    }
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;

      &:before, &:after{
        top: -5px;
        left: 2px;
        transform: skew(-40deg);
      }

      &:after{
        left: -3px;
        transform: skew(40deg);
      }
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;

      &:before, &:after{
        top: -2px;
        left: 2px;
        transform: skew(40deg);
      }

      &:after{
        left: -3px;
        transform: skew(-40deg);
      }
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;

      &:before, &:after{
        top: 0px;
        left: 2px;
        transform: skew(40deg);
      }

      &:after{
        top: -6px;
        transform: skew(-40deg);
      }
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;

      &:before, &:after{
        top: 0px;
        left: -3px;
        transform: skew(-40deg);
      }

      &:after{
        top: -6px;
        transform: skew(40deg);
      }
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;;
      color: black;
      padding: 3em;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
