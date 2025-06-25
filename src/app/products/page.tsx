"use client";
import ProductPage from "./ProductPage";
import { products } from "@/data/mock-data";
import { useCart } from "@/context/CartContext";

export default function ProductsPage() {
  const { addToCart } = useCart();

  return <ProductPage products={products} addToCart={addToCart} />;
}
