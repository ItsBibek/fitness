import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  image,
  className
}: TestimonialProps) {
  return (
    <div className={cn("max-w-80 bg-dark text-white rounded-[40px] overflow-hidden group", className)}>
      <div className="relative -mt-px overflow-hidden rounded-[40px]">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="h-[270px] w-full rounded-[40px] group-hover:scale-105 transition-all duration-300 object-cover object-top opacity-60 group-hover:opacity-80" 
          />
        ) : (
          <div className="h-[270px] w-full bg-primary/20 flex items-center justify-center rounded-[40px]">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Member Photo</span>
          </div>
        )}
        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-dark to-transparent"></div>
      </div>
      <div className="px-8 pb-10">
        <p className="font-bold border-b border-white/10 pb-6 italic text-lg leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-6 flex justify-between items-end">
          <div>
            <p className="font-black uppercase tracking-tighter text-xl italic">{name}</p>
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mt-1">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
