import { motion } from 'motion/react';
import { Play, ArrowRight, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  { id: 1, title: 'The Last Horizon', category: 'Short Film', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Urban Rhythm', category: 'Commercial', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Echoes of Silence', category: 'Documentary', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Neon Nights', category: 'Music Video', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800' },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-grow flex flex-col pt-[140px] px-[60px] pb-[40px] z-10">
        <div className="max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold uppercase tracking-[4px] text-[12px] mb-5 block">
              ESTABLISHED 2014
            </span>
            <h1 className="text-[72px] font-serif font-normal text-white mb-[30px] leading-[1.1] drop-shadow-2xl">
              Where stories <span className="block italic text-white/90">are built to last.</span>
            </h1>
            <div className="flex gap-5 mb-[60px]">
              <Link
                to="/portfolio"
                className="bg-gold text-charcoal px-8 py-4 text-[14px] font-bold uppercase tracking-[1px] hover:bg-white transition-all"
              >
                Watch Reel
              </Link>
              <Link
                to="/academy"
                className="bg-white/5 border border-white/20 text-white px-8 py-4 text-[14px] uppercase tracking-[1px] backdrop-blur-md hover:bg-white/10 transition-all"
              >
                Explore Academy
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Featured Strip */}
        <div className="mt-auto grid grid-cols-1 md:grid-cols-4 gap-5 pb-10">
          <div className="bg-white/[0.03] border-l border-gold-muted p-5 h-[140px] flex flex-col justify-between">
            <h3 className="text-[11px] uppercase tracking-[1.5px] text-gold">Next Masterclass</h3>
            <p className="text-[14px] leading-[1.4] text-text-dim">The Art of Visual Tension</p>
            <span className="text-[10px] text-white/30 uppercase">Enrollment Ends in 2D : 14H</span>
          </div>
          <div className="bg-white/[0.03] border-l border-gold-muted p-5 h-[140px] flex flex-col justify-between">
            <h3 className="text-[11px] uppercase tracking-[1.5px] text-gold">Latest Project</h3>
            <p className="text-[14px] leading-[1.4] text-text-dim">Solitude (2024 Short Film)</p>
            <span className="text-[10px] text-white/30 uppercase">Official Selection • Sundance</span>
          </div>
          <div className="bg-white/[0.03] border-l border-gold-muted p-5 h-[140px] flex flex-col justify-between">
            <h3 className="text-[11px] uppercase tracking-[1.5px] text-gold">Academy Pro</h3>
            <p className="text-[14px] leading-[1.4] text-text-dim">Advanced Color Grading</p>
            <span className="text-[10px] text-white/30 uppercase">12 Modules • 4.9 Rating</span>
          </div>
          <div className="bg-white/[0.03] border-l border-gold-muted p-5 h-[140px] flex flex-col justify-between">
            <h3 className="text-[11px] uppercase tracking-[1.5px] text-gold">Free Resource</h3>
            <p className="text-[14px] leading-[1.4] text-text-dim">5-Day Filmmaking Crash Course</p>
            <span className="text-[10px] text-white/30 uppercase">42,000+ Students Enrolled</span>
          </div>
        </div>
      </section>

      {/* Social Proof Corner */}
      <div className="fixed bottom-10 right-[60px] text-right z-20 hidden lg:block">
        <div className="mb-2">
          <div className="font-serif text-[24px] text-gold">1.2M+</div>
          <div className="text-[10px] uppercase opacity-50 tracking-[1px]">GLOBAL VIEWS</div>
        </div>
        <div className="flex justify-end gap-2.5">
          <div className="w-10 h-10 border border-gold/30 rounded-full bg-[radial-gradient(circle,_var(--color-gold-muted),_transparent)]" />
          <div className="w-10 h-10 border border-gold/30 rounded-full bg-[radial-gradient(circle,_var(--color-gold-muted),_transparent)]" />
          <div className="w-10 h-10 border border-gold/30 rounded-full bg-[radial-gradient(circle,_var(--color-gold-muted),_transparent)]" />
        </div>
      </div>
    </div>
  );
}
