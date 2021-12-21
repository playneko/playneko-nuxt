export default (context, inject) => {
  const scrollTo = (element, scrollPixels, duration) => {
    const scrollPos = element.scrollLeft;
    const scrollWidth = element.scrollWidth;
    const clientWidth = element.clientWidth;
    const leftBtn = document.getElementById('scrollToleft');
    const rightBtn = document.getElementById('scrollToRight');

    if (scrollPos + clientWidth === scrollWidth && scrollPixels > 0) {
      // console.log('right end');
      rightBtn.style.display = 'none';
    } else {
      rightBtn.style.display = 'block';
    }
    if (scrollPos === 0 && scrollPixels < 0) {
      // console.log('left end');
      leftBtn.style.display = 'none';
    } else {
      leftBtn.style.display = 'block';
    }
    if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) {
      const startTime = "now" in window.performance ? performance.now() : new Date().getTime();

      function scroll(timestamp) {
        const timeElapsed = timestamp - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        element.scrollLeft = scrollPos + scrollPixels * progress;
        if (timeElapsed < duration) {
          window.requestAnimationFrame(scroll);
        }
      }
      window.requestAnimationFrame(scroll);
    }
  }

  const swipeLeft = (content) => {
    scrollTo(content, -300, 800);
  }

  const swipeRight = (content) => {
    scrollTo(content, 300, 800);
  }

  inject('scrollTo', scrollTo);
  inject('swipeLeft', swipeLeft);
  inject('swipeRight', swipeRight);
  context.$scrollTo = scrollTo;
  context.$swipeLeft = swipeLeft;
  context.$swipeRight = swipeRight;
}