'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Zap, Heart, Target } from 'lucide-react';
import Link from 'next/link';

const services = [
  { 
    title: 'Weight Loss Program', 
    icon: Zap, 
    description: 'Burn fat, build habits, and get lean without crash dieting.' 
  },
  { 
    title: 'Muscle Building Program', 
    icon: Dumbbell, 
    description: 'Structured strength training to build lean, visible muscle.' 
  },
  { 
    title: 'Personal Training', 
    icon: Target, 
    description: '1-on-1 coaching for maximum accountability and faster results.' 
  },
  { 
    title: 'Group Classes', 
    icon: Heart, 
    description: 'High-energy sessions that keep you motivated and consistent.' 
  },
  { 
    title: 'Nutrition Coaching', 
    icon: Dumbbell, 
    description: 'Simple, practical eating plans that support your goal.' 
  },
];

export default function Services() {
  return (
    <section id="programs" className="bg-muted section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              Training Options <br />
              <span className="text-primary italic">Designed for Real Results</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-muted-foreground text-xs font-bold leading-relaxed">
              Whatever your goal—losing fat, building muscle, or staying motivated—we have a program designed to get you real results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[40px] flex flex-col items-center text-center group hover:bg-primary transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary group-hover:text-foreground transition-colors" size={32} />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase italic tracking-tighter group-hover:text-white transition-colors">
                {service.title}
              </h4>
              <p className="text-[10px] font-bold text-muted-foreground mb-8 group-hover:text-white/80 transition-colors leading-relaxed">
                {service.description}
              </p>
              <Link 
                href="#contact" 
                className="text-[10px] font-black uppercase tracking-widest border-b-2 border-primary group-hover:border-white group-hover:text-white transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
