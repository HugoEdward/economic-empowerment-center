@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

@layer base {
  html { scroll-behavior: smooth; }
  body {
    @apply bg-navy-950 text-surface-primary font-body antialiased;
  }
}

@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
           bg-forest text-white font-semibold text-sm tracking-wide
           transition-all duration-300 ease-out
           hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest/20;
  }
  .btn-outline {
    @apply inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
           bg-transparent text-surface-primary font-semibold text-sm tracking-wide
           border border-surface-border
           transition-all duration-300 ease-out
           hover:border-gold hover:text-gold hover:bg-gold-dim;
  }
  .btn-gold {
    @apply inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
           bg-gold text-navy-950 font-bold text-sm tracking-wide
           transition-all duration-300 ease-out
           hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25;
  }
  .section-label {
    @apply text-xs font-semibold tracking-[0.14em] uppercase text-gold
           flex items-center gap-3 mb-4;
  }
  .section-label::before {
    content: '';
    @apply w-6 h-px bg-gold;
  }
  .card {
    @apply bg-navy-800 border border-surface-border rounded-2xl p-8
           transition-all duration-300
           hover:border-gold/20 hover:bg-navy-700;
  }
  .disclaimer-box {
    @apply bg-gold-dim border border-gold/20 rounded-xl px-6 py-4
           text-sm text-surface-secondary leading-relaxed;
  }
  .disclaimer-box strong {
    @apply text-gold;
  }
}
