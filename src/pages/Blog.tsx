import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';

const posts = [
  { id: 1, title: 'Top 5 Cinematography Tips for Beginners', category: 'Tips', date: 'Oct 12, 2024', author: 'Jean-Luc Habimana', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800', readTime: '8 min' },
  { id: 2, title: 'The Best Budget Cameras for Indie Filmmakers', category: 'Gear', date: 'Oct 08, 2024', author: 'Sarah Uwase', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', readTime: '12 min' },
  { id: 3, title: 'Production Diary: Filming in the Volcanoes National Park', category: 'Diary', date: 'Sep 28, 2024', author: 'David Mugisha', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', readTime: '15 min' },
  { id: 4, title: 'How to Write a Compelling Short Film Script', category: 'Writing', date: 'Sep 15, 2024', author: 'Alice Keza', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800', readTime: '10 min' },
];

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Journal</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-4">BEHIND THE <span className="italic text-gold">LENS</span></h1>
            <p className="text-text-dim max-w-xl">Insights, tutorials, and stories from the front lines of cinematic production.</p>
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors pl-12"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
          </div>
        </header>

        {/* Featured Post */}
        <section className="mb-24 group cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5 overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Post" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                Featured Article
              </div>
            </div>
            <div className="bg-charcoal-light p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-white/40 mb-6">
                <span className="flex items-center gap-2"><Calendar size={12} /> Oct 15, 2024</span>
                <span className="flex items-center gap-2"><Clock size={12} /> 20 min read</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 group-hover:text-gold transition-colors leading-tight">
                The Future of African Cinema: A New Era of Storytelling
              </h2>
              <p className="text-white/60 mb-10 leading-relaxed">
                Explore how digital innovation and a new generation of filmmakers are reshaping the landscape of cinema across the continent, from Kigali to Lagos.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xs">JH</div>
                  <span className="text-xs font-bold uppercase tracking-widest">Jean-Luc Habimana</span>
                </div>
                <button className="text-gold flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <User size={12} /> {post.author}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center gap-4">
          <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-gold bg-white/5">1</button>
          <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-colors">2</button>
          <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-colors">3</button>
          <button className="px-6 border border-white/10 flex items-center justify-center text-xs uppercase tracking-widest text-white/40 hover:border-gold hover:text-gold transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
