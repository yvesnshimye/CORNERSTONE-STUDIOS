import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Filter } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'Shorts', 'Commercials', 'Documentaries', 'Music Videos'];

const projects = [
  { id: 1, title: 'The Last Horizon', category: 'Shorts', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Urban Rhythm', category: 'Commercials', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Echoes of Silence', category: 'Documentaries', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Neon Nights', category: 'Music Videos', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Mountain Call', category: 'Shorts', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Tech Future', category: 'Commercials', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Wild Heart', category: 'Documentaries', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Electric Soul', category: 'Music Videos', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">OUR <span className="italic text-gold">WORK</span></h1>
          
          <div className="flex flex-wrap items-center gap-4 border-b border-white/5 pb-8">
            <div className="flex items-center gap-2 text-text-dim/40 mr-4">
              <Filter size={16} />
              <span className="text-xs uppercase tracking-widest">Filter:</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-widest transition-all border",
                  activeCategory === cat 
                    ? "bg-gold border-gold text-charcoal font-bold" 
                    : "border-white/10 text-text-dim hover:border-white/30 hover:text-text-main"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-video overflow-hidden bg-charcoal-light cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Play className="text-white fill-current ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
