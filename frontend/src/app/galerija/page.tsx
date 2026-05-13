'use client';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';

const imgRedRosesInABlackRoundBox = "/images/red-roses-box.png";
const imgPinkAndWhiteFloralArrangement = "/images/pink-white-arrangement.png";
const imgCandleAndFlowers = "/images/candle-flowers.png";
const imgWhitePinkBoxArrangement = "/images/white-pink-box.png";
const imgCloseUpFlowerTexture = "/images/flower-texture.png";
const imgLaMayaLogo = "/images/la-maya-logo.png";
const imgContainer = "/images/galerija-container.svg";


export default function LaMayaGalerija() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fff8f5] selection:bg-[#81524b]/10">
      <Nav />
      <main className="flex-1 flex flex-col items-center w-full py-[60px] md:py-[64px]">
        <div className="w-full max-w-[1200px] px-6 md:px-[64px] flex flex-col items-center">
          
          {/* Header */}
          <header className="flex flex-col items-center gap-[24px] mb-[48px] md:mb-[64px] text-center max-w-[672px]">
            <h1 className="font-serif font-normal text-[#81524b] text-[36px] md:text-[48px] leading-tight md:leading-[56px] tracking-[-0.48px]">Inspiracija</h1>
            <div className="flex flex-col font-sans font-normal text-[#655d54] text-[16px] md:text-[18px] leading-[26px] md:leading-[28px]">
              <p>Zaronite u svijet La Maya cvjetne umjetnosti. Pregledajte našu galeriju box buketa i aranžmana koji slave romantičnu eleganciju i moderni minimalizam.</p>
            </div>
            <div className="w-[80px] md:w-[96px] h-px bg-[rgba(214,194,191,0.5)] mt-[8px] md:mt-[16px]" />
          </header>

          {/* Masonry Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[25.33px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-[24px] md:gap-[25.33px]">
              <GalleryItem 
                image={imgRedRosesInABlackRoundBox} 
                category="SIGNATURE BOX" 
                title="Crveni Baršun" 
              />
              <GalleryItem 
                image={imgPinkAndWhiteFloralArrangement} 
                category="ROMANTIC ELEGANCE" 
                title="Nježni Pastel" 
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[24px] md:gap-[25.33px]">
              <GalleryItem 
                image={imgCandleAndFlowers} 
                category="GIFT SET" 
                title="Svijeća & Cvijet" 
              />
              <GalleryItem 
                image={imgWhitePinkBoxArrangement} 
                category="CLASSIC BOX" 
                title="Bijeli San" 
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[24px] md:gap-[25.33px]">
              {/* Special Card: Vaša Vizija */}
              <div className="bg-[#f6ece7] border border-[rgba(214,194,191,0.3)] rounded-[20px] p-[30px] md:p-[33px] flex flex-col items-center justify-center text-center h-[280px] md:h-[256px]">
                <div className="w-[36px] h-[42px] mb-[16px]">
                  <img alt="" src={imgContainer} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-serif font-medium text-[#81524b] text-[24px] leading-[32px] mb-[8px]">Vaša Vizija</h3>
                <div className="font-sans font-normal text-[#655d54] text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] mb-[24px]">
                  <p>Kontaktirajte nas za izradu personaliziranog aranžmana po mjeri.</p>
                </div>
                <Link href="/kontakt" className="border-b border-[#81524b] pb-[5px] hover:opacity-70 transition-opacity">
                  <span className="font-sans font-medium text-[#81524b] text-[14px] tracking-[0.7px] uppercase leading-[20px]">ZATRAŽITE PONUDU</span>
                </Link>
              </div>
              <GalleryItem 
                image={imgCloseUpFlowerTexture} 
                category="DETAILS" 
                title="Tekstura Latica" 
              />
            </div>
          </div>

          {/* Load More Button */}
          <div className="mt-[48px] md:mt-[64px] flex justify-center w-full">
            <button className="border border-[#655d54] rounded-[20px] px-[33px] py-[13px] hover:bg-[#655d54] hover:text-white transition-all duration-300 group">
              <span className="font-sans font-medium text-[#4c463d] text-[14px] tracking-[0.7px] uppercase leading-[20px] group-hover:text-white">UČITAJ VIŠE</span>
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

function GalleryItem({ image, category, title }: { image: string; category: string; title: string }) {
  return (
    <div className="group relative bg-[#fcf1ed] border border-[rgba(214,194,191,0.2)] rounded-[20px] overflow-hidden flex flex-col items-start w-full">
      <div className="aspect-square w-full relative overflow-hidden">
        <img alt={title} className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src={image} />
      </div>
      
      {/* Background Gradient & Text Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(53,47,45,0.7)] via-[rgba(53,47,45,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-[24px]">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="font-sans font-medium text-white/90 text-[14px] tracking-[1.4px] uppercase leading-[20px] block mb-[4px]">{category}</span>
          <h3 className="font-serif font-medium text-white text-[24px] leading-[32px]">{title}</h3>
        </div>
      </div>
    </div>
  );
}
