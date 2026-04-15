import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'hire' | 'learn'>('hire');

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">LET'S <span className="italic text-gold">CONNECT</span></h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-12">
              <div>
                <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-6">Location</h4>
                <div className="flex gap-4">
                  <MapPin className="text-white/40 shrink-0" size={20} />
                  <p className="text-white/60 text-sm leading-relaxed">
                    Nyarutarama, KG 9 Ave<br />
                    Kigali, Rwanda
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-6">Contact</h4>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <Mail className="text-white/40" size={20} />
                    <a href="mailto:hello@cornerstonestudios.rw" className="text-white/60 text-sm hover:text-gold transition-colors">hello@cornerstonestudios.rw</a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Phone className="text-white/40" size={20} />
                    <a href="tel:+250788000000" className="text-white/60 text-sm hover:text-gold transition-colors">+250 788 000 000</a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-6">Follow Us</h4>
                <div className="flex gap-6">
                  <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={24} /></a>
                  <a href="#" className="text-white/40 hover:text-gold transition-colors"><Youtube size={24} /></a>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-white/30 leading-relaxed">
                  Available for worldwide commissions.<br />
                  Office hours: Mon - Fri, 9am - 6pm CAT.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-charcoal-light border border-white/5 p-8 md:p-12">
              <div className="flex gap-8 mb-12 border-b border-white/5 pb-6">
                <button 
                  onClick={() => setActiveTab('hire')}
                  className={cn(
                    "text-xs uppercase tracking-widest font-bold transition-all relative",
                    activeTab === 'hire' ? "text-gold" : "text-white/40 hover:text-white"
                  )}
                >
                  Hire the Studio
                  {activeTab === 'hire' && <motion.div layoutId="tab" className="absolute -bottom-[25px] left-0 w-full h-0.5 bg-gold" />}
                </button>
                <button 
                  onClick={() => setActiveTab('learn')}
                  className={cn(
                    "text-xs uppercase tracking-widest font-bold transition-all relative",
                    activeTab === 'learn' ? "text-gold" : "text-white/40 hover:text-white"
                  )}
                >
                  Join the Academy
                  {activeTab === 'learn' && <motion.div layoutId="tab" className="absolute -bottom-[25px] left-0 w-full h-0.5 bg-gold" />}
                </button>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {activeTab === 'hire' ? (
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Project Type</label>
                    <select className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors appearance-none text-white/60">
                      <option>Commercial Production</option>
                      <option>Branded Content</option>
                      <option>Event Coverage</option>
                      <option>Post-Production</option>
                      <option>Other</option>
                    </select>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Course of Interest</label>
                    <select className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors appearance-none text-white/60">
                      <option>Cinematic Lighting Masterclass</option>
                      <option>The Art of Visual Storytelling</option>
                      <option>Directing for the Big Screen</option>
                      <option>Post-Production Workflow</option>
                      <option>Free Mini-Course</option>
                    </select>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Your Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your project or goals..."
                  />
                </div>

                <button className="w-full bg-gold text-charcoal py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
