"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const imgBoxSlika = "/images/box-slika.png";
const imgLuksuzniBuketUKutiji = "/images/luksuzni-buket.png";
const imgMirisnaSvijecaILifestyle = "/images/mirisna-svijeca-lifestyle.png";
const imgClassicBoxBuket = "/images/classic-box-buket.png";
const imgMirisnaSvijecaRomantika = "/images/mirisna-svijeca-romantika.png";
const imgPersonaliziraniPoklonSet = "/images/personalizirani-poklon-set.png";
const imgEllipse1 = "/images/ellipse1.svg";
const imgContainer = "/images/arrow-right.svg";

const ProductCard = ({ imgSrc, title, subtitle, price, isNew }: { imgSrc: string, title: string, subtitle: string, price: string, isNew?: boolean }) => (
  <div className="flex flex-col gap-[24px] items-start w-full group cursor-pointer animate-fade-in-up">
    <div className="bg-[#f6ece7] rounded-[20px] relative w-full overflow-hidden flex flex-col items-center justify-center aspect-[3/4]">
      <div className="w-full h-full relative shrink-0">
        <img alt={title} className="absolute inset-0 size-full object-cover pointer-events-none group-hover:scale-110 transition-transform duration-700 ease-out" src={imgSrc} />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      {isNew && (
        <div className="absolute left-[16px] top-[16px] flex h-[26px] items-start z-10">
          <div className="backdrop-blur-[2px] bg-white/80 border border-[#847371]/30 flex flex-col items-start px-[12px] py-[4px] relative shadow-sm">
            <span className="font-sans font-bold text-[#1f1b18] text-[10px] tracking-[1.5px] leading-none uppercase">Novo</span>
          </div>
        </div>
      )}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
         <div className="bg-[#81524b] text-white px-6 py-2 rounded-full text-[12px] font-medium tracking-wider uppercase shadow-xl whitespace-nowrap">
           Brzi pregled
         </div>
      </div>
    </div>
    <div className="flex flex-col items-center w-full space-y-1">
      <h3 className="font-serif font-medium text-[#1f1b18] text-[22px] text-center leading-tight group-hover:text-[#81524b] transition-colors duration-300">{title}</h3>
      <p className="font-sans font-normal text-[#514441]/80 text-[15px] text-center">{subtitle}</p>
      <p className="font-sans font-medium text-[#81524b] text-[16px] text-center tracking-[0.5px] pt-1">{price}</p>
    </div>
  </div>
);

