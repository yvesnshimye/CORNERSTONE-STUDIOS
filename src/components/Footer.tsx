import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-[2px] uppercase text-gold mb-6 block">
            Cornerstone
          </Link>
          <p className="text-text-dim text-sm leading-relaxed mb-8 max-w-xs">
            "Where stories are built to last." We are a cinematic powerhouse dedicated to the art of visual storytelling and the next generation of filmmakers.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Our Work</Link></li>
            <li><Link to="/academy" className="hover:text-gold transition-colors">Academy</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Behind the Lens</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Newsletter</h4>
          <p className="text-white/50 text-sm mb-6">Join 5,000+ filmmakers receiving our weekly production tips.</p>
          <form className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
        <p>© 2024 Cornerstone Studios. All Rights Reserved.</p>
        <p>Crafted with precision in Rwanda</p>
      </div>
    </footer>
  );
}
