import { Facts } from "@/src/features/facts/Facts";
import { HeroSection } from "@/src/features/hero/HeroSection";
import { Services } from "@/src/features/services/Services";
import { Story } from "@/src/features/story/Story";
import { Testimonial } from "@/src/features/testimonial/Testimonial";
import { WhyChooseUs } from "@/src/features/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="flex flex-col items-center w-11/12">
        <Services />
        <Testimonial />
        <Story />
        <Facts />
        <WhyChooseUs />
      </div>
    </main>
  );
}
