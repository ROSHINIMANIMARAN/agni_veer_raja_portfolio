import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, PenTool, Cpu } from 'lucide-react';

interface SkillItem {
  name: string;
  level: 'Advanced' | 'Intermediate';
  detail?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Design & Drafting',
      icon: <Layers className="w-5 h-5 text-sand" />,
      description: 'Precision drafting, architectural representation, and structural logic.',
      skills: [
        { name: 'AutoCAD', level: 'Advanced', detail: '2D Construction Docs & Detail Sets' },
        { name: 'Architectural Drawing', level: 'Advanced', detail: 'Axonometrics & Hand Drafting' },
        { name: 'Space Planning', level: 'Advanced', detail: 'Zoning, Circulation & Accessibility' },
        { name: 'Technical Drafting', level: 'Advanced', detail: 'Sections, Elevations & Joinery' },
      ],
    },
    {
      title: '3D & Visualization',
      icon: <Box className="w-5 h-5 text-sand" />,
      description: 'Parametric modeling, spatial simulation, and photorealistic rendering.',
      skills: [
        { name: 'Revit (BIM)', level: 'Advanced', detail: 'BIM Modeling & Coordination' },
        { name: 'Rhino + Grasshopper', level: 'Intermediate', detail: 'Computational Form-Finding' },
        { name: 'SketchUp Pro', level: 'Advanced', detail: 'Rapid Spatial Prototyping' },
        { name: 'Lumion', level: 'Advanced', detail: 'Atmospheric Walkthroughs' },
        { name: 'Enscape', level: 'Advanced', detail: 'Real-time Architectural Previews' },
        { name: 'V-Ray', level: 'Intermediate', detail: 'High-Fidelity Raytracing' },
      ],
    },
    {
      title: 'Creative Tools & Graphics',
      icon: <PenTool className="w-5 h-5 text-sand" />,
      description: 'Editorial layout, diagrammatic narratives, and atmospheric post-production.',
      skills: [
        { name: 'Adobe Photoshop', level: 'Advanced', detail: 'Collage & Post-Digital Renders' },
        { name: 'Adobe InDesign', level: 'Advanced', detail: 'Editorial Portfolio & Booklet Systems' },
        { name: 'Adobe Illustrator', level: 'Advanced', detail: 'Vector Diagrams & Analytical Maps' },
        { name: 'Physical Model Making', level: 'Advanced', detail: 'Basswood, Acrylic & Cast Plaster' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 sm:px-8 lg:px-12 bg-charcoal text-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-sand text-xs font-mono tracking-widest uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-offwhite tracking-tight">
              Tools & Expertise
            </h2>
          </div>
          <p className="text-stone text-sm sm:text-base max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            A refined toolkit spanning conceptual exploration, computational workflows, and
            construction documentation.
          </p>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, colIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: colIdx * 0.15 }}
              className="flex flex-col justify-between p-6 sm:p-8 bg-offwhite/[0.03] border border-charcoal/10 hover:border-sand/40 transition-colors duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-offwhite/5 border border-charcoal/10 rounded-none">
                    {category.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sand/70">
                      Domain 0{colIdx + 1}
                    </span>
                    <h3 className="font-serif text-2xl text-offwhite">{category.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-stone leading-relaxed mb-8 font-light">
                  {category.description}
                </p>

                {/* Elegant Editorial List with Thin Dividers */}
                <div className="divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-3.5 flex items-center justify-between group hover:bg-offwhite/[0.04] px-1 transition-colors"
                    >
                      <div>
                        <span className="text-sm font-medium text-offwhite group-hover:text-sand transition-colors">
                          {skill.name}
                        </span>
                        {skill.detail && (
                          <p className="text-[11px] text-stone font-light hidden sm:block">
                            {skill.detail}
                          </p>
                        )}
                      </div>

                      <span
                        className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 border ${
                          skill.level === 'Advanced'
                            ? 'text-sand border-sand/40 bg-sand/10'
                            : 'text-stone border-charcoal/10 bg-offwhite/5'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-[11px] font-mono text-stone">
                <span>{category.skills.length} Key Competencies</span>
                <span className="text-sand/50">SPA Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
