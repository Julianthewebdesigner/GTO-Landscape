
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-charcoal/90 backdrop-blur-md py-3 sm:py-4 border-b border-primary/20 shadow-xl' : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-40 h-16 sm:w-48 sm:h-18 md:w-56 md:h-20">
             <img src="/images/gtotransparentlogo.png" alt="GTO Landscape Logo" className="w-full h-full object-contain" />
          </div>
        </Link>

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
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-10">
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
    </header>
  );
};

export default Header;
