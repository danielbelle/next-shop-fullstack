"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ShoppingCartIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const SiteHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    // addToCart, removeFromCart, updateQuantity (se quiser usar no header)
  } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Easy UI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/products"
            >
              Products
            </Link>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/#categories-section"
            >
              Categories
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/#deals"
            >
              Deals
            </a>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/about"
            >
              About
            </Link>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
            <div className="fixed left-0 top-0 bottom-0 w-full max-w-xs p-6 bg-background shadow-lg">
              <div className="flex flex-col space-y-4">
                <Link
                  className="text-sm font-medium text-primary"
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <a
                  className="text-sm font-medium text-primary"
                  href="/#categories-section"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </a>
                <a
                  className="text-sm font-medium text-primary"
                  href="/#deals"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Deals
                </a>
                <Link
                  className="text-sm font-medium text-primary"
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </div>
              <button
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button
              variant="ghost"
              className="mr-6 text-base hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Button>
          </nav>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div>
              <Button
                variant="outline"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCartIcon className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
