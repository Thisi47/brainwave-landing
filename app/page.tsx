import { HeroSection } from "@/src/features/hero/HeroSection";
import { Services } from "@/src/features/services/Services";
import { Testimonial } from "@/src/features/testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Testimonial />
    </main>
  );
}
