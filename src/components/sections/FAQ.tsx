'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Do I need fitness experience?', a: 'Not at all! Most of our members start with little to no experience. We meet you where you are and guide you every step of the way.' },
  { q: 'Are beginners welcome?', a: 'Absolutely. We pride ourselves on being a welcoming environment for everyone, especially those just starting their journey.' },
  { q: 'Do you offer personal training?', a: 'Yes, we offer elite 1-on-1 personal training for those who want maximum accountability and faster results.' },
  { q: 'How often should I train?', a: 'We typically recommend 3-4 sessions per week for optimal results, but we can customize a plan based on your schedule.' },
  { q: 'Can I try the gym before joining?', a: 'Yes! We offer a free trial session so you can experience our coaching and community firsthand.' },
  { q: 'What should I bring to my first visit?', a: 'Just comfortable workout clothes, a water bottle, and a positive attitude. We provide everything else!' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-muted section-padding overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
            Frequently <span className="text-primary italic">Asked Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-dark/40 rounded-2xl border border-white/5 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold">{faq.q}</span>
                {openIndex === index ? <Minus className="text-primary" /> : <Plus />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-muted-foreground border-t border-white/5 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
