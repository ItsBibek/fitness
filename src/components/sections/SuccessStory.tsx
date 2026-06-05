'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function SuccessStory() {
  return (
    <section className="bg-dark section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-8 md:p-16 rounded-[40px] border border-white/5 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {/* Placeholder for Before/After images */}
                <div className="aspect-[3/4] rounded-2xl bg-muted overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-dark/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Before</div>
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-50" />
                </div>
                <div className="aspect-[3/4] rounded-2xl bg-muted overflow-hidden relative border-2 border-primary">
                  <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">After</div>
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight uppercase">
                  Transformation Starts With <br />
                  <span className="text-primary italic">One Decision</span>
                </h2>
                <p className="text-xl font-bold mb-6 text-foreground/90 leading-relaxed italic">
                  &quot;When Sarah joined Sculpture Fitness she lacked confidence and struggled with consistency. Six months later she had lost 28 pounds, gained strength, and completely transformed her lifestyle.&quot;
                </p>
                <div className="flex items-center gap-6 mb-10">
                  <div className="flex flex-col">
                    <span className="text-primary text-3xl font-black">-28lbs</span>
                    <span className="text-muted-foreground text-xs uppercase font-bold tracking-widest">Weight Lost</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-primary text-3xl font-black">6 Months</span>
                    <span className="text-muted-foreground text-xs uppercase font-bold tracking-widest">Timeframe</span>
                  </div>
                </div>
                <Button size="lg" href="/success-stories">
                  View More Stories
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
