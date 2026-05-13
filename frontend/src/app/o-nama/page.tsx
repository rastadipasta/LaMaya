'use client';

import React from 'react';
import Link from 'next/link';

// Assets from Figma context
const imgLaMayaLogo = "/images/la-maya-logo.png";
const imgFlowerDetails = "/images/flower-details.png";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LaMayaONama() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fff8f5] selection:bg-[#81524b]/10">
      <Nav />
      
      <main className="flex-1 flex flex-col items-center w-full">
        {/* Main Content Container */}
        <div className="w-full max-w-[1200px] px-6 md:px-[64px] py-[60px] md:py-[120px] flex flex-col gap-[80px] md:gap-[120px]">
          
          {/* Hero Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-center">
            <div className="flex flex-col gap-[24px] items-start order-2 md:order-1">
              <div className="flex flex-col gap-[16px]">
                <h1 className="font-serif font-normal text-[#81524b] text-[36px] md:text-[48px] leading-tight md:leading-[56px] tracking-[-0.48px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                  Naša Priča
                </h1>
                <div className="font-serif font-normal text-[#655d54] text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                  <p>La Maya je više od cvjećarne; to je boutique gdje se umjetnost susreće s prirodom. Naša strast je stvaranje elegantnih, emotivnih i jedinstvenih cvjetnih aranžmana koji slave ljepotu svakog trenutka.</p>
                </div>
              </div>
              <div className="font-serif font-normal text-[#514441] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] py-[8px] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 opacity-80">
                <p>Svaki buket je pažljivo osmišljen, koristeći samo najkvalitetnije i najsvježije cvijeće, s posebnim naglaskom na detalje i romantičnu estetiku. Vjerujemo u polagani, promišljeni proces dizajniranja koji rezultira nečim uistinu posebnim.</p>
              </div>
              <Link href="/galerija" className="w-full md:w-auto bg-[#81524b] px-[32px] py-[16px] rounded-[20px] hover:bg-[#6b433e] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 flex justify-center">
                <span className="font-serif font-normal text-white text-[14px] tracking-[0.7px] uppercase leading-[20px]">
                  OTKRIJTE NAŠU KOLEKCIJU
                </span>
              </Link>
            </div>
            
            <div className="flex justify-center md:justify-end relative h-fit md:h-full animate-in fade-in zoom-in-95 duration-1000 delay-200 order-1 md:order-2">
               <div className="w-full max-w-[300px] md:max-w-[524px] aspect-square relative opacity-[0.1] md:opacity-[0.07] grayscale pointer-events-none">
                 <img alt="La Maya Logo Background" className="absolute inset-0 size-full object-contain" src={imgLaMayaLogo} />
               </div>
            </div>
          </section>

          {/* Studio Section */}
          <section className="flex flex-col gap-[48px] items-center w-full">
            <h2 className="font-serif font-normal text-[#81524b] text-[32px] leading-[40px] text-center">
              U Našem Studiju
            </h2>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px]">
              {/* Large Image Card */}
              <div className="md:col-span-8 bg-[#fcf1ed] rounded-[20px] overflow-hidden aspect-[16/9] md:aspect-auto md:h-[647px] relative group border border-[rgba(214,194,191,0.2)]">
                <img 
                  alt="Floral Studio Interior" 
                  className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
                  src="/studio.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(129,82,75,0.1)] to-transparent pointer-events-none" />
              </div>
              
              {/* Small Cards Column */}
              <div className="md:col-span-4 flex flex-col gap-[24px]">
                {/* Text Card */}
                <div className="bg-white border border-[rgba(214,194,191,0.3)] p-[33px] rounded-[20px] shadow-sm flex flex-col gap-[16px] h-fit">
                  <h3 className="font-serif font-normal text-[#81524b] text-[24px] leading-[32px]">
                    Ručni Rad
                  </h3>
                  <p className="font-serif font-normal text-[#514441] text-[16px] leading-[24px]">
                    Posvećeni smo detaljima. Svaka traka je ručno vezana, svaka stabljika pažljivo odabrana kako bi stvorila savršenu harmoniju oblika i teksture. Naš studio je prostor gdje kreativnost cvjeta, a svaka kreacija nosi pečat naše strasti prema prirodi.
                  </p>
                </div>
                
                {/* Small Image Card */}
                <div className="bg-[#fcf1ed] rounded-[20px] overflow-hidden flex-1 min-h-[341px] relative border border-[rgba(214,194,191,0.2)] group">
                  <img 
                    alt="Flower Details" 
                    className="absolute inset-0 size-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out" 
                    src={imgFlowerDetails} 
                  />
                  <div className="absolute inset-0 bg-[rgba(129,82,75,0.05)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
