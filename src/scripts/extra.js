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
    const dates = document.querySelectorAll('[data-timeago]')
    dates.forEach(date => {
      const attr = date.getAttribute('data-timeago');
      if (!!!attr.length) return;
      const read = date.getAttribute('data-readable');
      date.innerHTML = `<span title="${read}">${dayjs(attr).from(dayjs())}</span>`;
    });
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
