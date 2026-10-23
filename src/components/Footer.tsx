import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-offwhite border-t border-charcoal/15 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-charcoal/15">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-serif text-3xl font-bold tracking-tight">
              A<span className="text-olive">.</span>
            </div>
            <p className="text-stone text-sm max-w-sm leading-relaxed">
              Architecture student portfolio exploring the synthesis of spatial atmosphere,
              tectonic integrity, and environmental stewardship.
            </p>
            <p className="text-xs uppercase tracking-widest text-sand/60">
              Bangalore · Chennai · Ahmedabad
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-sand font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone">
              <li>
                <a href="/#home" className="hover:text-offwhite transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-offwhite transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-offwhite transition-colors">
                  Design Philosophy
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-offwhite transition-colors">
                  Tools & Expertise
                </a>
              </li>
              <li>
                <a href="/#process" className="hover:text-offwhite transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-offwhite transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-sand font-semibold">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-stone">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-offwhite transition-colors inline-flex items-center gap-2"
              >
                <span>LinkedIn</span>
                <span className="text-xs text-charcoal/40">↗</span>
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-offwhite transition-colors inline-flex items-center gap-2"
              >
                <span>Behance</span>
                <span className="text-xs text-charcoal/40">↗</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-offwhite transition-colors inline-flex items-center gap-2"
              >
                <span>Instagram</span>
                <span className="text-xs text-charcoal/40">↗</span>
              </a>
              <a
                href="https://wa.me/919384510353"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors inline-flex items-center gap-2"
              >
                <span>WhatsApp</span>
                <span className="text-xs text-charcoal/40">↗</span>
              </a>
              <a
                href="mailto:contact@architecture.portfolio"
                className="hover:text-offwhite transition-colors inline-flex items-center gap-2"
              >
                <span>contact@architecture.portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone gap-4">
          <p>© {new Date().getFullYear()} Architecture Student Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-charcoal/50">Crafted with precision & passion</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-sand hover:text-offwhite transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