export default function LaMayaHome() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff8f5] overflow-x-hidden selection:bg-[#81524b]/10 selection:text-[#81524b]">
      <Nav />
      
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Main Content Wrapper */}
        <div className="w-full flex flex-col items-center gap-[120px] pb-[120px]">
          
          {/* Hero Section */}
          <section className="w-full max-w-[1200px] px-4 md:px-6 pt-4 md:pt-[48px]">
            <div className="relative w-full rounded-[20px] overflow-hidden shadow-2xl bg-[#fff8f5]">
              <div className="flex flex-col md:flex-row items-stretch min-h-[500px] md:min-h-[600px]">
                
                {/* Left Side - New Box Image */}
                <div className="relative w-full md:w-[50%] overflow-hidden group">
                  <img 
                    alt="La Maya Box Buket" 
                    className="absolute inset-0 size-full object-cover object-center group-hover:scale-105 transition-transform duration-[10s] ease-out" 
                    src={imgBoxSlika} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fff8f5]/20" />
                </div>
                
                {/* Right Side - Content */}
                <div className="relative w-full md:w-[50%] flex flex-col justify-center items-center md:items-start px-8 md:px-[60px] py-12 md:py-16 text-center md:text-left bg-[#fff8f5] animate-fade-in-left">
                  <div className="relative z-10 space-y-6 flex flex-col items-center md:items-start">
                    <div className="space-y-3 flex flex-col items-center md:items-start">
                      <h1 className="font-serif text-[#1f1b18] text-4xl md:text-5xl lg:text-[56px] leading-[1.1] drop-shadow-sm">
                        Box buketi & <br className="hidden md:block" /> mirisne svijeće
                      </h1>
                      <div className="h-1 w-20 bg-[#81524b] rounded-full" />
                    </div>
                    
                    <p className="font-sans text-[#514441] text-base md:text-lg leading-relaxed max-w-[440px] opacity-90">
                      Personalizirani pokloni kreirani s pažnjom. Otkrijte našu ponudu box buketa i svijeća. Dostava cijela HR | Zagreb besplatno.
                    </p>
                    
                    <div className="pt-4">
                      <Link 
                        href="/galerija" 
                        className="inline-flex items-center justify-center bg-[#81524b] text-white px-8 md:px-10 py-4 md:py-5 rounded-[20px] font-sans font-medium text-[13px] md:text-[14px] tracking-[2px] uppercase transition-all duration-300 hover:bg-[#6e463f] hover:shadow-[0_10px_20px_rgba(129,82,75,0.3)] hover:-translate-y-1 active:translate-y-0"
                      >
                        ISTRAŽITE KOLEKCIJU
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="w-full max-w-[1200px] px-6 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col items-start md:pr-12 space-y-6 md:space-y-8 animate-fade-in-up order-1 md:order-none">
              <div className="space-y-4">
                <span className="font-sans font-bold text-[#655d54] text-[10px] md:text-[12px] tracking-[2px] uppercase opacity-60">NAŠA PRIČA</span>
                <h2 className="font-serif text-[#1f1b18] text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Više od poklona, <br />umjetnost emocije.
                </h2>
              </div>
              
              <p className="font-sans text-[#514441] text-base md:text-lg leading-relaxed opacity-90">
                La Maya je nastala iz strasti prema delikatnoj ljepoti i nezaboravnim trenucima. Naš pristup nije samo aranžiranje, već kreiranje vizualne poezije kroz luksuzne box bukete i ručno rađene mirisne svijeće. Svaki personalizirani poklon koji napusti naš studio je jedinstveno remek-djelo, spremno ispričati vašu priču.
              </p>
              
              <Link href="/o-nama" className="group flex items-center gap-3 py-2">
                <div className="relative">
                  <span className="font-sans font-medium text-[#81524b] text-[15px] tracking-wider transition-all duration-300 group-hover:pr-2">
                    Saznajte više
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#81524b]/30 scale-x-100 group-hover:scale-x-110 transition-transform origin-left" />
                </div>
                <img src={imgContainer} alt="" className="size-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square group animate-fade-in-up [animation-delay:200ms] order-2 md:order-none w-full min-h-[300px]">
              <img 
                alt="Mirisna svijeća i lifestyle" 
                className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out" 
                src={imgMirisnaSvijecaILifestyle} 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]" />
            </div>
          </section>

          {/* Featured Collection Section */}
          <section className="w-full bg-[#fcf1ed] py-[120px] flex flex-col items-center">
            <div className="w-full max-w-[1200px] px-6 md:px-[80px] flex flex-col items-center gap-16">
              <div className="flex flex-col items-center text-center space-y-4 animate-fade-in-up">
                <span className="font-sans font-bold text-[#655d54] text-[12px] tracking-[3px] uppercase opacity-60">KOLEKCIJA</span>
                <h2 className="font-serif text-[#1f1b18] text-4xl md:text-5xl">Istaknuta ponuda</h2>
                <div className="h-1 w-12 bg-[#81524b] rounded-full mx-auto" />
              </div>
              
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProductCard 
                  imgSrc={imgClassicBoxBuket} 
                  title="Classic Box Buket" 
                  subtitle="Ruže, božuri u kutiji" 
                  price="€ 85.00" 
                  isNew={true} 
                />
                <ProductCard 
                  imgSrc={imgMirisnaSvijecaRomantika} 
                  title="Mirisna Svijeća" 
                  subtitle="Božur & vanilija" 
                  price="€ 35.00" 
                />
                <ProductCard 
                  imgSrc={imgPersonaliziraniPoklonSet} 
                  title="Gift Box Set" 
                  subtitle="Personalizirani pokloni" 
                  price="€ 110.00" 
                />
              </div>
              
              <div className="animate-fade-in-up [animation-delay:400ms]">
                <Link 
                  href="/galerija" 
                  className="inline-flex items-center justify-center border-2 border-[#81524b] text-[#81524b] px-10 py-4 rounded-[20px] font-sans font-medium text-[14px] tracking-[2px] uppercase transition-all duration-300 hover:bg-[#81524b] hover:text-white hover:shadow-xl hover:-translate-y-1"
                >
                  POGLEDAJ CIJELU PONUDU
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
