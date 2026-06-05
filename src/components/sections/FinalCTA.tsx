'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-dark section-padding relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass border-2 border-white/5 p-12 md:p-20 rounded-[50px]"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight uppercase">
            Your Future Self <br />
            <span className="text-primary italic">Will Thank You</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            The hardest part is getting started. Take the first step today and discover what you&apos;re capable of.
          </p>
          <Button size="xl" asChild>
            <Link href="#contact">
              Start Your Free Trial
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
