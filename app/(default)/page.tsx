export const metadata = {
  title: "Home - SafeWorkAI",
  description: "AI-Powered Safety for Industrial Worksites",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
    </>
  );
}
