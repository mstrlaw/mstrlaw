const data = [];
const labels = [];

const injectChartist = () => new Promise((resolve, reject) => {
  // Add chart script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = '//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js';

  // Append the script to the DOM
  const el = document.getElementsByTagName('script')[0]
  el.parentNode.insertBefore(script, el)

  // Resolve the promise once the script is loaded
  script.addEventListener('load', () => {
    console.log('chart script loaded');
    resolve();
  });
});

const injectPlugin = () => new Promise((resolve, reject) => {
  // Add chart script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = '//cdn.jsdelivr.net/npm/chartist-plugin-pointlabels@0.0.6/dist/chartist-plugin-pointlabels.min.js';

  // Append the script to the DOM
  const el = document.getElementsByTagName('script')[0]
  el.parentNode.insertBefore(script, el)

  // Resolve the promise once the script is loaded
  script.addEventListener('load', () => {
    console.log('chart plugin loaded');
    resolve();
  });
});

const loadChartData = async () =>
  await axios
    .get('https://cors.bridged.cc/https://wakatime.com/share/@mstrlaw/4e394a3c-8d3f-449f-b686-1b0241124e2d.json', {
      headers: {
        'x-cors-grida-api-key': '2a757fab-77e2-447a-b55f-623e511e5241',
      }
    });

const getTimeLabel = (date, seconds) => {
  const endDate = new Date(date);
  endDate.setSeconds(seconds);
  return `${endDate.getHours()}h ${endDate.getMinutes()}m`;
};

const formatLabel = (date, seconds) => {
  const dayNumber = date.getDay();
  const timeLabel = getTimeLabel(date, seconds);
  let dayString = '';

  switch(dayNumber){
    case 0:
        dayString = 'Sun';
        break;
    case 1:
        dayString = 'Mon';
        break;
    case 2:
        dayString = 'Tue';
        break;
    case 3:
        dayString = 'Wed';
        break;
    case 4:
        dayString = 'Thu';
        break;
    case 5:
        dayString = 'Fri';
        break;
    case 6:
        dayString = 'Sat';
        break;
  }

  return `${dayString}. ${timeLabel}`;
}

window.onload = async () => { // can also use window.addEventListener('load', (event) => {
  console.log('Page loaded');

  await injectChartist();
  await injectPlugin();


  // // Async load chartisjs plugin
  // const script = document.querySelector('#chartistjs');
  // console.log(script);

  // script.addEventListener('load', function() {
  //   console.log('chartist loaded');
  // });

  let totalTime = 0;
  const tmp = [];
  const dataRequest = loadChartData();

  dataRequest.then(res => {
    if (res.data.data.length === 0) return;
    res.data.data.map( d => {
      const date = new Date(d.range.start);
      tmp.push({
        date,
        formatted: formatLabel(date, d.grand_total.total_seconds),
        data: d.grand_total.total_seconds,
      });

      totalTime += d.grand_total.total_seconds;
    });
    console.log(tmp);
  })
  .catch(err => {
    console.log(err);
    console.log('error fetching chart data');
  });

  var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [ 5.1234, 2.4121, 4.3131, 2.222, 1.12312 ]
    ]
  };

  const options = {
    // showPoint: false,
    fullWidth: true,
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    plugins: [
      Chartist.plugins.ctPointLabels({
        textAnchor: 'middle',
        labelInterpolationFnc: (value) => '$' + value.toFixed(2)
      })
    ],
  }
  new Chartist.Line('.ct-chart', data, options);
};
