'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Zap, Heart, TrendingUp, ShieldCheck, Accessibility, Users2, Target } from 'lucide-react';

const benefits = [
  { title: 'More Strength', icon: Dumbbell },
  { title: 'Increased Energy', icon: Zap },
  { title: 'Better Confidence', icon: Target },
  { title: 'Sustainable Weight Loss', icon: TrendingUp },
  { title: 'Improved Health', icon: Heart },
  { title: 'Greater Mobility', icon: Accessibility },
  { title: 'Accountability', icon: ShieldCheck },
  { title: 'Supportive Community', icon: Users2 },
];

const stats = [
  { label: 'Members Helped', value: '500+' },
  { label: 'Workouts Completed', value: '10,000+' },
  { label: 'Member Satisfaction', value: '95%' },
];

export default function Benefits() {
  return (
    <section className="bg-dark section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            What You&apos;ll <span className="text-primary">Gain</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <benefit.icon size={24} />
              </div>
              <p className="font-bold text-sm uppercase tracking-wider">{benefit.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-10 glass rounded-3xl border-b-4 border-primary"
            >
              <h3 className="text-5xl md:text-6xl font-black text-primary mb-2 italic">{stat.value}</h3>
              <p className="text-muted-foreground uppercase font-bold tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
