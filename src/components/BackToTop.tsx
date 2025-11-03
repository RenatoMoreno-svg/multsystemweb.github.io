import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      className="fixed bottom-6 right-6 sm:bottom-6 sm:right-6 z-[9999] group"
      style={{ pointerEvents: 'auto' }}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Voltar ao topo"
    >
      <div className="relative">
        {/* Subtle glow on hover */}
        <div className="absolute -inset-1 bg-gray-900/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Modern minimal button */}
        <div className="relative w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95">
          <ArrowUp size={20} strokeWidth={2} />
        </div>
      </div>
      
      {/* Clean tooltip */}
      {isHovered && (
        <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap shadow-lg">
          Voltar ao topo
        </div>
      )}
    </button>
  );
}
