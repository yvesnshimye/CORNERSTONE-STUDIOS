import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, BookOpen, Clock, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const courses = [
  { id: 1, title: 'Cinematic Lighting Masterclass', instructor: 'Jean-Luc Habimana', price: '$199', duration: '12 Hours', level: 'Advanced', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800', rating: 4.9 },
  { id: 2, title: 'The Art of Visual Storytelling', instructor: 'Sarah Uwase', price: 'Free', duration: '4 Hours', level: 'Beginner', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800', rating: 4.8 },
  { id: 3, title: 'Directing for the Big Screen', instructor: 'David Mugisha', price: '$249', duration: '20 Hours', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800', rating: 5.0 },
  { id: 4, title: 'Post-Production Workflow', instructor: 'Alice Keza', price: '$149', duration: '15 Hours', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800', rating: 4.7 },
];

export default function Academy() {
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero / Lead Magnet */}
        <section className="bg-charcoal-light border border-white/5 p-8 md:p-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 inline-block">Free Mini-Course</span>
              <h1 className="text-4xl md:text-6xl font-serif mb-6">5-DAY FILMMAKING <span className="italic text-gold">CRASH COURSE</span></h1>
              <p className="text-text-dim mb-8 leading-relaxed">
                Learn the fundamentals of cinematography, lighting, and storytelling in just 5 days. Delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button className="bg-gold text-charcoal px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Get Access Now
                </button>
              </form>
              <p className="text-[10px] text-white/30 mt-4 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 size={12} /> Join 12,000+ aspiring filmmakers
              </p>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
                alt="Filmmaking Course" 
                className="w-full h-[400px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-charcoal p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-gold fill-current" />)}
                  </div>
                  <span className="text-white font-bold text-lg">4.9/5</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Banner */}
        <div className="bg-gold text-charcoal py-4 px-8 mb-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Clock size={20} />
            <span className="font-bold uppercase tracking-widest text-sm">Flash Sale: 50% Off All Masterclasses</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 font-mono text-xl font-bold">
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[8px] uppercase">Hrs</span>
              </div>
              <span>:</span>
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[8px] uppercase">Min</span>
              </div>
              <span>:</span>
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[8px] uppercase">Sec</span>
              </div>
            </div>
            <button className="bg-charcoal text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-colors">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="mb-12 flex justify-between items-end">
          <h2 className="text-3xl font-serif">Masterclasses</h2>
          <div className="flex gap-4">
             <button className="text-xs uppercase tracking-widest text-gold border-b border-gold pb-1">All Topics</button>
             <button className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors pb-1">Directing</button>
             <button className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors pb-1">Cinematography</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -10 }}
              className="bg-charcoal-light border border-white/5 overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                  {course.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-3">
                  <BookOpen size={12} /> {course.duration} • {course.level}
                </div>
                <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{course.title}</h3>
                <p className="text-xs text-white/50 mb-6">by {course.instructor}</p>
                <button className="w-full border border-white/10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all flex items-center justify-center gap-2">
                  View Course <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
