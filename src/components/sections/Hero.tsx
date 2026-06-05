'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 lg:pt-48 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/50 border border-black/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              #1 In Training Now!
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.85] uppercase">
              Step up Your <br />
              <span className="text-primary italic">Gym Challenge</span> <br />
              With us
            </h1>
            
            <div className="flex gap-12 mb-12">
              <div className="flex flex-col">
                <span className="text-3xl font-black italic">973+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Members Joined</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black italic">140+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Expert Coaches</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black italic">50+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Fitness Programs</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button size="xl" asChild className="bg-dark text-white hover:bg-primary px-10">
                <Link href="#contact">Join Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Arch shaped background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 rounded-t-full -z-10" />
            
            {/* The main image in an arch placeholder */}
            <div className="arch-image relative overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center bg-muted">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Fitness Image Placeholder</span>
              
              {/* Floating Stat Card */}
              <div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 translate-x-1/4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                   <div className="w-3 h-3 bg-primary rounded-sm" />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-muted-foreground uppercase">Calories Burned</p>
                   <p className="text-lg font-black italic leading-none">252 Kcal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
