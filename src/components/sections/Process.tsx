'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Book Your Free Tour', description: 'See the space and meet our team.' },
  { step: '02', title: 'Meet With A Coach', description: 'Discuss your goals and current level.' },
  { step: '03', title: 'Start Your Personalized Plan', description: 'Get a program built for you.' },
  { step: '04', title: 'Become Your Strongest Self', description: 'Achieve the results you deserve.' },
];

export default function Process() {
  return (
    <section className="bg-muted section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            Getting Started <span className="text-primary">Is Easy</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left group"
              >
                <div className="w-16 h-16 rounded-2xl bg-dark border-2 border-white/10 flex items-center justify-center text-2xl font-black text-primary mb-6 group-hover:border-primary transition-colors group-hover:scale-110 duration-300">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] lg:max-w-none">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
