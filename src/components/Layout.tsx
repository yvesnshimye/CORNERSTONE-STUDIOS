import { ReactNode, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownPopup]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="film-grain" />
      <Navbar />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-charcoal-light border border-gold/30 p-8 md:p-12 max-w-xl w-full text-center"
            >
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Wait! Before you go...</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">GET OUR FREE <span className="italic text-gold">FILMMAKING GUIDE</span></h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Download our "Cinematic Checklist" used by professional directors to ensure every shot is perfect.
              </p>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors text-center"
                />
                <button className="bg-gold text-charcoal px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                  Download PDF <Download size={18} />
                </button>
              </div>
              <p className="text-[10px] text-white/30 mt-6 uppercase tracking-widest">No spam. Just pure cinematic value.</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
