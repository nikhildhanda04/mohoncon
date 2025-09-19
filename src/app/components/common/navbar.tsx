'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`flex fixed flex-row px-6 md:px-16 lg:px-68 items-center w-full z-99 justify-between transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white shadow-md' 
          : 'py-8 bg-transparent'
      }`}>
        <Link 
        href="/"
        className="relative w-30 h-30">
          <Image
            src="/logo.webp"
            alt="Mohoncon"
            fill
            className="object-cover"
          />
        </Link>
        <div className="flex flex-row gap-8 lg:gap-16 items-center">
          <Link 
          href="/"
          className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200">Home</Link>
          <Link 
          href="/about-us"
          className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200">About Us</Link>
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <div className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200 cursor-pointer">
              Products
            </div>
            
            {/* Dropdown Menu */}
            {showProductsDropdown && (
              <div className="absolute flex flex-col top-full left-0 pt-2">
                <div className="bg-white shadow-lg flex flex-col rounded-lg py-2 min-w-48 z-10">
                  <Link 
                  href="/aac-block"
                  className="font-primary text-base px-4 py-2 hover:bg-gray-100 hover:text-primary transition-all duration-200 cursor-pointer">
                    AAC Blocks
                  </Link>
                  <Link 
                  href="/block-joining-mortar"
                  className="font-primary text-base px-4 py-2 hover:bg-gray-100 hover:text-primary transition-all duration-200 cursor-pointer">
                    Block Joining Mortar
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <div className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200">Sustainability</div>
          <Link 
          href="/contact"
          className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200">Contact</Link>
          <div className="font-primary text-lg lg:text-xl bg-primary text-white rounded-lg px-4 lg:px-6 py-3 lg:py-4 hover:bg-black transition-all duration-250">
            Download Brochure
          </div>
        </div>
      </div>
    </>
  );
}