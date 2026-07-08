import { useEffect } from 'react';

const REVEAL_SELECTOR = [
  '.kt-section-head',
  '.kt-trust-item',
  '.kt-card',
  '.kt-project-card',
  '.kt-price-card',
  '.kt-why-item',
  '.kt-split > div',
  '.kt-sample-note',
  '.kt-cima-mock',
  '.kt-media-frame',
].join(', ');

/**
 * Auto-reveals recurring section/card patterns as they scroll into view.
 * Runs per route change since Main.jsx persists across page navigation.
 */
const useScrollReveal = (dependency) => {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    if (prefersReduced || nodes.length === 0) {
      nodes.forEach((el) => el.classList.add('kt-in-view'));
      return;
    }

    nodes.forEach((el, i) => {
      el.classList.add('kt-reveal');
      el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('kt-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    nodes.forEach((el) => observer.observe(el));

    // Safety net: guarantee content is never permanently hidden if the
    // observer never fires for a given element (e.g. some automated
    // renderers/crawlers that don't perform a real scroll).
    const fallback = window.setTimeout(() => {
      nodes.forEach((el) => el.classList.add('kt-in-view'));
      observer.disconnect();
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [dependency]);
};

export default useScrollReveal;
