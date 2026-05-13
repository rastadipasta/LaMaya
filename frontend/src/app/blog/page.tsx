"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const imgFeaturedPost = "/images/featured-post.png";
const imgPost1 = "/images/post1.png";
const imgPost2 = "/images/post2.png";
const imgPost3 = "/images/post3.png";
const imgArrowRight = "/images/arrow-right.svg";
const imgFlowerIcon = "/images/flower-icon.svg";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff8f5]">
      <Nav />
      
      <main className="flex-grow flex flex-col items-center">
        {/* Hero Header Section */}
        <section className="w-full max-w-[1200px] px-6 md:px-[64px] py-[60px] md:py-[120px] flex flex-col items-center text-center">
          <div className="font-sans text-[12px] tracking-[2.4px] text-[#81524b] uppercase mb-4 animate-fade-in-up">
            MAGAZIN & INSPIRACIJA
          </div>
          <h1 className="font-serif text-[32px] md:text-[48px] leading-tight text-[#1f1b18] mb-6 max-w-[800px] animate-fade-in-up [animation-delay:200ms]">
            Svijet cvijeća kroz naše oči
          </h1>
          <p className="font-sans text-[15px] md:text-[18px] text-[#655d54] leading-[26px] md:leading-[1.6] max-w-[600px] animate-fade-in-up [animation-delay:400ms]">
            Otkrijte tajne aranžiranja, savjete za njegu i najnovije trendove u svijetu artisanalne floristike.
          </p>
        </section>

        {/* Featured Post Section */}
        <section className="w-full max-w-[1200px] px-4 md:px-[64px]">
          <div className="relative w-full h-[450px] md:h-[600px] rounded-[20px] overflow-hidden group cursor-pointer shadow-xl animate-fade-in-up [animation-delay:600ms]">
            <img 
              src={imgFeaturedPost} 
              alt="Featured Post" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-[48px]">
              <div className="mb-4">
                <span className="backdrop-blur-[2px] bg-[#fff8f5]/90 px-[12px] py-[4px] rounded-[2px] font-sans text-[10px] md:text-[12px] tracking-[1.2px] text-[#81524b] uppercase">
                  INSPIRACIJA
                </span>
              </div>
              <h2 className="font-serif text-[24px] md:text-[32px] text-white leading-tight mb-4 max-w-[600px]">
                Umjetnost darivanja: Kako odabrati savršen box buket
              </h2>
              <p className="font-sans text-[14px] md:text-[16px] text-white/90 leading-relaxed mb-6 max-w-[500px] hidden sm:block">
                Otkrijte zašto su cvjetni boxovi postali simbol moderne elegancije i kako odabrati onaj pravi za svaku prigodu.
              </p>
              <div className="w-fit border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                <span className="font-sans text-[14px] text-white tracking-[0.7px]">Pročitaj više</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="w-full max-w-[1200px] px-6 md:px-[64px] py-[80px] md:py-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-6">
            {/* Blog Card 1 */}
            <article className="flex flex-col group cursor-pointer animate-fade-in-up">
              <div className="relative h-[300px] md:h-[426px] mb-6 rounded-[20px] overflow-hidden shadow-lg">
                <img 
                  src={imgPost1} 
                  alt="Post 1" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="border border-[#d6c2bf]/20 px-3 py-1 font-sans text-[12px] tracking-[1.2px] text-[#655d54] uppercase">
                  SAVJETI
                </div>
                <div className="h-px w-8 bg-[#d6c2bf]/50" />
              </div>
              <h3 className="font-serif text-[22px] md:text-[24px] text-[#1f1b18] leading-[1.3] mb-4 group-hover:text-[#81524b] transition-colors">
                5 savjeta za dugotrajnost vaših ruža
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] text-[#655d54] leading-relaxed mb-6">
                Saznajte male tajne velikih majstora kako bi vaš buket ostao svjež i mirisan danima nakon darivanja.
              </p>
              <div className="flex items-center gap-2 text-[#81524b] font-sans text-[14px] tracking-[0.7px]">
                <span className="font-medium uppercase">Pročitaj više</span>
                <img src={imgArrowRight} alt="" className="w-[10px] h-[10px] group-hover:translate-x-1 transition-transform" />
              </div>
            </article>

            {/* Blog Card 2 */}
            <article className="flex flex-col group cursor-pointer animate-fade-in-up [animation-delay:200ms]">
              <div className="relative h-[300px] md:h-[426px] mb-6 rounded-[20px] overflow-hidden shadow-lg">
                <img 
                  src={imgPost2} 
                  alt="Post 2" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="border border-[#d6c2bf]/20 px-3 py-1 font-sans text-[12px] tracking-[1.2px] text-[#655d54] uppercase">
                  NOVOSTI
                </div>
                <div className="h-px w-8 bg-[#d6c2bf]/50" />
              </div>
              <h3 className="font-serif text-[22px] md:text-[24px] text-[#1f1b18] leading-[1.3] mb-4 group-hover:text-[#81524b] transition-colors">
                Mirisne note koje opuštaju: Kolekcija svijeća
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] text-[#655d54] leading-relaxed mb-6">
                Predstavljamo našu novu kolekciju ručno rađenih svijeća koje će pretvoriti vaš dom u pravu cvjetnu oazu mira.
              </p>
              <div className="flex items-center gap-2 text-[#81524b] font-sans text-[14px] tracking-[0.7px]">
                <span className="font-medium uppercase">Pročitaj više</span>
                <img src={imgArrowRight} alt="" className="w-[10px] h-[10px] group-hover:translate-x-1 transition-transform" />
              </div>
            </article>

            {/* Blog Card 3 */}
            <article className="flex flex-col group cursor-pointer animate-fade-in-up [animation-delay:400ms]">
              <div className="relative h-[300px] md:h-[426px] mb-6 rounded-[20px] overflow-hidden shadow-lg">
                <img 
                  src={imgPost3} 
                  alt="Post 3" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="border border-[#d6c2bf]/20 px-3 py-1 font-sans text-[12px] tracking-[1.2px] text-[#655d54] uppercase">
                  INSPIRACIJA
                </div>
                <div className="h-px w-8 bg-[#d6c2bf]/50" />
              </div>
              <h3 className="font-serif text-[22px] md:text-[24px] text-[#1f1b18] leading-[1.3] mb-4 group-hover:text-[#81524b] transition-colors">
                Trendovi u vjenčanim buketima za 2024.
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] text-[#655d54] leading-relaxed mb-6">
                Od divljeg cvijeća do minimalističkih bijelih aranžmana, pogledajte što će obilježiti predstojeću sezonu vjenčanja.
              </p>
              <div className="flex items-center gap-2 text-[#81524b] font-sans text-[14px] tracking-[0.7px]">
                <span className="font-medium uppercase">Pročitaj više</span>
                <img src={imgArrowRight} alt="" className="w-[10px] h-[10px] group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full max-w-[1200px] px-4 md:px-[64px] mb-[80px] md:mb-[120px]">
          <div className="bg-[#fcf1ed] border border-[#d6c2bf]/20 rounded-[20px] p-8 md:p-[64px] flex flex-col items-center text-center shadow-sm">
            <img src={imgFlowerIcon} alt="" className="w-[30px] h-[24px] mb-6 opacity-80" />
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#1f1b18] mb-4">
              Budite dio naše cvjetne priče
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] text-[#655d54] mb-8 max-w-[512px]">
              Prijavite se na naš newsletter i primajte inspiraciju, ekskluzivne ponude i novosti izravno u vaš inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 w-full max-w-[448px] mb-8">
              <input 
                type="email" 
                placeholder="Vaša e-mail adresa" 
                className="flex-grow bg-white border border-[#d6c2bf] px-6 py-4 rounded-[12px] font-sans text-[16px] focus:outline-none focus:border-[#81524b] shadow-sm"
              />
              <button 
                type="submit" 
                className="bg-[#81524b] text-white px-8 py-4 rounded-[12px] font-sans text-[14px] tracking-[0.7px] uppercase hover:bg-[#65423b] transition-all hover:shadow-md active:scale-[0.98]"
              >
                PRIJAVI SE
              </button>
            </form>
            <p className="font-sans italic text-[12px] text-[#655d54]/60 tracking-[1.2px]">
              Poštujemo vašu privatnost. Odjava je moguća u bilo kojem trenutku.
            </p>
          </div>
        </section>

        <style jsx global>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}</style>
      </main>

      <Footer />
    </div>
  );
}
