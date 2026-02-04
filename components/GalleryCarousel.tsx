
import React, { useEffect, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

const galleryImages = [
  { src: '/images/IMG_3025.jpeg', alt: 'GTO Landscape Project 1' },
  { src: '/images/IMG_5836.jpeg', alt: 'GTO Landscape Project 2' },
  { src: '/images/IMG_5837.jpeg', alt: 'GTO Landscape Project 3' },
  { src: '/images/IMG_5989.jpeg', alt: 'GTO Landscape Project 4' },
  { src: '/images/IMG_7639.jpeg', alt: 'GTO Landscape Project 5' },
  { src: '/images/IMG_7654.jpeg', alt: 'GTO Landscape Project 6' },
  { src: '/images/IMG_7656.jpeg', alt: 'GTO Landscape Project 7' },
];

const GalleryCarousel: React.FC = () => {
  const baseVelocity = -50; // Pixels per second
  const baseX = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    let newX = baseX.get() + moveBy;

    // Reset position for infinite loop
    // Each image is ~300-500px + gap, approximate total width per set
    const imageSetWidth = 3700; // Approximate width of one set of 7 images with gaps

    if (newX <= -imageSetWidth) {
      newX = 0;
    }

    baseX.set(newX);
  });

  // Create duplicated arrays for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <section className="py-16 md:py-24 bg-offWhite relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12">
        <div className="text-center">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-charcoal">
            Transforming <span className="italic text-primary">Outdoor Spaces</span>
          </h2>
          <p className="text-charcoal/60 tracking-[0.2em] uppercase text-xs sm:text-sm mt-4">
            Crafted with Excellence
          </p>
        </div>
      </div>

      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-r from-offWhite to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-l from-offWhite to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-10 absolute"
          style={{ x: baseX }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="relative flex-shrink-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] group overflow-hidden rounded-lg shadow-2xl"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Optional: Reveal info on hover */}
              <div className="absolute inset-0 flex items-end p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">View Project</p>
                    <p className="text-white/70 text-xs sm:text-sm">Professional Landscaping</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom description */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 mt-8 sm:mt-12 text-center">
        <p className="text-charcoal/70 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          Each project showcases our commitment to excellence and attention to detail.
          From elegant hardscaping to lush landscape designs, we bring your outdoor vision to life with precision and artistry.
        </p>
      </div>
    </section>
  );
};

export default GalleryCarousel;
