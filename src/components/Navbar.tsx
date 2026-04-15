import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Work', href: '/portfolio' },
  { name: 'Academy', href: '/academy' },
  { name: 'Behind the Lens', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-40 transition-all duration-500 h-[80px] flex items-center border-b border-white/5',
        isScrolled ? 'bg-charcoal/90 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="w-full px-[60px] flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-[2px] uppercase text-gold">
          Cornerstone
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-[13px] uppercase tracking-[1px] transition-all hover:opacity-100',
                location.pathname === link.href ? 'opacity-100 border-b border-gold pb-1' : 'opacity-70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/academy"
            className="border border-gold text-gold px-5 py-2 text-[12px] uppercase tracking-[1px] hover:bg-gold hover:text-charcoal transition-all"
          >
            Start Learning Free &rarr;
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-charcoal border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-white/80 hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/academy"
                onClick={() => setIsOpen(false)}
                className="bg-gold text-charcoal px-6 py-4 text-center text-sm font-bold uppercase tracking-widest"
              >
                Start Learning Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
