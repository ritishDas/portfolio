const parent = fetchElement('#moments');
const timeline = fetchElement('#timeline');

document.addEventListener('scroll', () => {
  const scrollPos = window.scrollY; // current scroll offset from top
  console.log('Scroll position:', scrollPos);
  timeline.style.height = `${scrollPos + 100}px`;
});

