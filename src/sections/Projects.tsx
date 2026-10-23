import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-offwhite px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px] rounded-[2rem] bg-panel px-6 py-10 sm:px-10 sm:py-14 lg:rounded-[2.75rem] lg:px-16 lg:py-16">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-charcoal/10 pb-7 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-stone">
              <Compass className="h-3.5 w-3.5" />
              <span className="text-[10px] uppercase tracking-[0.2em]">
                Portfolio · 2023—2026
              </span>
            </div>
            <h2 className="font-serif text-4xl tracking-tight text-charcoal sm:text-5xl">
              Selected works
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone">
            A collection of places, ideas, and material studies exploring how architecture can
            support everyday life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-11">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-4 focus-visible:ring-offset-panel"
              >
                <div className="relative aspect-[1.28] overflow-hidden rounded-2xl bg-panel-strong">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[10px] tracking-[0.12em] text-charcoal backdrop-blur-sm">
                    {project.number} / {project.year}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-surface text-charcoal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 px-1 pt-4">
                  <div>
                    <h3 className="font-serif text-xl leading-tight text-charcoal sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-stone">
                      {project.category} · {project.location}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-stone transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
