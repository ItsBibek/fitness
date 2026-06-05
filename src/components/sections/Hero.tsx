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
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Transform Your Body <br />
              <span className="text-primary italic">Without Guesswork</span>
            </h1>
            
            <p className="text-lg font-bold text-foreground/80 mb-6 max-w-2xl leading-relaxed">
              Stop starting over. Stop wasting time on workouts that don't work.
            </p>
          
            
            <p className="text-lg font-black mb-10 italic text-foreground">
              You don't need more motivation. You need a system.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" asChild className="bg-dark text-white hover:bg-primary px-8">
                <Link href="#contact">Claim Your Free Trial</Link>
              </Button>
              <Button size="lg" asChild className="bg-dark text-white hover:bg-primary px-8">
                <Link href="#contact">Book a Free Gym Tour</Link>
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
            <div className="arch-image relative overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center bg-muted bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
