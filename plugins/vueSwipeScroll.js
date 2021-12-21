export default (context, inject) => {
  const swipeScrollTo = (element, scrollPixels, duration) => {
    const scrollPos = element.scrollLeft;
    const scrollWidth = element.scrollWidth;
    const clientWidth = element.clientWidth;
    const leftBtn = document.getElementById('swipeScrollLeft');
    const rightBtn = document.getElementById('swipeScrollRight');

    if (scrollPos === 0 && scrollPixels < 0) {
      leftBtn.style.display = 'none';
    } else {
      leftBtn.style.display = 'block';
    }
    if (scrollPos + clientWidth === scrollWidth && scrollPixels > 0) {
      rightBtn.style.display = 'none';
    } else {
      rightBtn.style.display = 'block';
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
    swipeScrollTo(content, -300, 800);
  }

  const swipeRight = (content) => {
    swipeScrollTo(content, 300, 800);
  }

  inject('swipeLeft', swipeLeft);
  inject('swipeRight', swipeRight);
  context.$scrollTo = scrollTo;
  context.$swipeLeft = swipeLeft;
  context.$swipeRight = swipeRight;
}