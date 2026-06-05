'use client';

import React from 'react';
import { Pricing } from '@/components/ui/pricing';
import { Dumbbell, Users, Clock } from 'lucide-react';

const sculptureFitnessPlans = [
  {
    name: "SINGLE MEMBERSHIP",
    price: "3500",
    yearlyPrice: "28000",
    period: "per month",
    features: [
      "Full access to Gym & Cardio equipment",
      "Personal locker available",
      "Access to all training zones",
      "Professional guidance",
      "Flexible workout hours (6 AM - 9 PM)",
      "Monthly progress tracking",
    ],
    description: "Perfect for individual fitness enthusiasts",
    buttonText: "Join Now",
    href: "#contact",
    isPopular: false,
    icon: <Dumbbell className="h-8 w-8" />,
  },
  {
    name: "GROUP 3+ MEMBERSHIP",
    price: "9000",
    yearlyPrice: "69000",
    period: "per month",
    features: [
      "Full access to Gym & Cardio equipment",
      "Group training sessions",
      "Dedicated group locker area",
      "Priority access to equipment",
      "Group fitness challenges",
      "Nutritional consultation",
      "Personalized group workouts",
    ],
    description: "Best value for families or friend groups (3+ people)",
    buttonText: "Get Started",
    href: "#contact",
    isPopular: true,
    icon: <Users className="h-8 w-8" />,
  },
  {
    name: "DAY MEMBERSHIP",
    price: "2500",
    yearlyPrice: "23000",
    period: "per month",
    features: [
      "Access between 11 AM - 4 PM only",
      "Full gym & cardio equipment",
      "Shared locker facilities",
      "Basic orientation session",
      "Ideal for students/homemakers",
      "Budget-friendly option",
    ],
    description: "Affordable fitness for daytime warriors",
    buttonText: "Start Today",
    href: "#contact",
    isPopular: false,
    icon: <Clock className="h-8 w-8" />,
  },
];

export default function Memberships() {
  return (
    <section id="memberships" className="bg-muted section-padding overflow-hidden">
      <Pricing 
        plans={sculptureFitnessPlans}
        title="Sculpture Fitness Membership"
        description={"Transform Your Body, Transform Your Life\nPremium fitness facility with state-of-the-art equipment"}
      />
    </section>
  );
}
