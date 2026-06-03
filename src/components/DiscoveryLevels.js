'use client';
import { useState, useEffect, useRef } from 'react';

/**
 * DiscoveryLevels — Progressive disclosure component.
 *
 * The visitor sees only Level 1 on first paint.
 * They click "SHOW ME MORE" to reveal each subsequent level.
 * Each reveal smooth-scrolls the new level into view.
 *
 * Content is never deleted — just gated behind curiosity.
 *
 * Props:
 *   levels — array of { label, title?, summary?, content, cta }
 *     The first level renders immediately.
 *     Each subsequent level is gated until the previous level's CTA is clicked.
 *     The last level's `cta` is optional (final reveal).
 */

export default function DiscoveryLevels({ levels }) {
  const [revealed, setRevealed] = useState(1);
  const refs = useRef([]);

  function revealNext() {
    setRevealed(r => r + 1);
  }

  // Smooth-scroll into the newly revealed section
  useEffect(() => {
    if (revealed > 1 && refs.current[revealed - 1]) {
      setTimeout(() => {
        refs.current[revealed - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [revealed]);

  return (
    <>
      {levels.map((level, i) => {
        const num = i + 1;
        const isVisible = num <= revealed;
        const isCurrentEdge = num === revealed;
        const hasNext = num < levels.length;

        if (!isVisible) return null;

        return (
          <section
            key={i}
            ref={el => (refs.current[i] = el)}
            className={`px-5 ${i === 0 ? 'pt-24 pb-12' : 'py-12'} ${i % 2 === 1 ? 'bg-navy-900' : ''} animate-fade-up`}
          >
            <div className="max-w-4xl mx-auto">
              {level.label && (
                <p className="section-label justify-center mb-3">{level.label}</p>
              )}
              {level.title && (
                <h2 className={`font-display ${i === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-medium tracking-tight text-center mb-4 leading-tight`}>
                  {level.title}
                </h2>
              )}
              {level.summary && (
                <p className="text-base text-surface-secondary text-center max-w-2xl mx-auto mb-8 leading-relaxed">
                  {level.summary}
                </p>
              )}
              {level.content && (
                <div className="mb-8">{level.content}</div>
              )}
              {hasNext && isCurrentEdge && (
                <div className="text-center">
                  <button
                    onClick={revealNext}
                    className="btn-gold inline-flex items-center gap-2 group"
                  >
                    {level.cta || 'Show Me More'}
                    <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
                  </button>
                  <p className="text-[10px] text-surface-muted mt-3 italic">Discover more · {num} of {levels.length}</p>
                </div>
              )}
              {!hasNext && level.cta && (
                <div className="text-center">{level.cta}</div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
