"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star, Dumbbell, Users, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  icon?: React.ReactNode;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Choose Your Membership Plan",
  description = "Transform your body at Sculpture Fitness\nAll plans include access to premium equipment and expert guidance",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "#CB4B31",
          "#1A1A1A",
          "#E6E1D3",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20 mx-auto px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
          {title.split(' ').slice(0, -1).join(' ')} <br />
          <span className="text-primary italic">{title.split(' ').slice(-1)}</span>
        </h2>
        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-16">
        <span className={cn("text-xs font-bold uppercase tracking-widest transition-colors", isMonthly ? "text-primary" : "text-muted-foreground")}>Monthly</span>
        <Label className="relative inline-flex items-center cursor-pointer">
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative data-[state=checked]:bg-primary"
          />
        </Label>
        <span className={cn("text-xs font-bold uppercase tracking-widest transition-colors", !isMonthly ? "text-primary" : "text-muted-foreground")}>
          Annual billing <span className="text-primary-foreground bg-primary px-2 py-0.5 rounded-full text-[8px] ml-1">Save Big!</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.2,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-[40px] border-[1px] p-10 bg-card text-center relative transition-all duration-500`,
              plan.isPopular ? "border-primary border-2 shadow-2xl shadow-primary/10" : "border-black/5 shadow-xl",
              "flex flex-col",
              !plan.isPopular && "mt-5",
              isDesktop && (index === 0 || index === 2
                ? "z-0"
                : "z-10"),
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-primary py-1 px-4 rounded-bl-[20px] rounded-tr-[40px] flex items-center gap-2">
                <Star className="text-white h-3 w-3 fill-current" />
                <span className="text-white text-[10px] font-black uppercase tracking-widest">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-primary shadow-inner">
                  {plan.icon || <Dumbbell className="h-8 w-8" />}
                </div>
              </div>
              <p className="text-2xl font-black uppercase tracking-tighter italic mb-4">
                {plan.name}
              </p>
              <div className="mt-2 flex items-center justify-center gap-x-2">
                <span className="text-6xl font-black italic tracking-tight text-primary">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice) / 12
                    }
                    format={{
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-4">
                  / month
                </span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">
                {isMonthly ? "billed monthly" : `billed annually (₹${plan.yearlyPrice}/yr)`}
              </p>

              <ul className="mt-8 gap-4 flex flex-col mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary stroke-[4]" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full h-14 rounded-full overflow-hidden text-sm font-black uppercase tracking-widest",
                  "transition-all duration-300 ease-out border-2",
                  plan.isPopular
                    ? "bg-primary border-primary text-white hover:bg-dark hover:border-dark"
                    : "bg-transparent border-dark text-dark hover:bg-dark hover:text-white"
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-relaxed">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-24 pt-12 border-t border-black/5 text-center space-y-6">
        <div className="flex flex-wrap justify-center gap-12">
           <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Locker Rental</span>
              <span className="text-2xl font-black italic">₹400 / month</span>
           </div>
           <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Membership Hold</span>
              <span className="text-2xl font-black italic">₹500 / week</span>
           </div>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground pt-8">
          Opening Hours: 6:00 AM - 9:00 PM | Contact: 9846717702
        </p>
        <p className="text-[8px] font-bold text-muted-foreground/60 uppercase">
          * Membership cannot be refunded or transferred
        </p>
      </div>
    </div>
  );
}
