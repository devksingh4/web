// Leaves room for the sticky navbar above the target. Mirrors the CSS
// `scroll-padding-top` (5rem) used for native anchor jumps; keep them in sync.
const NAV_OFFSET = 80;

/**
 * Smoothly scroll to an anchor by CSS selector, leaving room above the target
 * for the sticky header. Uses window.scrollTo rather than
 * Element.scrollIntoView, which misbehaves in some webview hosts.
 */
export function smoothScrollTo(selector: string): void {
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}
