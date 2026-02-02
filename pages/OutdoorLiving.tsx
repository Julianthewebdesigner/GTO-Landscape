
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';

const OutdoorLiving: React.FC = () => {
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
      title: "Lighting Design",
      description: "Transform your outdoor space with professionally designed landscape lighting. We create ambiance, enhance safety, and showcase your property's best features.",
      image: "/images/GTO-Stairs.jpeg"
    },
    {
      title: "Water Features",
      description: "From elegant fountains to tranquil ponds, we design and install water features that become the centerpiece of your outdoor living area.",
      image: "/images/Gravel-GTO.jpeg"
    },
    {
      title: "Fire Pits",
      description: "Extend your outdoor season with a custom fire pit or fireplace. Perfect for entertaining or relaxing under the stars on cool Pacific Northwest evenings.",
      image: "/images/Hardscape.jpeg"
    }
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-white bg-charcoal">
      <SEO
        title="Outdoor Living Spaces - Lighting, Fire Pits & Water Features"
        description="Transform your backyard with custom outdoor living features. Professional landscape lighting, fire pits, water features, and outdoor entertainment spaces in South King County, WA."
        image="/images/Grass-GTO.jpeg"
        url="https://gtolandscape.com/services/outdoor-living"
      />
      <div className="beam-overlay" />
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] h-[70vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/GTO-Stairs.jpeg"
            alt="Outdoor Living Services"
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
              Outdoor Living Spaces
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Extend Your Living Space
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-offWhite/80 max-w-2xl mb-8 font-light leading-relaxed">
              Create unforgettable outdoor experiences with custom lighting, fire features, and water elements that bring your backyard to life.
            </p>
            <a href="mailto:gtolandscape8@gmail.com">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-deepTeal text-white font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 rounded-sm shadow-2xl">
                Design Your Space
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-offWhite text-charcoal">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Outdoor Living Features</h2>
            <p className="text-offWhite/60 tracking-[0.2em] uppercase text-xs sm:text-sm text-charcoal/60">Elevate Your Outdoor Experience</p>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">Create Your Outdoor Oasis</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss your vision and bring your outdoor living dreams to reality.
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

export default OutdoorLiving;
