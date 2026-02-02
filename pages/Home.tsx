
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
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
      {/* Light Field Texture */}
      <div className="beam-overlay" />

      <Header scrolled={scrolled} />

      <main>
        <Hero />
        <ServicesGrid />
        <WhyChooseUs />
        <ProjectsCarousel />
        <ServiceAreas />
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
