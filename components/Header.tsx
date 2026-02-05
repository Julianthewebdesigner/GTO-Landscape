
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

const services = [
  { name: 'Hardscaping', href: '/services/hardscaping' },
  { name: 'Landscape Design', href: '/services/landscape-design' },
  { name: 'Property Cleanups', href: '/services/property-cleanups' },
  { name: 'Property Maintenance', href: '/services/property-maintenance' }
];

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-charcoal/90 backdrop-blur-md py-3 sm:py-4 border-b border-primary/20 shadow-xl' : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-48 h-20 sm:w-56 sm:h-24 md:w-64 md:h-28 lg:w-72 lg:h-32">
             <img src="/images/gtotransparentlogo.png" alt="GTO Landscape Logo" className="w-full h-full object-contain" />
          </div>
        </Link>

        {/* Hamburger Menu Button - Mobile/Tablet */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-[110] p-2 text-white hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-10 text-sm font-medium tracking-wide uppercase">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="hover:text-primary transition-colors duration-300 relative group flex items-center"
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-56 bg-charcoal/95 backdrop-blur-md border border-primary/20 rounded-sm shadow-2xl overflow-hidden"
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-6 py-3 text-sm text-offWhite hover:bg-primary/20 hover:text-primary transition-all duration-200 border-b border-white/5 last:border-b-0"
                  >
                    {service.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {/* Contact Link */}
          <a
            href="#contact"
            className="hover:text-primary transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Right Side - Actions */}
        <div className="hidden lg:flex items-center space-x-2 sm:space-x-4 lg:space-x-10">
          <a href="tel:2532692027" className="hidden md:block text-sm font-semibold hover:text-primary transition-colors">
            (253) 269-2027
          </a>
          <a href="mailto:gtolandscape8@gmail.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-3 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 bg-primary text-white text-[10px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest uppercase rounded-sm group"
            >
              <span className="relative z-10 hidden sm:inline">Get a Free Estimate</span>
              <span className="relative z-10 sm:hidden">Estimate</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="absolute inset-0 border border-white/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.button>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal/98 backdrop-blur-lg lg:hidden z-[105] overflow-y-auto"
          >
            <div className="container mx-auto px-6 pt-32 pb-8">
              {/* Services Menu */}
              <div className="mb-8">
                <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Our Services</h3>
                <nav className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 px-4 text-white text-lg font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200 border-b border-white/5 rounded-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact Section */}
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <a
                    href="tel:2532692027"
                    className="flex items-center text-white hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-lg">(253) 269-2027</span>
                  </a>
                  <a
                    href="mailto:gtolandscape8@gmail.com"
                    className="flex items-center text-white hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg">gtolandscape8@gmail.com</span>
                  </a>
                </div>

                {/* CTA Button */}
                <a
                  href="mailto:gtolandscape8@gmail.com"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-8"
                >
                  <button className="w-full px-8 py-4 bg-primary text-white font-bold tracking-widest text-sm uppercase rounded-sm hover:bg-primary/90 transition-all duration-300">
                    Get a Free Estimate
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
