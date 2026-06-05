'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/ui/testimonial';

const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    role: "Content Marketing",
    quote: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    role: "Fitness Enthusiast",
    quote: "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Professional Athlete",
    quote: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]"
          >
            Customer <br />
            <span className="text-primary italic">Testimonials</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xs font-bold uppercase tracking-widest max-w-[600px] mx-auto"
          >
            Hear what our users say about us. We&apos;re always looking for ways to
            improve. If you have a positive experience with us, leave a review.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard 
                name={t.name}
                role={t.role}
                quote={t.quote}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
