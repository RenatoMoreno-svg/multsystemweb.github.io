import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "../constants/navigation";
import { createWhatsAppLink } from "../utils/formatters";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = "Olá! Vim através do site e gostaria de mais informações.";
    window.open(createWhatsAppLink(CONTACT_INFO.whatsapp, message), "_blank");
  };

  return (
    <button
      className="fixed bottom-20 right-6 sm:bottom-20 sm:right-6 z-[9999] group"
      style={{ pointerEvents: 'auto' }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        {/* Subtle glow on hover */}
        <div className="absolute -inset-1 bg-[#25D366]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Modern minimal button */}
        <div className="relative w-12 h-12 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95">
          <MessageCircle size={20} strokeWidth={2} />
        </div>
        
        {/* Notification dot */}
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
      </div>
      
      {/* Clean tooltip */}
      {isHovered && (
        <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap shadow-lg">
          WhatsApp
        </div>
      )}
    </button>
  );
}
