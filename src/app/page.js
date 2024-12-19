import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroScene";
import TestimonialCards from "@/components/Testimonials";
import Tutors from "@/components/Tutors";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.89] antialiased bg-grid-white/[0.02]">
     <HeroSection/>
     <Courses/>
     <TestimonialCards/>
     <Tutors/>
    
  </main>
  );
}
