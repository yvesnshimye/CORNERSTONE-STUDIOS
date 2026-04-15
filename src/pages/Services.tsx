import { motion } from 'motion/react';
import { Camera, Film, Monitor, Share2, ArrowRight, Quote } from 'lucide-react';

const services = [
  { 
    id: 1, 
    title: 'Commercial Production', 
    icon: <Camera size={32} />, 
    description: 'High-impact visual content designed to elevate your brand and drive conversions.',
    features: ['TV Commercials', 'Social Media Ads', 'Product Showcases', 'Brand Anthems'],
    price: 'Starting at $2,500'
  },
  { 
    id: 2, 
    title: 'Branded Content', 
    icon: <Film size={32} />, 
    description: 'Story-driven content that connects with your audience on an emotional level.',
    features: ['Mini-Documentaries', 'Founder Stories', 'Corporate Culture', 'Event Aftermovies'],
    price: 'Starting at $1,800'
  },
  { 
    id: 3, 
    title: 'Post-Production', 
    icon: <Monitor size={32} />, 
    description: 'Professional editing, color grading, and sound design to bring your footage to life.',
    features: ['Advanced Color Grading', 'Sound Engineering', 'Motion Graphics', 'Visual Effects'],
    price: 'Starting at $800'
  },
  { 
    id: 4, 
    title: 'Event Coverage', 
    icon: <Share2 size={32} />, 
    description: 'Cinematic documentation of your most important moments and milestones.',
    features: ['Conferences', 'Product Launches', 'Gala Dinners', 'Live Streaming'],
    price: 'Starting at $1,200'
  },
];

const testimonials = [
  { name: 'David Kamanzi', company: 'Visit Rwanda', quote: 'Cornerstone Studios delivered a campaign that exceeded our wildest expectations. Their eye for detail is unmatched.' },
  { name: 'Linda Umutoni', company: 'I&M Bank', quote: 'Professional, creative, and reliable. They are our go-to partner for all high-end video production.' },
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">CINEMATIC <span className="italic text-gold">SOLUTIONS</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            From concept to final frame, we provide end-to-end production services tailored to your unique vision and business goals.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ scale: 1.02 }}
              className="bg-charcoal-light p-10 border border-white/5 group hover:border-gold transition-all"
            >
              <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">
                {service.icon}
              </div>
              <h3 className="text-3xl font-serif mb-6">{service.title}</h3>
              <p className="text-white/50 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-xs uppercase tracking-widest text-white/70 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <span className="text-gold font-mono text-sm">{service.price}</span>
                <button className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-gold transition-colors">
                  Request Quote <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <section className="bg-charcoal-light border border-white/5 p-12 md:p-20 relative overflow-hidden">
          <Quote className="absolute top-10 right-10 text-white/5" size={200} />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-16">WHAT OUR <span className="italic text-gold">PARTNERS</span> SAY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {testimonials.map((t, i) => (
                <div key={i}>
                  <p className="text-xl md:text-2xl font-serif italic text-white/80 mb-8 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex flex-col">
                    <span className="text-white font-bold uppercase tracking-widest text-xs">{t.name}</span>
                    <span className="text-gold uppercase tracking-widest text-[10px] mt-1">{t.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-32 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">READY TO START YOUR <br /> <span className="italic text-gold">NEXT STORY?</span></h2>
          <button className="bg-gold text-charcoal px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all">
            Book a Consultation
          </button>
        </section>
      </div>
    </div>
  );
}
