import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Mission', href: '#mission' },
    { label: 'Technology', href: '#tech' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hydro-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <svg width="32" height="32" viewBox="0 0 100 100" className="transition-transform group-hover:scale-110">
              {/* H in blue */}
              <path d="M 20,20 L 20,80 M 20,50 L 40,50 M 40,20 L 40,80" stroke="#0099d8" strokeWidth="8" fill="none" strokeLinecap="round"/>
              {/* Arrow in green */}
              <path d="M 50,35 L 50,65 L 75,50 Z" fill="#8dc63f"/>
            </svg>
            <span className="font-display text-xl font-semibold text-white group-hover:text-hydro-blue transition-colors">
              HydroAvia
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-hydro-cyan font-body text-sm tracking-wider transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hydro-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            <a
              href="#contact"
              className="px-6 py-2 bg-hydro-blue text-white font-display font-semibold text-sm rounded hover:bg-hydro-blue-dark transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-hydro-cyan transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-hydro-darker border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-hydro-cyan font-body text-sm tracking-wider transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-hydro-blue text-white font-display font-semibold text-sm rounded text-center hover:bg-hydro-blue-dark transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
