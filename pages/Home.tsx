
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import GalleryCarousel from '../components/GalleryCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsCarousel from '../components/ProjectsCarousel';
import ServiceAreas from '../components/ServiceAreas';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';

const Home: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-white">
      <SEO
        title="Professional Landscaping Services in King County and Surrounding Areas, WA"
        description="GTO Landscape LLC offers premium landscaping, hardscaping, and outdoor living services in Des Moines, Federal Way, Kent, Renton, and surrounding areas. Expert landscape design, property cleanups, and construction with 100% satisfaction guaranteed."
        image="https://gtolandscape.com/images/Logo.jpeg"
        url="https://gtolandscape.com"
        type="website"
      />

      {/* Light Field Texture */}
      <div className="beam-overlay" />

      <Header scrolled={scrolled} />

      <main>
        <Hero />

        <ServicesGrid />
        <GalleryCarousel />
        <WhyChooseUs />
        <ProjectsCarousel />
        <ServiceAreas />

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Transform Your <span className="italic">Outdoor Space?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Get in touch today for a free consultation and estimate. Let's bring your landscaping vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:gtolandscape8@gmail.com">
                <button className="px-10 py-5 bg-white text-primary hover:bg-offWhite font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-2xl min-w-[250px]">
                  Email Us
                </button>
              </a>
              <a href="tel:2532692027">
                <button className="px-10 py-5 bg-charcoal text-white hover:bg-charcoal/80 font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-2xl min-w-[250px] flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (253) 269-2027
                </button>
              </a>
            </div>
            <div className="mt-12 text-white/60">
              <p className="text-sm">Des Moines, WA 98198</p>
              <p className="text-sm mt-2">Serving King County & Surrounding Areas</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />

      {/* Decorative background gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-deepTeal/10 blur-[120px] rounded-full pointer-events-none z-0" />
    </div>
  );
};

export default Home;
