"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fcf1ed] border-t border-[rgba(214,194,191,0.3)] flex flex-col items-center w-full mt-auto">
      <div className="w-full max-w-[1200px] px-6 md:px-[64px] py-[80px] md:py-[120px] flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        {/* Logo & Copyright */}
        <div className="flex flex-col gap-[16px] items-start">
          <div className="font-serif font-medium text-[#81524b] text-[24px] leading-[32px]">La MAYA</div>
          <div className="font-sans font-normal text-[#514441] text-[16px] leading-[24px]">
            <p>© 2026 La MAYA</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Links Grouped on the Right */}
        <div className="flex flex-row gap-[64px] items-start">
          {/* Social Links */}
          <div className="flex flex-col gap-[16px] items-start">
            <Link href="https://www.instagram.com/lamaya_boxbuketi/" target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-[#655d54] text-[12px] tracking-[1.2px] hover:text-[#81524b] transition-colors uppercase leading-[16px]">INSTAGRAM</Link>
            <Link href="https://www.facebook.com/people/%F0%9D%93%9B%F0%9D%93%AA-%F0%9D%90%8C%F0%9D%90%80%F0%9D%90%98%F0%9D%90%80/61588409288373/?ref=PROFILE_EDIT_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-[#655d54] text-[12px] tracking-[1.2px] hover:text-[#81524b] transition-colors uppercase leading-[16px]">FACEBOOK</Link>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col gap-[16px] items-start">
            <Link href="#" className="font-sans font-bold text-[#655d54] text-[12px] tracking-[1.2px] hover:text-[#81524b] transition-colors uppercase leading-[16px]">SHIPPING POLICY</Link>
            <Link href="#" className="font-sans font-bold text-[#655d54] text-[12px] tracking-[1.2px] hover:text-[#81524b] transition-colors uppercase leading-[16px]">PRIVACY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

