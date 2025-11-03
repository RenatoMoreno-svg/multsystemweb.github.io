import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface MultSystemCategoryCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  iconColor?: string;
  delay?: number;
}

export function MultSystemCategoryCard({ 
  icon: Icon, 
  title, 
  items, 
  iconColor = "text-[#0A84FF]",
  delay = 0
}: MultSystemCategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMercadoLivreClick = () => {
    window.open("https://www.mercadolivre.com.br", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#4FC3F7]/0 group-hover:border-[#4FC3F7]/60 transition-all duration-300 rounded-tr-xl z-10"></div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#0A84FF]/0 group-hover:border-[#0A84FF]/60 transition-all duration-300 rounded-bl-xl z-10"></div>
      
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/0 via-transparent to-[#4FC3F7]/0 group-hover:from-[#0A84FF]/5 group-hover:to-[#4FC3F7]/5 rounded-xl blur transition-all duration-500"></div>
      
      <Card 
        className="p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4FC3F7] group cursor-pointer bg-white h-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center text-center">
          {/* Icon container with decorative ring */}
          <div className="relative mb-4">
            {/* Decorative rotating ring */}
            <motion.div 
              className="absolute inset-0 -m-3 rounded-full border-2 border-dashed border-[#4FC3F7]/20"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 3, ease: "linear" }}
            />
            
            {/* Subtle background circle */}
            <div className={`absolute inset-0 -m-2 rounded-full bg-gradient-to-br ${iconColor.includes('blue') ? 'from-[#0A84FF]/5 to-[#4FC3F7]/5' : iconColor.includes('purple') ? 'from-purple-500/5 to-pink-500/5' : 'from-[#FF8C42]/5 to-[#FFE600]/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <motion.div 
              className={`relative ${iconColor}`}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon size={48} strokeWidth={1.5} />
            </motion.div>
          </div>
          <h3 className="text-[#1C1C1E] mb-3 group-hover:text-[#0A84FF] transition-colors">{title}</h3>
          <ul className="text-gray-600 space-y-2 mb-6 w-full">
            {items.map((item, index) => (
              <motion.li 
                key={index} 
                className="text-sm flex items-center justify-center group-hover:text-[#1C1C1E] transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: delay + (index * 0.05) }}
              >
                <ChevronRight size={14} className="mr-1 text-[#0A84FF] flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
          <Button 
            className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={handleMercadoLivreClick}
          >
            Ver no Mercado Livre
            <ExternalLink className="ml-2" size={16} />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
