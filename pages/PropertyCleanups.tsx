
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';

const PropertyCleanups: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Leaf Removal",
      description: "Comprehensive leaf cleanup services to keep your property pristine through fall and winter. We remove, haul, and dispose of all yard debris professionally.",
      image: "/images/Cleanup-GTO.jpeg"
    },
    {
      title: "Bush Trimming",
      description: "Expert pruning and trimming to maintain healthy, attractive shrubs and hedges. Our precise cuts promote growth while enhancing your property's curb appeal.",
      image: "/images/Grass-GTO.jpeg"
    },
    {
      title: "Mulch & Soil",
      description: "Premium mulch installation and soil amendment services. We improve drainage, retain moisture, and give your beds a polished, professional appearance.",
      image: "/images/Gravel-GTO.jpeg"
    }
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-white bg-charcoal">
      <SEO
        title="Property Cleanup Services - Leaf Removal & Yard Maintenance"
        description="Professional property cleanup services in South King County. Comprehensive leaf removal, bush trimming, mulch installation, and seasonal yard maintenance. Keep your property immaculate year-round."
        image="/images/Grass-GTO.jpeg"
        url="https://gtolandscape.com/services/property-cleanups"
      />
      <div className="beam-overlay" />
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] h-[70vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Cleanup-GTO.jpeg"
            alt="Property Cleanup Services"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/50 to-charcoal" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-48 sm:pt-48 md:pt-56 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Professional Property Cleanups
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Keep Your Property Immaculate
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-offWhite/80 max-w-2xl mb-8 font-light leading-relaxed">
              Thorough cleanup services that maintain your landscape's beauty year-round. From seasonal leaf removal to ongoing maintenance.
            </p>
            <a href="mailto:gtolandscape8@gmail.com">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-deepTeal text-white font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 rounded-sm shadow-2xl">
                Book Cleanup Service
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-offWhite text-charcoal">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Cleanup Services</h2>
            <p className="text-offWhite/60 tracking-[0.2em] uppercase text-xs sm:text-sm text-charcoal/60">Professional & Thorough</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-sm overflow-hidden shadow-xl group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-4">{feature.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">Schedule Your Cleanup Today</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Contact us for a quick quote. We'll have your property looking spotless in no time.
          </p>
          <a href="tel:2532692027">
            <button className="px-10 py-5 bg-white text-primary hover:bg-offWhite font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-2xl">
              Call (253) 269-2027
            </button>
          </a>
        </div>
      </section>

      <Footer />
      <MobileBottomBar />

      {/* Decorative gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-deepTeal/10 blur-[120px] rounded-full pointer-events-none z-0" />
    </div>
  );
};

export default PropertyCleanups;
