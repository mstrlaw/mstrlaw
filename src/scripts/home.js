const injectScript = (url) => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;
  // Append the script to the DOM
  const el = document.getElementsByTagName('script')[0]
  el.parentNode.insertBefore(script, el)
  // Resolve the promise once the script is loaded
  script.addEventListener('load', () => resolve());
});

const loadChartData = async () =>
  await axios
    .get('https://cors.bridged.cc/https://wakatime.com/share/@mstrlaw/4e394a3c-8d3f-449f-b686-1b0241124e2d.json', {
      headers: {
        'x-cors-grida-api-key': '2a757fab-77e2-447a-b55f-623e511e5241',
      }
    });

const getTimeLabel = (seconds) => {
  const endDate = new Date();
  endDate.setSeconds(seconds);
  return `${endDate.getHours()}h ${endDate.getMinutes()}m`;
};

const drawChart = (series) => {
  var data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      series,
    ]
  };
  const axisMod = {
    showGrid: false,
    showLabel: false,
    offset: 0,
  };
  const options = {
    fullWidth: true,
    chartPadding: { top: 0, right: 25, left: 25, bottom: 0 },
    axisX: {...axisMod},
    axisY: {...axisMod},
    plugins: [
      Chartist.plugins.ctPointLabels({
        labelInterpolationFnc: (value) => getTimeLabel(value)
      }),
    ],
  }
  new Chartist.Line('.ct-chart', data, options);
};

window.onload = async () => {
  await injectScript('//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js');
  await injectScript('//cdn.jsdelivr.net/npm/chartist-plugin-pointlabels@0.0.6/dist/chartist-plugin-pointlabels.min.js');

  const dataRequest = loadChartData();
  let series = [];
  let totalTime = 0;

  dataRequest
    .then(res => {
      if (res.data.data.length === 0) return;
      res.data.data.forEach( d => {
        series.push(d.grand_total.total_seconds);
        totalTime += d.grand_total.total_seconds;
      });
      drawChart(series);
    })
    .catch(err => {
      console.log(err);
      console.log('error fetching chart data');
    });
};
