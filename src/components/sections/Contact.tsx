'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="bg-background section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-dark text-white rounded-[60px] p-12 md:p-24 relative overflow-hidden">
          {/* Decorative background text */}
          <div className="absolute top-0 right-0 text-[200px] font-black text-white/5 uppercase tracking-tighter leading-none select-none translate-x-1/4 -translate-y-1/4">
            GO TO <br /> GYM
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">
                Ready to <br />
                <span className="text-primary italic">Transform?</span>
              </h2>
              <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-12">
                Those who do not find time for exercise will have to find time for illness!
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg font-black italic">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-black italic">hello@sculpturefitness.com</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <form className="bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-xl" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-6">
                  <input 
                    type="text" 
                    placeholder="ENTER YOUR NAME" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary transition-all placeholder:text-white/30"
                  />
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary transition-all placeholder:text-white/30"
                  />
                  <select className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary transition-all text-white/30 appearance-none">
                    <option className="bg-dark">FREE TRIAL SESSION</option>
                    <option className="bg-dark">CONSULTATION</option>
                  </select>
                  <Button size="xl" className="w-full mt-4 bg-primary text-white hover:bg-white hover:text-dark transition-all group">
                    Get Listed
                    <Send className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
