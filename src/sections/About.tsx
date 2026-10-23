import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Award, Sparkles, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-offwhite px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-[2rem] bg-panel sm:rounded-[2.75rem] lg:grid-cols-12">
          {/* Left Column: Portrait & Stats */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full min-h-[440px] overflow-hidden bg-panel-strong sm:min-h-[560px]">
                <img
                  src="/agni-vver-raja.png"
                  alt="Portrait of Agni Veer Raja"
                  className="absolute inset-0 h-full w-full object-cover object-center grayscale-[100%] transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                  <p className="font-serif text-xl font-medium">Agni Veer Raja</p>
                  <p className="text-xs uppercase tracking-widest text-sand/90 font-mono">
                    B.Arch Candidate · Class of 2026
                  </p>
                </div>

              {/* Architectural credential tag */}
              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-charcoal/15 bg-surface/90 px-4 py-2.5 text-charcoal backdrop-blur-md sm:left-7 sm:top-7">
                <GraduationCap className="w-5 h-5 text-olive shrink-0" />
                <div className="text-[10px] text-charcoal sm:text-xs">
                  <p className="font-semibold uppercase tracking-wider">Architecture</p>
                  <p className="text-stone">B.Arch Candidate · 2026</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Philosophy */}
          <motion.div
            className="flex flex-col justify-center space-y-7 px-7 py-10 sm:px-10 sm:py-12 lg:col-span-7 lg:px-14 lg:py-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-stone text-[10px] font-mono tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Biography & Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal leading-tight tracking-tight">
                Architecture is a dialogue between light, gravity, and memory.
              </h2>
            </div>

            <div className="space-y-4 text-stone leading-relaxed font-light text-sm sm:text-base">
              <p>
                I am a final-year architecture undergraduate driven by the quiet power of understated
                spatial design. My work explores how tactile materials, climatic sensitivity, and
                social rituals coalesce into spaces that are generous, restorative, and grounded in
                their context.
              </p>
              <p>
                Whether addressing high-density urban transit nodes or intimate residential
                sanctuaries, I approach each design challenge through iterative physical modeling,
                rigorous environmental analysis, and deep site listening.
              </p>
            </div>

            {/* Design Philosophy Pillar Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-charcoal/10 bg-surface/55 p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal font-semibold mb-1">
                  <Award className="w-4 h-4 text-olive" />
                  <span>Climate Responsive</span>
                </div>
                <p className="text-xs text-stone leading-relaxed">
                  Passive ventilation, solar orientation, and local thermal mass as primary drivers.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal/10 bg-surface/55 p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal font-semibold mb-1">
                  <FileText className="w-4 h-4 text-olive" />
                  <span>Material Honesty</span>
                </div>
                <p className="text-xs text-stone leading-relaxed">
                  Honoring the expressive qualities of exposed brick, stone, timber, and lime plaster.
                </p>
              </div>
            </div>

            {/* Download Action Buttons */}
            <div className="border-t border-charcoal/10 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cv-placeholder"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Demo notice: Curriculum Vitae PDF placeholder.');
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-charcoal text-offwhite text-xs uppercase tracking-wider font-semibold hover:bg-olive transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>

                <a
                  href="#portfolio-pdf-placeholder"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Demo notice: High-Resolution Portfolio PDF placeholder (45MB).');
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-charcoal/30 text-charcoal text-xs uppercase tracking-wider font-semibold hover:bg-sand/50 transition-colors duration-200"
                >
                  <FileText className="w-4 h-4" />
                  <span>Full Portfolio (PDF)</span>
                </a>
              </div>
              <p className="text-[11px] text-stone/80 mt-2 font-mono">
                * PDF downloads are placeholders in this demo showcase.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
