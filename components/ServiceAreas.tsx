
import React from 'react';
import { motion } from 'framer-motion';

const areas = [
  "Des Moines", "Federal Way", "Kent", "Renton", "Auburn", 
  "SeaTac", "Burien", "Tukwila", "Normandy Park", "Covington", 
  "Maple Valley", "Black Diamond"
];

const stats = [
  { label: "Communities Served", value: "15+" },
  { label: "Satisfied Customers", value: "250+" },
  { label: "Quality Guaranteed", value: "100%" }
];

const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="py-16 md:py-24 bg-offWhite text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">Areas <span className="text-primary italic">We Serve</span></h2>
            <p className="text-base sm:text-lg text-charcoal/70 mb-8 sm:mb-10 leading-relaxed">
              GTO Landscape LLC proudly serves homeowners throughout South King County and surrounding municipalities. We bring luxury landscaping to your neighborhood.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {areas.map((area) => (
                <span 
                  key={area} 
                  className="px-4 py-2 bg-white border border-charcoal/10 rounded-full text-xs font-semibold tracking-wide hover:border-primary hover:text-primary transition-all cursor-default shadow-sm"
                >
                  {area}
                </span>
              ))}
              <span className="px-4 py-2 bg-charcoal text-white rounded-full text-xs font-semibold">+ 5 more</span>
            </div>

            <div className="grid grid-cols-3 gap-6 bg-deepTeal p-8 rounded-lg text-white shadow-2xl">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-serif font-bold mb-1">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[500px] relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Custom SVG Map Visualization or high-quality map placeholder */}
            <div className="absolute inset-0 bg-[#E5E7EB]">
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Map of King County" 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            
            {/* Pulsing Markers */}
            <div className="absolute top-1/4 left-1/3">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-primary rounded-full relative shadow-lg" />
            </div>
            <div className="absolute top-2/3 left-1/2">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-primary rounded-full relative shadow-lg" />
            </div>
            <div className="absolute top-1/2 left-2/3">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-primary rounded-full relative shadow-lg" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-lg flex items-center justify-between text-white">
                <span className="text-sm font-bold">Currently working in: <span className="text-accent italic">Des Moines</span></span>
                <span className="text-[10px] uppercase tracking-widest bg-primary px-3 py-1 rounded">Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
