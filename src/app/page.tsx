"use client";

import { useState, useEffect } from "react";
import SiteFooter from "@/components/layout/site-footer";
import Header from "@/components/layout/site-header";
import ProductPage from "@/components/product-section";
import LandingPage from "@/components/landing-page";
import Cart from "@/components/renderCart-component";

const products = [
  {
    id: 1,
    name: "Project Management Pro",
    price: 99.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 2,
    name: "Code Editor Deluxe",
    price: 79.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 3,
    name: "Database Manager Ultimate",
    price: 149.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 4,
    name: "Cloud Storage Solution",
    price: 59.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 5,
    name: "Secure VPN Service",
    price: 39.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 6,
    name: "AI-Powered Analytics",
    price: 199.99,
    image: "https://via.placeholder.com/1000",
  },
];

const categories = [
  { name: "Marketing Tools", icon: "📈" },
  { name: "Design Software", icon: "🎨" },
  { name: "AI Solutions", icon: "🤖" },
  { name: "Project Management", icon: "📅" },
  { name: "Communication Tools", icon: "💬" },
  { name: "Analytics Platforms", icon: "📊" },
];

const deals = [
  {
    id: 7,
    name: "AI Assistant Pro",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://via.placeholder.com/1000",
    tag: "New Product",
  },
  {
    id: 8,
    name: "Cloud Sync Ultimate",
    price: 49.99,
    originalPrice: 89.99,
    image: "https://via.placeholder.com/1000",
    tag: "Deal of the Day",
  },
  {
    id: 9,
    name: "Marketing Automation Suite",
    price: 159.99,
    originalPrice: 249.99,
    image: "https://via.placeholder.com/1000",
    tag: "Monthly Special",
  },
  {
    id: 10,
    name: "Collaboration Platform",
    price: 29.99,
    originalPrice: 59.99,
    image: "https://via.placeholder.com/1000",
    tag: "New Deal",
  },
];

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function ECommerceApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // @ts-ignore
  const addToCart = (product) => {
    // @ts-ignore
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // @ts-ignore
      setCart(
        // @ts-ignore
        cart.map((item) =>
          // @ts-ignore
          item.id === product.id
            ? // @ts-ignore
              { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // @ts-ignore
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // @ts-ignore
  const removeFromCart = (productId) => {
    // @ts-ignore
    setCart(cart.filter((item) => item.id !== productId));
  };

  // @ts-ignore
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      // @ts-ignore
      removeFromCart(productId);
    } else {
      // @ts-ignore
      setCart(
        // @ts-ignore
        cart.map((item) =>
          // @ts-ignore
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // @ts-ignore
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  // @ts-ignore
  const totalPrice = cart.reduce(
    // @ts-ignore
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        setCurrentPage={setCurrentPage}
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      {currentPage === "landing" ? (
        <LandingPage
          setCurrentPage={setCurrentPage}
          addToCart={addToCart}
          deals={deals}
          categories={categories}
        />
      ) : (
        <ProductPage products={products} addToCart={addToCart} />
      )}
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
      />
      <SiteFooter />
    </div>
  );
}
