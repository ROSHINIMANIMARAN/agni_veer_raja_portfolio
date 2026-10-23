import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Layers,
  Leaf,
  Calendar,
  MapPin,
  Tag,
  Maximize2,
  X,
  Info,
} from 'lucide-react';
import { projects, Project } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project: Project | undefined = projects[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl text-charcoal mb-4">Project Not Found</h1>
        <p className="text-stone max-w-md mb-8">
          The requested architectural project could not be located in the studio archives.
        </p>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-offwhite text-xs uppercase tracking-wider font-semibold hover:bg-olive transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Selected Works</span>
        </Link>
      </div>
    );
  }

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-offwhite text-charcoal">
      {/* Top Demo Banner Note */}
      <div className="border-b border-sand bg-panel py-2.5 px-6 text-center font-mono text-xs text-stone sm:px-8">
        <span className="inline-flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-olive" />
          <span>
            ACADEMIC SHOWCASE DEMO · All renders, site drawings, and narratives are for portfolio
            demonstration purposes.
          </span>
        </span>
      </div>

      {/* Floating Back Navigation Button */}
      <div className="fixed top-24 left-6 z-30">
        <button
          onClick={() => navigate('/#projects')}
          className="group inline-flex items-center gap-2 border border-charcoal/20 bg-charcoal/90 px-4 py-2 font-mono text-xs uppercase tracking-widest text-offwhite shadow-md backdrop-blur-md transition-all duration-200 hover:bg-olive"
          aria-label="Back to projects"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>All Works</span>
        </button>
      </div>

      {/* Hero Header with Full-Screen Height / Cover Image */}
      <section className="relative h-[80vh] min-h-[550px] w-full flex items-end justify-start overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-center filter brightness-[0.78]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 pt-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white">
              <span className="border border-white/20 bg-black/30 px-2.5 py-1 backdrop-blur-sm">
                Project {project.number}
              </span>
              <span>·</span>
              <span>{project.category}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
              {project.title}
            </h1>

            <p className="max-w-2xl font-serif text-lg font-light italic leading-relaxed text-white/90 sm:text-2xl">
              "{project.concept}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-20">
        {/* 1. Project Overview Metadata Grid */}
        <div className="grid grid-cols-2 gap-6 border border-sand bg-surface p-8 shadow-xs md:grid-cols-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-olive" /> Year
            </span>
            <p className="text-sm font-semibold text-charcoal">{project.year}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-olive" /> Location
            </span>
            <p className="text-sm font-semibold text-charcoal">{project.location}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-olive" /> Typology
            </span>
            <p className="text-sm font-semibold text-charcoal">{project.category}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-olive" /> Key Themes
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-sand/40 border border-sand text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Brief & Objectives */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-sand/80">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-olive">Phase 01</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">Brief & Objectives</h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-lg text-charcoal/90 font-serif leading-relaxed">
              {project.brief}
            </p>
            <p className="text-stone font-light text-base leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>

        {/* 3. Site Analysis */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-sand/80">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-olive">Phase 02</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">Site Analysis</h2>
            <div className="mt-4 flex items-center gap-2 text-stone text-xs font-mono">
              <Compass className="w-4 h-4 text-olive" />
              <span>Microclimate · Wind & Solar Vectors</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="p-8 bg-sand/20 border-l-2 border-olive space-y-4">
              <p className="text-base text-stone font-light leading-relaxed">
                {project.siteAnalysis}
              </p>
            </div>
          </div>
        </section>

        {/* 4. Concept Development */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-sand/80">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-olive">Phase 03</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">Concept Development</h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-base text-stone font-light leading-relaxed">
              {project.conceptDevelopment}
            </p>
          </div>
        </section>

        {/* 5. Image Gallery */}
        <section className="pt-12 border-t border-sand/80 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-olive">Visual Archives</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">
                Spatial Documentation
              </h2>
            </div>
            <p className="text-stone text-xs font-mono">
              Click any plate to inspect full scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((imgUrl, imgIdx) => (
              <div
                key={imgIdx}
                onClick={() => setSelectedImage(imgUrl)}
                className="group relative cursor-pointer overflow-hidden bg-charcoal aspect-[4/3] border border-sand/60"
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} study ${imgIdx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-2 rounded-full bg-surface/90 p-3 text-charcoal shadow-lg transition-transform group-hover:translate-y-0">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-white/90">
                  Plate 0{imgIdx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Materials Palette (Visual Chips) */}
        <section className="pt-12 border-t border-sand/80 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-olive">Tactile Expression</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">
              Materials Palette
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {project.materials.map((mat, idx) => (
              <div
                key={mat}
                className="flex h-32 flex-col justify-between border border-sand bg-surface p-5 transition-colors hover:border-olive"
              >
                <span className="text-[10px] font-mono uppercase text-olive font-semibold">
                  M-0{idx + 1}
                </span>
                <div>
                  <p className="font-serif text-base font-medium text-charcoal">{mat}</p>
                  <p className="text-[10px] font-mono text-stone mt-1">Architectural Grade</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Sustainability */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-sand/80">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-olive flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5" /> Ecology & Performance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">Sustainability Strategy</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="p-8 bg-sand-light/50 border border-sand space-y-3">
              <h3 className="font-serif text-xl font-medium text-charcoal">
                Passive Environmental Synthesis
              </h3>
              <p className="text-stone font-light text-base leading-relaxed">
                {project.sustainability}
              </p>
            </div>
          </div>
        </section>

        {/* 8. Outcome & Reflection */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-sand/80">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-olive">Pedagogy</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">Outcome & Reflection</h2>
          </div>
          <div className="lg:col-span-8">
            <blockquote className="space-y-3 border-l-4 border-charcoal bg-surface p-8 shadow-xs">
              <p className="font-serif italic text-lg sm:text-xl text-charcoal/90 leading-relaxed">
                "{project.outcome}"
              </p>
              <footer className="text-xs font-mono uppercase tracking-widest text-stone">
                — Studio Reflection & Review
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Previous / Next Project Navigation Bar */}
        <div className="pt-16 border-t border-sand/80 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to={`/projects/${prevProject.id}`}
            className="group flex items-center gap-4 border border-sand bg-surface p-6 text-left transition-all hover:border-charcoal"
          >
            <div className="p-3 bg-sand/40 rounded-full group-hover:bg-charcoal group-hover:text-offwhite transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone">
                Previous Project · {prevProject.number}
              </span>
              <p className="font-serif text-lg font-medium text-charcoal group-hover:text-olive transition-colors">
                {prevProject.title}
              </p>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.id}`}
            className="group flex items-center justify-between gap-4 border border-sand bg-surface p-6 text-right transition-all hover:border-charcoal"
          >
            <div className="flex-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone">
                Next Project · {nextProject.number}
              </span>
              <p className="font-serif text-lg font-medium text-charcoal group-hover:text-olive transition-colors">
                {nextProject.title}
              </p>
            </div>
            <div className="p-3 bg-sand/40 rounded-full group-hover:bg-charcoal group-hover:text-offwhite transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </main>

      {/* Lightbox / Modal for enlarged images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              src={selectedImage}
              alt="Enlarged architectural plate"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
