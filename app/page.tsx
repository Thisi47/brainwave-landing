import { HeroSection } from "@/src/features/hero/HeroSection";
import { Services } from "@/src/features/services/Services";
import { Story } from "@/src/features/story/Story";
import { Testimonial } from "@/src/features/testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Testimonial />
      <Story />
    </main>
  );
}
