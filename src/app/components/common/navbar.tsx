'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileProductsDropdown, setShowMobileProductsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Type guard for HTMLElement
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
        setShowMobileProductsDropdown(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

 const toggleMobileMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowMobileProductsDropdown(false);
  };

  // const toggleMobileProductsDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowMobileProductsDropdown(!showMobileProductsDropdown);
  // };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowMobileProductsDropdown(false);
  };

  return (
    <>
      <div className={`flex fixed flex-row px-6 md:px-16 lg:px-68 items-center w-full z-99 justify-between transition-all duration-300 mobile-menu-container ${
        isScrolled
          ? 'py-2 z-99 bg-white shadow-md'
          : 'py-8 z-99 bg-transparent'
      }`}>
        
        {/* Logo */}
        <Link
          href="/"
          className="relative w-30 h-30 z-50">
          <Image
            src="/logo.webp"
            alt="Mohoncon"
            fill
            className="object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-8 lg:gap-16 items-center">
          <Link
            href="/"
            className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200">
            Home
          </Link>
          <Link
            href="/about-us"
            className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200">
            About Us
          </Link>
          
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
          
          <Link
            href="/sustanability"
            className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200">
            Sustainability
          </Link>
          <Link
            href="/contact"
            className="font-primary text-lg lg:text-xl hover:text-primary hover:underline transition-all duration-200">
            Contact
          </Link>
          <a
            href="/Mohancon-Builds.pdf"
            download
            className="font-primary text-lg lg:text-xl bg-primary text-white rounded-lg px-4 lg:px-6 py-3 lg:py-4 hover:bg-black transition-all duration-250">
            Download Brochure
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50"
          aria-label="Toggle mobile menu"
        >
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[160px] left-0 w-full bg-white shadow-lg border-t z-50 md:hidden">
          <div className="flex flex-col py-2">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="font-primary text-lg px-6 py-3 hover:bg-gray-50 hover:text-primary transition-all duration-200">
              Home
            </Link>
            
            <Link
              href="/about-us"
              onClick={closeMobileMenu}
              className="font-primary text-lg px-6 py-3 hover:bg-gray-50 hover:text-primary transition-all duration-200">
              About Us
            </Link>
            
            {/* Mobile Products Dropdown */}
  <div>
  <div className="font-primary text-lg px-6 py-3 text-left">
    Products
  </div>
  <div className="bg-gray-50">
    <Link
      href="/aac-block"
      onClick={closeMobileMenu}
      className="font-primary text-base px-12 py-2 hover:bg-gray-100 hover:text-primary transition-all duration-200 block"
    >
      AAC Blocks
    </Link>
    <Link
      href="/block-joining-mortar"
      onClick={closeMobileMenu}
      className="font-primary text-base px-12 py-2 hover:bg-gray-100 hover:text-primary transition-all duration-200 block"
    >
      Block Joining Mortar
    </Link>
  </div>
</div>
            
            <Link
              href="/sustanability"
              onClick={closeMobileMenu}
              className="font-primary text-lg px-6 py-3 hover:bg-gray-50 hover:text-primary transition-all duration-200">
              Sustainability
            </Link>
            
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="font-primary text-lg px-6 py-3 hover:bg-gray-50 hover:text-primary transition-all duration-200">
              Contact
            </Link>
            
            {/* Mobile Download Button */}
            <div className="px-6 py-3">
              <a
                href="/Mohancon-Builds.pdf"
                download
                onClick={closeMobileMenu}
                className="font-primary text-base bg-primary text-white rounded-lg px-4 py-3 hover:bg-black transition-all duration-250 block text-center">
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}