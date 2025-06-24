"use client";

import LogoSection from "@/app/landing/LogoSection";
import DealsSection from "@/app/landing/DealsSection";
import CategorySection from "@/app/landing/CategorySection";
import TestimonialSection from "@/app/landing/TestimonialSection";
import FeaturesSection from "@/app/landing/FeaturesSection";
import CtaSection from "@/app/landing/CtaSection";
import StartSection from "@/app/landing/StartSection";
import { deals, categories } from "@/data/mock-data";
import { useCart } from "@/context/CartContext";

export default function HomePage() {
  const { addToCart } = useCart();

  return (
    <main className="flex-1">
      <StartSection />
      <LogoSection />
      <DealsSection deals={deals} addToCart={addToCart} />
      <CategorySection categories={categories} />
      <TestimonialSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
