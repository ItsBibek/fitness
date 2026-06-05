'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const programs = [
  {
    type: 'Gym',
    title: 'Muscles And Body Shape',
    desc: 'for some men, muscles are the most important to show how great a man is. then for women muscles make their bodies ideal',
    color: 'bg-muted',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
  },
  {
    type: 'Yoga',
    title: 'Movement And Therapy',
    desc: 'for some men, muscles are the most important to show how great a man is. then for women muscles make their bodies ideal',
    color: 'bg-primary/10',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80'
  },
  {
    type: 'Boxing',
    title: 'Strength And Resistance',
    desc: 'for some men, muscles are the most important to show how great a man is. then for women muscles make their bodies ideal',
    color: 'bg-muted',
    image: 'https://images.unsplash.com/photo-1570306656076-e620505cf895?auto=format&fit=crop&q=80'
  }
];

export default function Solution() {
  return (
    <section className="bg-muted section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-8">
           <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
             Make you Grow <br />
             With Our <span className="text-primary italic">Program</span>
           </h2>
           <div className="text-7xl lg:text-9xl font-black text-black/5 uppercase tracking-widest select-none">
             Programs
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className={`arch-image relative overflow-hidden mb-8 border-4 border-white shadow-xl flex items-center justify-center ${p.color}`} style={{backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                 <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">{p.type}</p>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic leading-tight">{p.title}</h4>
              <p className="text-muted-foreground text-[10px] font-bold leading-relaxed mb-6 max-w-[250px]">
                {p.desc}
              </p>
              <Link href="#contact" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-primary group-hover:bg-primary group-hover:text-white group-hover:px-4 group-hover:py-1 transition-all">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
