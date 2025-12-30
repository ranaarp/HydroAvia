export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-hydro-darker py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-hydro-blue to-hydro-blue rounded"></div>
              <span className="font-display text-xl font-bold text-white">HYDROAVIA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering GPS-denied autonomy for the future of drone operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="#mission" className="text-gray-400 hover:text-hydro-blue transition-colors text-sm">
                  Mission
                </a>
              </li>
              <li>
                <a href="#tech" className="text-gray-400 hover:text-hydro-blue transition-colors text-sm">
                  Technology
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-hydro-blue transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Drone as a Service (DaaS)</li>
              <li>H2 FCEV Integration</li>
              <li>Custom Solutions</li>
              <li>Operations Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:sales@hydroavia.com" className="hover:text-hydro-blue transition-colors">
                  sales@hydroavia.com
                </a>
              </li>
              <li>
                <a href="tel:+14088494408" className="hover:text-hydro-blue transition-colors">
                  +1 (408) 849-4408
                </a>
              </li>
              <li>150 Market Street</li>
              <li>Milpitas, CA 95035, USA</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} HydroAvia. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/hydroavia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-hydro-blue transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a
              href="https://www.hydroavia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-hydro-blue transition-colors text-sm"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
