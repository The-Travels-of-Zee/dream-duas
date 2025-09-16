"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { topNavbar } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white backdrop-blur-xl shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              {/* <img src="/favicon/logo.png" className="w-12 h-12" alt="Website-Logo" /> */}
              <span className={`text-4xl font-extrabold transition-colors duration-300 text-gray-900 inline lg:hidden`}>
                D.
              </span>
              <span className={`text-4xl font-extrabold transition-colors duration-300 text-gray-900 hidden lg:inline`}>
                Dream Duas
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {topNavbar.links.map(({ title, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="relative font-medium text-black transition-colors duration-300 group hover:text-gold"
                >
                  {title}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-mikado-yellow transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="#waitlist">
                <button className="px-6 py-2 bg-rich-black text-gold rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:shadow-[0_0_25px_rgba(212,175,55,0.9)] border border-gold/40">
                  Join For Free
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-900 hover:bg-gray-200"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pl-6 pr-3 py-4 border-b border-gray-200">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-3">
              {/* <img src="/favicon/logo.png" className="w-12 h-12" alt="Website-Logo" /> */}
              <span className="text-3xl font-extrabold text-gray-900">Dream Duas</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="p-6 space-y-4">
            {topNavbar.links.map(({ title, href, icon: Icon }, index) => (
              <Link
                key={index}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 p-4 rounded-xl text-gray-900 hover:text-gold hover:bg-rich-black/90 transition-all duration-300 transform ${
                  isOpen ? "animate-slideIn" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {Icon && <Icon size={20} />}
                <span className="font-medium">{title}</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="p-6 border-t border-gray-200 mt-auto">
            <Link href="#waitlist" onClick={() => setIsOpen(false)}>
              <button className="w-full p-4 bg-rich-black text-gold rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:shadow-[0_0_25px_rgba(212,175,55,0.9)] border border-gold/40">
                Join For Free
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
