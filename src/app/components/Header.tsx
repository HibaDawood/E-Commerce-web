"use client";
import { GiClothes } from "react-icons/gi";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(
        cart.reduce((totala: number, item: any) => totala + item.quantity, 0)
      );
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);

    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-myPurple text-myWhite p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex text-2xl font-bold gap-2">
          <span className="text-4xl">
            <GiClothes />
          </span>
          Chengs Collections
        </Link>

        {/* Hamburger menu for sm and md screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-myYellow focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Regular menu for lg screens */}
        <ul className="hidden md:flex space-x-6 text-lg font-bold">
          <li>
            <Link href="/" className="hover:text-myPink">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-myPink">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-myPink">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-myPink">
              Products
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-myPink flex items-center">
              <ShoppingCart size={20} className="mr-1" />
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="/"
                className="block hover:text-myPink"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-myPink"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block hover:text-myPink"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block hover:text-myPink"
                onClick={toggleMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className=" hover:text-myPink flex items-center"
                onClick={toggleMobileMenu}
              >
                <ShoppingCart size={20} className="mr-1" />
                Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
