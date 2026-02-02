
import React from 'react';
import { motion } from 'framer-motion';

const MobileBottomBar: React.FC = () => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 w-full z-[90] lg:hidden px-4 pb-6 pt-2 pointer-events-none"
    >
      <div className="bg-charcoal/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between p-2 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pointer-events-auto">
        <a
          href="tel:2532692027"
          className="flex-1 flex flex-col items-center justify-center h-14 border-r border-white/10"
        >
          <span className="text-[10px] text-offWhite/40 uppercase font-bold tracking-widest">Call Now</span>
          <span className="text-sm font-bold text-white tracking-tighter">(253) 269-2027</span>
        </a>
        <a
          href="mailto:gtolandscape8@gmail.com"
          className="flex-[1.5] bg-primary h-14 rounded-xl text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          Free Estimate
        </a>
      </div>
    </motion.div>
  );
};

export default MobileBottomBar;
