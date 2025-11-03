import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Star, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Product } from "../types";
import { calculateDiscount } from "../constants/products";

interface ProductCardProps {
  product: Product;
  index: number;
  onBuyClick: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ProductCard({
  product,
  index,
  onBuyClick,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Decorative corner accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#0A84FF]/0 group-hover:border-[#0A84FF]/40 transition-all duration-300 rounded-tl-lg z-10"></div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#FF8C42]/0 group-hover:border-[#FF8C42]/40 transition-all duration-300 rounded-br-lg z-10"></div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/0 to-[#4FC3F7]/0 group-hover:from-[#0A84FF]/5 group-hover:to-[#4FC3F7]/5 rounded-xl transition-all duration-300 blur-sm"></div>
      
      <Card 
        className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4FC3F7] cursor-pointer group h-full flex flex-col relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="relative overflow-hidden">
          {/* Geometric accent - top left */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#0A84FF]/10 to-transparent z-10 pointer-events-none"></div>
          
          {/* Geometric accent - bottom right */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#FF8C42]/10 to-transparent z-10 pointer-events-none"></div>
          
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {product.badge && (
            <Badge className="absolute top-4 right-4 bg-[#FF8C42] text-white hover:bg-[#FF8C42] shadow-lg z-20">
              {product.badge}
            </Badge>
          )}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 z-20">
            <TrendingUp size={14} className="text-[#0A84FF]" />
            <span className="text-xs text-[#1C1C1E]">Top Seller</span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {Array.from({ length: product.rating }).map((_, i) => (
                <Star key={i} size={16} fill="#FF8C42" color="#FF8C42" />
              ))}
            </div>
            <span className="text-xs text-gray-600">({product.reviews} avaliações)</span>
          </div>
          
          <h3 className="text-[#1C1C1E] mb-2 text-lg group-hover:text-[#0A84FF] transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
          
          <div className="mb-4 mt-auto">
            {product.oldPrice && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </span>
                <Badge variant="outline" className="border-green-500 text-green-600 text-xs">
                  -{calculateDiscount(product.price, product.oldPrice)}% OFF
                </Badge>
              </div>
            )}
            <span className="text-[#0A84FF] text-xl">{product.price}</span>
          </div>
          
          <Button 
            className="w-full bg-[#FF8C42] hover:bg-[#ff7a2e] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={onBuyClick}
          >
            <ShoppingCart className="mr-2" size={18} />
            Comprar no Mercado Livre
          </Button>
          
          {/* Selo Mercado Livre */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-2">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFE600'%3E%3Cpath d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'/%3E%3C/svg%3E"
              alt="Mercado Livre"
              className="w-4 h-4"
            />
            <span className="text-xs text-gray-600">Vendido e entregue por MultSystem</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
