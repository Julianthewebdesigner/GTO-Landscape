
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-charcoal pt-24 sm:pt-32 overflow-hidden">
      {/* The Curved Shape Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-offWhite" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          <div>
            <div className="flex items-center space-x-3 mb-8 sm:mb-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm overflow-hidden">
                 <img src="/images/Logo.jpeg" alt="GTO Landscape Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold tracking-tighter leading-none text-white">GTO LANDSCAPE</span>
                <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-primary font-medium">LLC</span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-offWhite/60 mb-8 sm:mb-12">
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <span>gtolandscape8@gmail.com</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <span>(253) 269-2027</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <span>Des Moines, WA 98198</span>
              </div>
            </div>

            <div className="flex space-x-6">
              {['facebook', 'instagram', 'twitter'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-offWhite/40 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-8">Navigation</h4>
              <ul className="space-y-4 text-offWhite/50">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                {['Services', 'Projects', 'About Us', 'Contact'].map(link => (
                  <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-8">Legal</h4>
              <ul className="space-y-4 text-offWhite/50">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'].map(link => (
                  <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-offWhite/30 text-[10px] sm:text-xs text-center md:text-left">© 2024 GTO Landscape LLC. All rights reserved. WA Contractor Lic #GTOLALL776BS</p>
          <div className="flex space-x-6 sm:space-x-8 text-offWhite/30 text-[10px] sm:text-xs uppercase tracking-widest">
            <a href="https://www.eagleclawagency.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Designed by Eagle Claw Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
