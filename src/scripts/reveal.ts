// Reveal-on-scroll: fade + slide each [data-reveal] block in once.
// The hidden state is gated on `html.js` in global.css, so content stays
// visible if this never runs. Call once per page that renders [data-reveal].
export function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add('is-visible'));
  }
}
