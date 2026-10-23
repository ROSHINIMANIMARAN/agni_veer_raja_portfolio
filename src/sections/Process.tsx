import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitCommit, Compass, Sparkles, Layout, Ruler, Box, Presentation } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  const steps: Step[] = [
    {
      number: '01',
      title: 'Research & Site Analysis',
      subtitle: 'Listening to the land',
      description:
        'Climatic data, sun paths, wind vectors, topography, and historical context define the generative boundary conditions.',
      icon: <Compass className="w-5 h-5 text-olive" />,
    },
    {
      number: '02',
      title: 'Concept Development',
      subtitle: 'The conceptual seed',
      description:
        'Iterative sketching, physical volume studies, and spatial metaphors distill the core architectural narrative.',
      icon: <Sparkles className="w-5 h-5 text-olive" />,
    },
    {
      number: '03',
      title: 'Spatial Planning',
      subtitle: 'Circulation & proportion',
      description:
        'Programmatic adjacencies, threshold conditions, sightlines, and universal accessibility are sculpted in plan.',
      icon: <Layout className="w-5 h-5 text-olive" />,
    },
    {
      number: '04',
      title: 'Technical Drawings',
      subtitle: 'Tectonic precision',
      description:
        'Structural grids, building envelope assemblies, HVAC integration, and millimeter-accurate joinery documentation.',
      icon: <Ruler className="w-5 h-5 text-olive" />,
    },
    {
      number: '05',
      title: '3D Visualization',
      subtitle: 'Atmosphere & light',
      description:
        'Exploring temporal shadows, material textures, and experiential camera sequences through raytraced rendering.',
      icon: <Box className="w-5 h-5 text-olive" />,
    },
    {
      number: '06',
      title: 'Final Presentation',
      subtitle: 'Editorial narrative',
      description:
        'Assembling communicative sheets, curated booklets, physical scale models, and oral defense presentations.',
      icon: <Presentation className="w-5 h-5 text-olive" />,
    },
  ];

  return (
    <section id="process" className="py-28 px-6 sm:px-8 lg:px-12 bg-offwhite border-t border-sand/80">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-sand/80">
          <div>
            <div className="flex items-center gap-2 text-olive text-xs font-mono tracking-widest uppercase mb-3">
              <GitCommit className="w-3.5 h-3.5" />
              <span>Rigorous Methodology</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal tracking-tight">
              Design Process
            </h2>
          </div>
          <p className="text-stone text-sm sm:text-base max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            From initial topographical inquiry to the final tactile model, every design follows a
            disciplined, six-stage evolutionary framework.
          </p>
        </div>

        {/* Desktop Horizontal Timeline & Mobile Stack */}
        <div className="relative">
          {/* Continuous connecting horizontal line on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-sand -z-0" />

          {/* Grid/Flex Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="flex flex-col bg-sand-light/40 border border-sand p-6 lg:p-5 relative group hover:bg-surface hover:border-olive/50 transition-all duration-300 shadow-sm"
              >
                {/* Step indicator node */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl lg:text-3xl font-bold text-olive/80 group-hover:text-charcoal transition-colors">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-full bg-surface border border-sand group-hover:border-olive/40 shadow-xs">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-olive font-semibold">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-charcoal leading-snug group-hover:text-olive transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-stone font-light leading-relaxed mt-auto pt-3 border-t border-sand/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
