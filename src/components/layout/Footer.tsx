import React from 'react';
import Link from 'next/image';
import { Globe, MessageSquare, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-black/5 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-black uppercase tracking-tighter">
            SCULPTURE <span className="text-primary">FITNESS</span>
          </span>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Sculpture Fitness. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <Globe size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <MessageSquare size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <Share2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
