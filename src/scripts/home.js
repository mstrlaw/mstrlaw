const loadChartData = async () =>
  await axios
    .get('https://cors.bridged.cc/https://wakatime.com/share/@mstrlaw/4e394a3c-8d3f-449f-b686-1b0241124e2d.json', {
      headers: {
        'x-cors-grida-api-key': '2a757fab-77e2-447a-b55f-623e511e5241',
      }
    });



// // document.addEventListener('DOMContentLoaded', loadChart());

window.onload = function() { // can also use window.addEventListener('load', (event) => {
  console.log('Page loaded');
  let totalTime = 0;
  const dataRequest = loadChartData();
  const tmp = []
  const data = [];
  const labels = [];

  dataRequest.then(res => {
    if (res.data.data.length > 0) {
      res.data.data.map( d => {
        tmp.push({
          date: new Date(d.range.start),
          // formatted: moment(moment(d.range.start).unix() * 1000).format('ddd, DD MMM'),
          data: d.grand_total.total_seconds,
          // formattedData: this.formatTime(d.grand_total.total_seconds),
        });

        totalTime += d.grand_total.total_seconds;
      });

      console.log(tmp);
    }
  })
  .catch(err => {
    console.log(err);
    console.log('error fetching chart data');
  });

  // var data = {
  //   // A labels array that can contain any sort of values
  //   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  //   // Our series array that contains series objects or in this case series data arrays
  //   series: [
  //     [ 5.1234, 2.4121, 4.3131, 2.222, 1.12312 ]
  //   ]
  // };

  // const options = {
  //   // showPoint: false,
  //   fullWidth: true,
  //   axisX: {
  //     showGrid: false,
  //     showLabel: false,
  //     offset: 0,
  //   },
  //   axisY: {
  //     showGrid: false,
  //     showLabel: false,
  //     offset: 0
  //   },
  //   plugins: [
  //     Chartist.plugins.ctPointLabels({
  //       textAnchor: 'middle',
  //       labelInterpolationFnc: (value) => '$' + value.toFixed(2)
  //     })
  //   ],
  // }
  // new Chartist.Line('.ct-chart', data, options);
};
