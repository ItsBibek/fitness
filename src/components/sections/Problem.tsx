'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const points = [
  'We have professional trainer',
  'Free join community',
  '1 free program for new members',
];

export default function Problem() {
  return (
    <section id="about" className="bg-background section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
            Why <br />
            <span className="text-primary italic">Join us?</span>
          </h2>
          <p className="text-muted-foreground text-sm font-bold mb-10 max-w-md leading-relaxed">
            we hav experience serving members in helping body fitness, and under the guidance of aprofessional trainer
          </p>

          <div className="flex flex-col gap-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border border-primary flex items-center justify-center text-primary">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 flex gap-4">
          <div className="w-1/3 aspect-[2/3] arch-image bg-dark overflow-hidden relative flex items-center justify-center border-4 border-white shadow-xl">
             <span className="text-[8px] font-black uppercase tracking-widest text-white/30 text-center px-2">Gym Placeholder</span>
          </div>
          <div className="w-1/3 aspect-[2/3] arch-image bg-primary overflow-hidden relative translate-y-12 flex items-center justify-center border-4 border-white shadow-xl">
             <span className="text-[8px] font-black uppercase tracking-widest text-white/50 text-center px-2">Training Placeholder</span>
          </div>
          <div className="w-1/3 aspect-[2/3] arch-image bg-dark overflow-hidden relative flex items-center justify-center border-4 border-white shadow-xl">
             <span className="text-[8px] font-black uppercase tracking-widest text-white/30 text-center px-2">Coach Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
