import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Services from '@/components/sections/Services';
import Solution from '@/components/sections/Solution';
import Testimonials from '@/components/sections/Testimonials';
import Memberships from '@/components/sections/Memberships';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Hero />
      <Problem />
      <Services />
      <Solution />
      <Testimonials />
      <Memberships />
      <Contact />
    </div>
  );
}
