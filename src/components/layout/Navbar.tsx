'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Memberships', href: '#memberships' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      // Use a more robust detection: check which section occupies the top-middle of the viewport
      for (const section of sections.slice().reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < 300) { // Increased threshold for better detection
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 80;
      
      const wasOpen = isOpen;
      setIsOpen(false);

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, wasOpen ? 300 : 0);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-24',
        scrolled ? 'py-4 backdrop-blur-xl border-b border-black/5' : 'py-8 bg-transparent'
      )}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white flex items-center justify-center">
            <img src="/logo.jpg" alt="Sculpture Fitness Logo" className="w-full h-full object-cover" />
          </div>
          <span className={cn(
            "text-xl font-black tracking-tighter uppercase transition-colors",
            scrolled ? "text-foreground" : "text-foreground"
          )}>
            Sculpture <span className="text-primary">Fitness</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                'text-xs font-bold uppercase tracking-widest transition-all hover:text-primary relative py-1',
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground/70'
              )}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105",
              scrolled ? "bg-dark text-white hover:bg-primary" : "bg-dark text-white hover:bg-primary"
            )}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-black/5 flex flex-col p-8 gap-6 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  'text-lg font-black uppercase tracking-tighter border-b border-black/5 pb-2',
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground/70'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-primary text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest text-sm"
            >
              Join Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
