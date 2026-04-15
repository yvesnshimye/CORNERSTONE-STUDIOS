import { motion } from 'motion/react';
import { Award, Target, Heart, Zap } from 'lucide-react';

const team = [
  { name: 'Jean-Luc Habimana', role: 'Founder & Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sarah Uwase', role: 'Head of Cinematography', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
  { name: 'David Mugisha', role: 'Senior Editor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Alice Keza', role: 'Production Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
];

const awards = [
  { year: '2023', title: 'Best Short Film', festival: 'Kigali International Film Festival' },
  { year: '2022', title: 'Excellence in Cinematography', festival: 'African Film Awards' },
  { year: '2021', title: 'Best Commercial Campaign', festival: 'Marketing Excellence Awards' },
  { year: '2020', title: 'Documentary of the Year', festival: 'East Africa Media Fest' },
];

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold/20 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio Story" 
                className="w-full aspect-[4/5] object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-gold p-12 hidden md:block">
                <span className="text-charcoal font-serif text-6xl font-bold">06</span>
                <p className="text-charcoal text-[10px] font-bold uppercase tracking-widest mt-2">Years of Excellence</p>
              </div>
            </div>
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">CRAFTING <span className="italic text-gold">LEGACIES</span> THROUGH FILM.</h1>
              <p className="text-white/60 mb-8 leading-relaxed text-lg">
                Founded in 2018, Cornerstone Studios began with a simple mission: to tell authentic African stories with world-class cinematic quality. What started as a small collective of passionate filmmakers has grown into Rwanda's leading cinematic powerhouse.
              </p>
              <p className="text-white/60 mb-12 leading-relaxed">
                We believe that every frame should be a masterpiece and every story should be built to last. Our studio is more than just a production house; it's a hub for innovation, education, and artistic expression.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <Target className="text-gold" size={32} />
                  <h4 className="font-serif text-xl">Our Mission</h4>
                  <p className="text-xs text-white/40 leading-relaxed">To elevate African storytelling to the global stage through uncompromising quality.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <Zap className="text-gold" size={32} />
                  <h4 className="font-serif text-xl">Our Vision</h4>
                  <p className="text-xs text-white/40 leading-relaxed">To become the cornerstone of the next generation of world-class filmmakers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Shelf */}
        <section className="mb-32 py-24 border-y border-white/5">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Recognition</span>
            <h2 className="text-4xl md:text-5xl font-serif">AWARDS & <span className="italic text-gold">HONORS</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-charcoal-light p-8 border border-white/5 text-center group hover:border-gold transition-colors">
                <Award className="mx-auto mb-6 text-white/20 group-hover:text-gold transition-colors" size={40} />
                <span className="text-gold font-mono text-sm mb-2 block">{award.year}</span>
                <h4 className="font-serif text-lg mb-2">{award.title}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{award.festival}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">The Collective</span>
              <h2 className="text-4xl md:text-5xl font-serif">MEET THE <span className="italic text-gold">TEAM</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-serif text-xl mb-1">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
