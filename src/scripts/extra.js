const injectScript = (url) => new Promise((resolve) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;
  // Append the script to the DOM
  const el = document.getElementsByTagName('script')[0];
  el.parentNode.insertBefore(script, el);
  // Resolve the promise once the script is loaded
  script.addEventListener('load', () => resolve());
});
const generateExtra =  () => {
  try {
    const perf = window.performance.getEntriesByType("navigation")[0];
    let loadTime = Math.round((perf.loadEventEnd - perf.requestStart) * 100) / 100;
    loadTime = loadTime > 1000 ? `≈${Math.round(loadTime / 1000 * 100) / 100}s` : `≈${loadTime}ms`;
    document.getElementById('loadTime').innerText = loadTime;
    document.getElementById('screenTime').innerText = `≈${~~(totalTime / 3600)}h${~~((totalTime % 3600) / 60)}m`;
  } catch (err) {
    console.log(err);
  }
  document.getElementById('currentYear').innerText = new Date().getFullYear();
}
const setTimeAgo = () => {
  new Promise((resolve, reject) => {
    const dates = document.querySelectorAll('.c-Timeline__itemDate')
    dates.forEach(date => {
      const attr = date.getAttribute('data-pubtimeago');
      if (!!!attr.length) return;
      
      const equalDate = date.getAttribute('data-equaldate') === 'true';
      let read = `${dayjs(date.getAttribute('data-updtimeago')).from(dayjs())}`
      let stamp = `${date.getAttribute('data-updreadable')}`

      if (!equalDate) {
        read = `${dayjs(date.getAttribute('data-pubtimeago')).from(dayjs())}`;
        if (date.getAttribute('data-equaldate') !== null) {
          read += ` (updated ${dayjs(date.getAttribute('data-pubtimeago')).from(dayjs())})`;
        }
        stamp = `${date.getAttribute('data-pubreadable')}, ${date.getAttribute('data-updreadable')}`;
        // console.log(read);
      }
      date.innerHTML = `<span title="${stamp}">${read}</span>`;
    });
    resolve();
  });
}
const generateAdr = () => {
  const m = ['law','@m','s','t','r','law','.','co','m'].join('');
  setTimeout(() => {
    const el = document.getElementById('adr');
    document.getElementById('cont').removeAttribute('title');
    el.innerText = m;
    el.setAttribute('href', `mailto:${m}?subject=Hello!`)
    el.classList.remove('black');
    el.classList.remove('disabled');
  }, 5000);
}
