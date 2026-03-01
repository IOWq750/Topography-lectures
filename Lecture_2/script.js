Reveal.on('slidechanged', event => {
  const gifs = event.currentSlide.querySelectorAll('.gif-restart');
  gifs.forEach(img => {
    const src = img.src;
    img.src = '';
    img.src = src;
  });
});