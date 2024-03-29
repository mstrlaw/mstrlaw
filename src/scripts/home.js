let loadedChart = false;
let loadTime = 0;
let totalTime = 0;

const loadChartData = async () =>
  await axios
    .get('https://cors.bridged.cc/https://wakatime.com/share/@mstrlaw/4e394a3c-8d3f-449f-b686-1b0241124e2d.json', {
      headers: {
        'x-cors-grida-api-key': '2a757fab-77e2-447a-b55f-623e511e5241', // I dont care
      }
    });

const getTimeLabel = (date, seconds) => {
  const endDate = new Date(date);
  endDate.setSeconds(seconds);
  return `${endDate.getHours()}h ${endDate.getMinutes()}m`;
};

const drawChart = (tmp, series) => {
  var data = {
    labels: [],
    series: [series]
  };
  const axisMod = {
    showGrid: false,
    showLabel: false,
    offset: 0,
  };
  const options = {
    fullWidth: true,
    chartPadding: { top: 45, right: 25, left: 25, bottom: 0 },
    axisX: {...axisMod},
    axisY: {...axisMod},
    plugins: [
      Chartist.plugins.ctPointLabels({
        labelInterpolationFnc: value => getTimeLabel(tmp[value], value)
      }),
    ],
  }
  new Chartist.Line('.ct-chart', data, options);
};

window.onload = async () => {
  await injectScript('//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js');
  await injectScript('//cdn.jsdelivr.net/npm/chartist-plugin-pointlabels@0.0.6/dist/chartist-plugin-pointlabels.min.js');
  await injectScript('//cdn.jsdelivr.net/npm/dayjs@1.10.7/dayjs.min.js');
  await injectScript('//cdn.jsdelivr.net/npm/dayjs@1.10.4/plugin/relativeTime.min.js');
  dayjs.extend(window.dayjs_plugin_relativeTime);

  setTimeAgo();

  const dataRequest = loadChartData();
  let tmp = {};
  let series = [];
  dataRequest
    .then(r => {
      if (r.data.data.length === 0) return;
      r.data.data.forEach(d => {
        if (d.grand_total.total_seconds !== 0) {
          tmp[d.grand_total.total_seconds] = d.range.start;
          series.push(d.grand_total.total_seconds);
          totalTime += d.grand_total.total_seconds;
        } else {
          tmp[0.1] = d.range.start;
          series.push(0.1);
        }
      });
      drawChart(tmp, series);
      generateExtra();
    })
    .catch(err => {
      console.log(err);
      console.log('error fetching chart data');
      generateExtra();
    });
  generateAdr();
};
