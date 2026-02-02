
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    num: "01",
    title: "Elite Expertise",
    desc: "Our team consists of seasoned professionals with decades of combined experience in high-end hardscaping and architectural design."
  },
  {
    num: "02",
    title: "Uncompromising Quality",
    desc: "We source only premium-grade stone, timber, and masonry materials, ensuring your investment withstands the Pacific Northwest elements."
  },
  {
    num: "03",
    title: "Customer-Centric",
    desc: "We work directly with homeowners to translate their vision into reality, providing clear timelines and transparent communication."
  },
  {
    num: "04",
    title: "Proven Reliability",
    desc: "GTO Landscape LLC is licensed, bonded, and insured. We stand by our work with industry-leading warranties on all structural projects."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-offWhite text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Why GTO Landscape?</h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative mb-8 inline-block">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary font-serif text-3xl font-bold group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {i + 1}
                </div>
                <div className="absolute -inset-2 border border-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{f.title}</h3>
              <p className="text-charcoal/70 leading-relaxed text-sm">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
