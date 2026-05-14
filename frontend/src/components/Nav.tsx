"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const imgLaMayaLogo = "/images/la-maya-logo.png";

function MobileMenu({ isOpen, onClose, navLinks, pathname }: {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  pathname: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[9998] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-[#fff8f5] z-[9999] md:hidden shadow-[-8px_0_30px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button */}
        <button
          className="absolute top-[24px] right-[24px] w-[44px] h-[44px] flex items-center justify-center"
          onClick={onClose}
          aria-label="Zatvori izbornik"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81524b" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        <div className="flex flex-col pt-[100px] px-8">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`font-sans font-medium text-[18px] tracking-[0.5px] uppercase transition-all py-4 border-b border-[rgba(214,194,191,0.2)]
                    ${isActive ? "text-[#81524b]" : "text-[#655d54] active:text-[#81524b]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 pt-8 border-t border-[rgba(214,194,191,0.2)] flex flex-col gap-4">
            <Link 
              href="https://www.instagram.com/lamaya_boxbuketi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans font-bold text-[#655d54] text-[12px] tracking-[1.2px] hover:text-[#81524b] transition-colors uppercase flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              INSTAGRAM
            </Link>
            <Link 
              href="https://www.facebook.com/people/%F0%9D%93%9B%F0%9D%93%AA-%F0%9D%90%8C%F0%9D%90%80%F0%9D%90%98%F0%9D%90%80/61588409288373/?ref=PROFILE_EDIT_xav_ig_profile_page_web" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans font-bold text-[#655d54] text-[12px] tracking-[1.2px] hover:text-[#81524b] transition-colors uppercase flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              FACEBOOK
            </Link>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "O nama", href: "/o-nama" },
    { label: "Galerija", href: "/galerija" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-[12px] bg-[#fff8f5]/90 border-b border-[rgba(214,194,191,0.3)] flex flex-col items-center w-full px-4 md:px-[40px] transition-all duration-300">
        <div className="flex items-center justify-between w-full max-w-[1200px] px-2 md:px-[64px] py-[16px] md:py-[24px]">
          <Link href="/home">
            <div className="relative shrink-0 size-[50px] md:size-[80px] cursor-pointer hover:opacity-80 transition-opacity">
              <img alt="La Maya Logo" className="absolute inset-0 size-full object-contain" src={imgLaMayaLogo} />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[34px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans font-medium text-[14px] tracking-[0.7px] leading-[20px] uppercase transition-all
                    ${isActive 
                      ? "text-[#81524b] border-b border-[#81524b]/30 pb-1" 
                      : "text-[#655d54] hover:text-[#81524b]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="https://www.instagram.com/lamaya_boxbuketi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#655d54] hover:text-[#81524b] transition-colors"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link 
              href="https://www.facebook.com/people/%F0%9D%93%9B%F0%9D%93%AA-%F0%9D%90%8C%F0%9D%90%80%F0%9D%90%98%F0%9D%90%80/61588409288373/?ref=PROFILE_EDIT_xav_ig_profile_page_web" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#655d54] hover:text-[#81524b] transition-colors"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden flex flex-col justify-center items-center gap-[6px] w-[44px] h-[44px] -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Otvori izbornik"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span className="block w-6 h-[2px] bg-[#81524b]" />
            <span className="block w-6 h-[2px] bg-[#81524b]" />
            <span className="block w-6 h-[2px] bg-[#81524b]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu - portaled to body so it's above everything */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
        pathname={pathname}
      />
    </>
  );
}
