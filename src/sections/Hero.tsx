import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-offwhite px-5 pb-8 pt-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1500px] grid-cols-1 gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-8">
        <motion.div
          className="relative flex min-w-0 min-h-[560px] flex-col justify-between overflow-hidden rounded-[2rem] bg-surface px-7 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-stone sm:text-xs">
            <span>Agni Veer Raja</span>
            <span className="hidden sm:inline">Architecture · 2026</span>
          </div>

          <div className="pointer-events-none absolute bottom-24 right-5 top-24 hidden items-center xl:flex lg:right-8">
            <span
              className="font-sans text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-none tracking-[-0.08em] text-charcoal"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              PORTFOLIO
            </span>
          </div>

          <div className="relative z-10 max-w-[92%] xl:max-w-[62%]">
            <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-stone sm:text-xs">
              Selected works · 2023—2026
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Spaces shaped
              <br />
              by light,
              <br />
              life &amp; place.
            </h1>
            <a
              href="#projects"
              className="mt-7 inline-flex items-center gap-2 border-b border-charcoal/30 pb-2 text-xs uppercase tracking-[0.16em] text-charcoal transition-colors hover:border-charcoal"
            >
              Explore selected work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-end justify-between gap-6 border-t border-charcoal/10 pt-5">
            <div className="text-[11px] leading-relaxed text-stone sm:text-xs">
              <p className="font-medium text-charcoal">Agni Veer Raja</p>
              <p>Architecture · Spatial design</p>
              <p>India</p>
            </div>
            <a
              href="#about"
              aria-label="Scroll to about Agni Veer Raja"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:bg-charcoal hover:text-white"
            >
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative min-w-0 min-h-[420px] overflow-hidden rounded-[2rem] bg-panel-strong sm:min-h-0"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
        >
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85"
            alt="Warm modern architectural interior with natural materials"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] text-white/90 sm:bottom-8 sm:left-8">
            Architecture as lived experience
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
