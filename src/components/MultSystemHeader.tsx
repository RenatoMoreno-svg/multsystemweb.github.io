import { Button } from "./ui/button";
import { Menu, X, ShoppingCart, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "figma:asset/762bda0b261ea86f64595536f752ddd79544f7a8.png";
import { NAVIGATION_ITEMS, CONTACT_INFO, SOCIAL_LINKS } from "../constants/navigation";
import { useScrollToSection } from "../hooks/useScrollToSection";
import { createWhatsAppLink } from "../utils/formatters";

export function MultSystemHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const handleMercadoLivreClick = () => {
    window.open(SOCIAL_LINKS.mercadoLivre, "_blank");
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os produtos MultSystem.";
    window.open(createWhatsAppLink(CONTACT_INFO.whatsapp, message), "_blank");
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
            : "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100/50"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center z-10 group cursor-pointer">
              <img
                src={logoImage}
                alt="MultSystems - Produtos Eletrônicos e Informática"
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                  scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
                }`}
                onClick={() => scrollToSection("inicio")}
              />
            </div>

            {/* Desktop Navigation - Centralizado */}
            <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2" role="navigation" aria-label="Menu principal">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigationClick(item.id)}
                  className="text-[#1C1C1E] hover:text-[#0A84FF] transition-all duration-300 relative group px-4 py-2 rounded-lg hover:bg-[#0A84FF]/5"
                  aria-label={`Navegar para ${item.label}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#0A84FF] to-[#4FC3F7] w-0 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </button>
              ))}
            </nav>

            {/* Cart Icon & CTA Button */}
            <div className="hidden lg:flex items-center gap-3 z-10">
              {/* Divider */}
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              
              <button
                onClick={handleWhatsAppClick}
                className="relative p-3 text-[#1C1C1E] hover:text-[#25D366] transition-all duration-300 bg-gray-50/80 hover:bg-[#25D366]/10 rounded-xl hover:shadow-lg hover:scale-110 group"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle size={22} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full animate-pulse shadow-lg shadow-[#25D366]/50"></span>
              </button>
              
              <Button
                className="bg-gradient-to-r from-[#FF8C42] to-[#ff7a2e] hover:from-[#ff7a2e] hover:to-[#FF8C42] text-white transition-all duration-300 border-0 h-11 px-6 shadow-lg shadow-[#FF8C42]/30 hover:shadow-xl hover:shadow-[#FF8C42]/40 hover:scale-105 hover:-translate-y-0.5"
                onClick={handleMercadoLivreClick}
                aria-label="Visitar loja no Mercado Livre"
              >
                <ShoppingCart className="mr-2" size={18} />
                <span>Mercado Livre</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#1C1C1E] p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav 
              className="lg:hidden mt-4 pb-4 flex flex-col gap-2 animate-in slide-in-from-top-4 duration-300"
              role="navigation" 
              aria-label="Menu mobile"
            >
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigationClick(item.id)}
                  className="text-[#1C1C1E] hover:text-[#0A84FF] transition-all duration-200 text-left py-3 px-4 hover:bg-gradient-to-r hover:from-[#0A84FF]/5 hover:to-transparent rounded-xl border border-transparent hover:border-[#0A84FF]/20 hover:shadow-md hover:translate-x-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-label={`Navegar para ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2"></div>
              
              {/* WhatsApp Mobile */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 py-3 px-4 text-[#25D366] hover:text-white bg-[#25D366]/10 hover:bg-[#25D366] transition-all duration-300 rounded-xl border border-[#25D366]/20 hover:border-[#25D366] hover:shadow-lg"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle size={20} strokeWidth={2.5} />
                <span>Falar no WhatsApp</span>
              </button>
              
              {/* Mercado Livre Mobile */}
              <Button
                className="bg-gradient-to-r from-[#FF8C42] to-[#ff7a2e] hover:from-[#ff7a2e] hover:to-[#FF8C42] text-white w-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={handleMercadoLivreClick}
                aria-label="Visitar loja no Mercado Livre"
              >
                <ShoppingCart className="mr-2" size={18} />
                Compre no Mercado Livre
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
