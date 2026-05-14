'use client';

import React from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// Assets from Figma context
const imgLaMayaLogo = "/images/la-maya-logo.png";
const imgMargin = "/images/icon-address.svg";
const imgMargin1 = "/images/icon-email.svg";
const imgMargin2 = "/images/icon-phone.svg";
const imgMargin3 = "/images/icon-delivery.svg";
const imgMargin4 = "/images/icon-hours.svg";
const imgVector = "/images/kontakt-vector.svg";
const imgContainer1 = "/images/kontakt-container.svg";

export default function LaMayaKontakt() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fff8f5] selection:bg-[#81524b]/10 overflow-x-hidden">
      <Nav />
      
      <main className="flex-1 flex flex-col items-center w-full">
        {/* Header Section */}
        <section className="w-full max-w-[1200px] px-6 md:px-[64px] py-[60px] md:py-[120px] flex flex-col gap-[16px] items-center text-center mx-auto">
          <div className="flex flex-col items-center animate-fade-in-up">
            <h1 className="font-serif font-normal text-[#1f1b18] text-[32px] md:text-[48px] leading-tight md:leading-[56px] tracking-[-0.48px]">
              Kontaktirajte nas
            </h1>
          </div>
          <div className="max-w-[672px] font-sans font-normal text-[#514441] text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] animate-fade-in-up [animation-delay:200ms]">
            <p>Rado ćemo odgovoriti na vaša pitanja i pomoći vam u odabiru savršenog cvjetnog aranžmana. Box buketi & mirisne svijeće te personalizirani pokloni rađeni s ljubavlju.</p>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="w-full max-w-[1200px] px-6 md:px-[64px] pb-[80px] md:pb-[120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-5 flex flex-col items-start animate-fade-in-up [animation-delay:400ms]">
              <div className="bg-[#fcf1ed] border border-[rgba(214,194,191,0.3)] p-6 md:p-[41px] rounded-[20px] flex flex-col gap-[40px] w-full transition-all hover:shadow-[0_10px_30px_-10px_rgba(129,82,75,0.1)]">
                
                {/* Logo Area */}
                <div className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] flex flex-col items-start">
                  <div className="relative size-full rounded-[16px] overflow-hidden bg-white p-3 shadow-sm border border-[rgba(214,194,191,0.2)] transition-transform duration-500 hover:rotate-3">
                    <img alt="La Maya Logo" className="size-full object-contain" src={imgLaMayaLogo} />
                  </div>
                </div>

                {/* Info List */}
                <div className="flex flex-col gap-[24px]">
                  <ContactInfoItem 
                    icon={imgMargin} 
                    label="ADRESA" 
                    content={<>Antolovečki put 4<br />10040 Zagreb, Hrvatska</>} 
                  />
                  <ContactInfoItem 
                    icon={imgMargin1} 
                    label="EMAIL" 
                    content="lamayaboxbuketi@gmail.com" 
                  />
                  <ContactInfoItem 
                    icon={imgMargin2} 
                    label="TELEFON" 
                    content={<a href="tel:+38595511096" className="hover:text-[#81524b] transition-colors">+385 95 511 0096</a>} 
                  />
                  <ContactInfoItem 
                    icon={imgMargin3} 
                    label="DOSTAVA" 
                    content={<>Dostava diljem cijele Hrvatske | Besplatna<br />dostava za Zagreb</>} 
                  />
                  <ContactInfoItem 
                    icon="/images/icon-instagram.svg" 
                    label="INSTAGRAM" 
                    content={<Link href="https://www.instagram.com/lamaya_boxbuketi/" target="_blank" rel="noopener noreferrer" className="hover:text-[#81524b] transition-colors text-[16px]">@lamaya_boxbuketi</Link>} 
                  />
                  <ContactInfoItem 
                    icon="/images/icon-facebook.svg" 
                    label="FACEBOOK" 
                    content={<Link href="https://www.facebook.com/people/%F0%9D%93%9B%F0%9D%93%AA-%F0%9D%90%8C%F0%9D%90%80%F0%9D%90%98%F0%9D%90%80/61588409288373/?ref=PROFILE_EDIT_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer" className="hover:text-[#81524b] transition-colors text-[16px]">La MAYA</Link>} 
                  />
                  
                  <div className="h-px bg-[rgba(214,194,191,0.5)] w-full" />
                  
                  <ContactInfoItem 
                    icon={imgMargin4} 
                    label="RADNO VRIJEME" 
                    content={<>Pon - Pet: 09:00 - 20:00<br />Subota: 09:00 - 15:00<br />Nedjelja: Zatvoreno</>} 
                  />
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 flex flex-col items-start animate-fade-in-up [animation-delay:600ms]">
              <div className="bg-[#fcf1ed] border border-[rgba(214,194,191,0.3)] pb-[40px] md:pb-[112px] pt-8 md:pt-[41px] px-6 md:px-[41px] rounded-[20px] flex flex-col gap-[32px] w-full transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(129,82,75,0.12)]">
                <h2 className="font-serif font-medium text-[#1f1b18] text-[24px] leading-[32px]">
                  Pošaljite nam poruku
                </h2>
                
                <form className="flex flex-col gap-[24px]" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                      <label className="font-sans font-bold text-[#514441] text-[12px] tracking-[1.2px] uppercase">IME I PREZIME</label>
                      <input 
                        type="text" 
                        className="bg-transparent border border-[#d6c2bf] rounded-[12px] h-[50px] px-4 font-sans text-[16px] text-[#1f1b18] focus:outline-none focus:border-[#81524b] transition-all focus:ring-1 focus:ring-[#81524b]/20 placeholder:text-[#514441]/30"
                        placeholder="Vaše ime"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className="font-sans font-bold text-[#514441] text-[12px] tracking-[1.2px] uppercase">EMAIL ADRESA</label>
                      <input 
                        type="email" 
                        className="bg-transparent border border-[#d6c2bf] rounded-[12px] h-[50px] px-4 font-sans text-[16px] text-[#1f1b18] focus:outline-none focus:border-[#81524b] transition-all focus:ring-1 focus:ring-[#81524b]/20 placeholder:text-[#514441]/30"
                        placeholder="Vaš email"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <label className="font-sans font-bold text-[#514441] text-[12px] tracking-[1.2px] uppercase">PREDMET</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border border-[#d6c2bf] rounded-[12px] h-[50px] px-4 font-sans text-[16px] text-[#1f1b18] focus:outline-none focus:border-[#81524b] appearance-none transition-all cursor-pointer">
                        <option>Opći upit</option>
                        <option>Narudžba po mjeri</option>
                        <option>Suradnja</option>
                        <option>Ostalo</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#514441]">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <label className="font-sans font-bold text-[#514441] text-[12px] tracking-[1.2px] uppercase">VAŠA PORUKA</label>
                    <textarea 
                      className="bg-transparent border border-[#d6c2bf] rounded-[12px] h-[146px] p-4 font-sans text-[16px] text-[#1f1b18] focus:outline-none focus:border-[#81524b] transition-all focus:ring-1 focus:ring-[#81524b]/20 resize-none placeholder:text-[#514441]/30"
                      placeholder="Kako vam možemo pomoći?"
                    ></textarea>
                  </div>

                  <div className="pt-[16px]">
                    <button className="w-full md:w-auto bg-[#81524b] text-white font-sans font-medium text-[14px] tracking-[0.7px] uppercase py-[16px] px-[32px] rounded-[12px] hover:bg-[#6b433e] transition-all hover:shadow-[0_4px_12px_rgba(129,82,75,0.3)] active:scale-[0.98]">
                      POŠALJI UPIT
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>

        {/* Aesthetic Section */}
          <div className="mt-[24px] w-full bg-white border border-[rgba(214,194,191,0.3)] h-[300px] md:h-[400px] overflow-hidden rounded-[20px] shadow-[0px_10px_40px_-10px_rgba(129,82,75,0.08)] relative animate-fade-in-up [animation-delay:800ms] group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.1] md:opacity-[0.05] transition-transform duration-[10000ms] group-hover:scale-110">
                <img src={imgVector} alt="" className="w-full h-full object-cover grayscale brightness-50" />
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(233,222,210,0.2)]">
              <div className="backdrop-blur-[2px] bg-[rgba(255,248,245,0.8)] border border-[rgba(214,194,191,0.3)] p-[20px] md:p-[25px] rounded-[20px] flex flex-col items-center gap-[16px] shadow-sm transition-all duration-700 group-hover:translate-y-[-5px]">
                <div className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] bg-[#fff8f5] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center">
                   <img src={imgContainer1} alt="" className="w-[18px] h-[18px] md:w-[22.5px] md:h-[22.5px]" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-sans font-medium text-[#1f1b18] text-[12px] md:text-[14px] tracking-[1.4px] uppercase text-center">
                    ZAGREB, HRVATSKA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

function ContactInfoItem({ icon, label, content }: { icon: string; label: string; content: React.ReactNode }) {
  return (
    <div className="flex gap-[16px] items-start group">
      <div className="shrink-0 w-[24px] h-[24px] flex items-center justify-center mt-1 transition-transform duration-300 group-hover:scale-110">
        <img src={icon} alt="" className="size-full object-contain opacity-90 group-hover:opacity-100" />
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="font-sans font-medium text-[#1f1b18] text-[14px] tracking-[0.7px] uppercase">{label}</span>
        <div className="font-sans font-normal text-[#514441] text-[16px] leading-[24px]">
          {content}
        </div>
      </div>
    </div>
  );
}
