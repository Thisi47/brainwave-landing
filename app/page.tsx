import { CaseStudies } from "@/src/features/cases-studies/CaseStudies";
import { Cta } from "@/src/features/cta/Cta";
import { Facts } from "@/src/features/facts/Facts";
import { HeroSection } from "@/src/features/hero/HeroSection";
import { Services } from "@/src/features/services/Services";
import { Story } from "@/src/features/story/Story";
import { Testimonial } from "@/src/features/testimonial/Testimonial";
import { TestimonialEndPage } from "@/src/features/testimonial/TestimonialEndPage";
import { WhyChooseUs } from "@/src/features/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <div className="flex flex-col items-center mx-auto">
        <Services />
        <Testimonial />
        <Story />
        <Facts />
        <WhyChooseUs />
        <CaseStudies />
      </div>
      <TestimonialEndPage />
      <Cta />
    </main>
  );
}
