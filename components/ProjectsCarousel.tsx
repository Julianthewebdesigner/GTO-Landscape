
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Des Moines Modern Oasis",
    location: "Des Moines, WA",
    img: "/images/Hardscape.jpeg"
  },
  {
    title: "Federal Way Retaining Wall",
    location: "Federal Way, WA",
    img: "/images/Retaining Wall.jpeg"
  },
  {
    title: "Kent Patio Transformation",
    location: "Kent, WA",
    img: "/images/GTO-Stairs.jpeg"
  },
  {
    title: "Renton Custom Lighting",
    location: "Renton, WA",
    img: "/images/Gravel-GTO.jpeg"
  },
  {
    title: "Auburn Stone Pathway",
    location: "Auburn, WA",
    img: "/images/Grass-GTO.jpeg"
  }
];

const ProjectsCarousel: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12 flex items-end justify-between">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Our Recent Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold">Project Highlights</h2>
        </div>
        <div className="hidden md:flex space-x-4">
           <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
           </div>
           <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
           </div>
        </div>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide space-x-4 sm:space-x-6 md:space-x-8 px-4 sm:px-6 md:px-12 pb-8" style={{ scrollSnapType: 'x mandatory' }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] aspect-[4/5] relative rounded-lg overflow-hidden group shadow-2xl"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{p.location}</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 sm:mb-6">{p.title}</h3>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center self-end transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
        {/* Call to Action Card */}
        <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] aspect-[4/5] bg-deepTeal rounded-lg flex flex-col items-center justify-center p-8 sm:p-12 text-center shadow-2xl">
           <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6">Ready to start your project?</h3>
           <a href="mailto:gtolandscape8@gmail.com">
             <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-offWhite transition-colors">
               Book Estimates
             </button>
           </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
