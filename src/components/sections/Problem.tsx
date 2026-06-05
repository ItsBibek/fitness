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
          <div className="w-1/3 aspect-[2/3] arch-image bg-dark overflow-hidden relative border-4 border-white shadow-xl bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')] bg-cover bg-center">
             <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="w-1/3 aspect-[2/3] arch-image bg-primary overflow-hidden relative translate-y-12 border-4 border-white shadow-xl bg-[url('https://images.unsplash.com/photo-1577221084712-56ceb57e9c77?auto=format&fit=crop&q=80')] bg-cover bg-center">
             <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="w-1/3 aspect-[2/3] arch-image bg-dark overflow-hidden relative border-4 border-white shadow-xl bg-[url('https://images.unsplash.com/photo-1570306656076-e620505cf895?auto=format&fit=crop&q=80')] bg-cover bg-center">
             <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
