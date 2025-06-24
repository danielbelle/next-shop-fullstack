import LogoSection from "@/app/landing/components/LogoSection";
import DealsSection from "@/app/landing/components/DealsSection";
import CategorySection from "@/app/landing/components/CategorySection";
import TestimonialSection from "@/app/landing/components/TestimonialSection";
import FeaturesSection from "@/app/landing/components/FeaturesSection";
import CtaSection from "@/app/landing/components/CtaSection";
import StartSection from "@/app/landing/components/StartSection";
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
