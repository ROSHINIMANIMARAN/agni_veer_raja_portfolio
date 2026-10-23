import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'dark',
  );
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      // Check active section if on home
      if (isHome) {
        const sections = ['home', 'projects', 'about', 'skills', 'process', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/#home', id: 'home' },
    { name: 'Projects', href: isHome ? '#projects' : '/#projects', id: 'projects' },
    { name: 'About', href: isHome ? '#about' : '/#about', id: 'about' },
    { name: 'Skills', href: isHome ? '#skills' : '/#skills', id: 'skills' },
    { name: 'Process', href: isHome ? '#process' : '/#process', id: 'process' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact', id: 'contact' },
  ];

  const themeToggle = (
    <button
      type="button"
      onClick={() => setIsDark((current) => !current)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:bg-panel"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-40 border-b border-charcoal/10 bg-offwhite/95 py-4 text-charcoal backdrop-blur-md transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo Monogram */}
          <Link
            to="/"
            className="group flex items-baseline gap-2 focus:outline-none"
            aria-label="Home"
          >
            <span className="font-serif text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">
              A<span className="text-olive font-normal text-2xl">.</span>
            </span>
            <span className="hidden font-sans text-xs uppercase tracking-widest text-stone sm:inline-block">
              Architecture
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-charcoal font-semibold'
                      : 'text-stone hover:text-charcoal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-charcoal"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden items-center gap-3 md:flex">
            {themeToggle}
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/20 bg-charcoal px-4 py-2 text-xs font-semibold uppercase tracking-wider text-offwhite transition-all duration-300 hover:border-olive hover:bg-olive"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {themeToggle}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-charcoal transition-colors hover:bg-sand/30"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-offwhite text-charcoal z-50 shadow-2xl p-8 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-sand/80">
                  <span className="font-serif text-2xl font-bold">
                    A<span className="text-olive">.</span> Portfolio
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-full text-stone hover:text-charcoal"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-5 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-serif tracking-wide py-1 flex items-center justify-between transition-colors ${
                        activeSection === link.id
                          ? 'text-charcoal font-bold pl-2 border-l-2 border-charcoal'
                          : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-8 border-t border-sand/80">
                <p className="text-xs uppercase tracking-widest text-stone mb-2">
                  Architecture Portfolio
                </p>
                <p className="text-sm font-medium text-charcoal">
                  Spatial Design & Sustainable Architecture
                </p>
                <div className="mt-4 flex gap-4 text-xs text-stone">
                  <span>© 2026</span>
                  <span>·</span>
                  <span>All Rights Reserved</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
