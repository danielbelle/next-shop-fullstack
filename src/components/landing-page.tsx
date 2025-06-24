import LogoSection from "@/components/landing/LogoSection";
import DealsSection from "@/components/landing/DealsSection";
import CategorySection from "@/components/landing/CategorySection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CtaSection from "@/components/landing/CtaSection";
import StartSection from "@/components/landing/StartSection";
import { Deal, Category, Product } from "@/data/mock-data";

type LandingPageProps = {
  setCurrentPage: (page: "landing" | "products") => void;
  addToCart: (product: Product) => void;
  deals: Deal[];
  categories: Category[];
};

export default function LandingPage({
  setCurrentPage,
  addToCart,
  deals,
  categories,
}: LandingPageProps) {
  return (
    <main className="flex-1">
      <StartSection setCurrentPage={setCurrentPage} />
      <LogoSection />
      <DealsSection deals={deals} addToCart={addToCart} />
      <CategorySection categories={categories} />
      <TestimonialSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
