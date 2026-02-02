
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  { name: 'Hardscaping', href: '/services/hardscaping' },
  { name: 'Landscape Design', href: '/services/landscape-design' },
  { name: 'Property Cleanups', href: '/services/property-cleanups' },
  { name: 'Outdoor Living', href: '/services/outdoor-living' }
];

const Hero: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <section className="relative min-h-screen h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Grass-GTO.jpeg"
          alt="Luxury Landscape Design"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/50 to-charcoal" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-48 sm:pt-40 md:pt-48 pb-24 sm:pb-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              South King County's Premier Contractor
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6 sm:mb-8">
              Luxury Outdoor Spaces <br />
              <span className="italic text-accent/80">Built to Last.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-offWhite/80 max-w-2xl mb-8 sm:mb-12 font-light leading-relaxed">
              Precision hardscaping and expert landscape design for homeowners who demand excellence. Based in Des Moines, serving the Pacific Northwest with uncompromising quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#projects">
                <button className="px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-deepTeal text-white font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 rounded-sm shadow-2xl hover:shadow-primary/40 flex items-center justify-center group">
                  View Our Portfolio
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs sm:text-sm border border-white/20 transition-all duration-300 rounded-sm flex items-center justify-center">
                  Our Services
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-full min-w-[250px] bg-charcoal/95 backdrop-blur-md border border-primary/20 rounded-sm shadow-2xl overflow-hidden z-50"
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-6 py-3 text-sm text-offWhite hover:bg-primary/20 hover:text-primary transition-all duration-200 border-b border-white/5 last:border-b-0"
                      >
                        {service.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center hidden sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-offWhite/40 mb-2">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
