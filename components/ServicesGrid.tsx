
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Hardscaping",
    list: ["Paver Patios", "Retaining Walls", "Outdoor Kitchens"],
    image: "/images/Hardscape.jpeg",
    button: "HARDSCAPING",
    href: "/services/hardscaping"
  },
  {
    title: "Landscape Design",
    list: ["Planting Plans", "Bed Installation", "Arbor Care"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    button: "LANDSCAPING",
    href: "/services/landscape-design"
  },
  {
    title: "Property Cleanups",
    list: ["Leaf Removal", "Bush Trimming", "Mulch & Soil"],
    image: "/images/Cleanup-GTO.jpeg",
    button: "CLEANUPS",
    href: "/services/property-cleanups"
  },
  {
    title: "Outdoor Living",
    list: ["Lighting Design", "Water Features", "Fire Pits"],
    image: "/images/GTO-Stairs.jpeg",
    button: "LIVING SPACES",
    href: "/services/outdoor-living"
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-charcoal relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4">Elite Craftsmanship</h2>
          <p className="text-offWhite/60 tracking-[0.2em] uppercase text-xs sm:text-sm">Professional Outdoor Solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-sm cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 sm:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <ul className="mb-6 sm:mb-8 space-y-2 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.list.map(item => (
                      <li key={item} className="flex items-center text-white/80 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 bg-primary mr-3 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white font-bold tracking-widest text-xs uppercase rounded-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {service.button}
                  </motion.button>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
