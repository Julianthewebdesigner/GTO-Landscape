
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';

const PropertyMaintenance: React.FC = () => {
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
      title: "Lawn Care",
      description: "Professional lawn mowing, edging, and maintenance to keep your property looking pristine. Regular service ensures a healthy, manicured lawn year-round.",
      image: "/images/IMG_7654.jpeg"
    },
    {
      title: "Trimming & Pruning",
      description: "Expert trimming and pruning of shrubs, hedges, and small trees. We maintain the health and aesthetics of your landscape with careful, precise techniques.",
      image: "/images/Trimming.jpeg"
    },
    {
      title: "Seasonal Cleanups",
      description: "Comprehensive spring and fall cleanups to prepare your property for each season. From debris removal to mulch refresh, we keep your landscape fresh.",
      image: "/images/Leaf Removal.jpeg"
    },
    {
      title: "Additional Services",
      description: "Complete property care including weed control, leaf removal, gutter cleaning, pressure washing, and minor repairs. We handle all your maintenance needs.",
      image: "/images/IMG_7639.jpeg"
    }
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-white bg-charcoal">
      <SEO
        title="Property Maintenance - Lawn Care, Cleanups & Landscaping Services"
        description="Professional property maintenance services including lawn mowing, trimming & pruning, seasonal cleanups, mulch refresh, weed control, and debris removal in King County and surrounding areas, WA."
        image="/images/IMG_7654.jpeg"
        url="https://gtolandscape.com/services/property-maintenance"
      />
      <div className="beam-overlay" />
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] h-[70vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/GTO-Stairs.jpeg"
            alt="Property Maintenance Services"
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
              Property Maintenance
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Keep Your Property Perfect
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-offWhite/80 max-w-2xl mb-8 font-light leading-relaxed">
              Professional maintenance services to keep your landscape healthy, beautiful, and well-maintained throughout every season.
            </p>
            <a href="mailto:gtolandscape8@gmail.com">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-deepTeal text-white font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 rounded-sm shadow-2xl">
                Request Service
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-offWhite text-charcoal">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Maintenance Services</h2>
            <p className="text-offWhite/60 tracking-[0.2em] uppercase text-xs sm:text-sm text-charcoal/60">Complete Property Care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-charcoal text-offWhite">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Lawn mowing & edging</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Trimming & pruning (shrubs/hedges/small trees)</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Seasonal cleanups (spring/fall)</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Mulch refresh & bed maintenance</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Weed control & prevention</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Leaf cleanup & haul-away</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Debris removal & dump runs</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Gutter cleaning</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Pressure washing</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary mt-2 mr-4 rounded-full flex-shrink-0" />
                  <span className="text-lg">Minor repairs (fence panels, paver touch-ups)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">Schedule Your Service</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Let us take care of your property maintenance needs so you can enjoy your outdoor space.
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

export default PropertyMaintenance;
