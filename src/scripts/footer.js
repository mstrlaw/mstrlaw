const generateFooter =  () => {
  try {
    const perf = window.performance.getEntriesByType("navigation")[0];
    let loadTime = Math.round((perf.loadEventEnd - perf.requestStart) * 100) / 100;
    loadTime = loadTime > 1000 ? `≈${Math.round(loadTime / 1000 * 100) / 100}s` : `≈${loadTime}ms`;
    document.getElementById('loadTime').innerHTML = loadTime;
  } catch (err) {
    console.log(err);
  }
}
