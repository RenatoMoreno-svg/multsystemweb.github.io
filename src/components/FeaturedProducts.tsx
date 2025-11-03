import { Button } from "./ui/button";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState } from "react";
import { FEATURED_PRODUCTS } from "../constants/products";
import { SOCIAL_LINKS } from "../constants/navigation";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleBuyClick = () => {
    window.open(SOCIAL_LINKS.mercadoLivre, "_blank");
  };

  return (
    <section 
      className="bg-white relative overflow-hidden py-20 lg:py-32" 
      id="ofertas"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8C42]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A84FF]/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/5 via-white to-[#FFE600]/5 rounded-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,140,66,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,230,0,0.08)_0%,transparent_50%)] rounded-3xl"></div>
        
        {/* Content Container */}
        <div className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          {/* Header Section - Espaçamento 0 → 64px */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            {/* Badge with Pulse Animation - Espaçamento 0 → 24px */}
            <motion.div 
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] rounded-full mb-6 shadow-lg relative overflow-hidden"
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(255, 140, 66, 0.3)",
                  "0 8px 30px rgba(255, 140, 66, 0.5)",
                  "0 4px 20px rgba(255, 140, 66, 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span 
                className="text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔥
              </motion.span>
              <span className="text-white font-semibold text-xs tracking-[0.1em] uppercase">Ofertas Especiais</span>
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>

            {/* Title - Espaçamento 24px → 16px */}
            <h2 className="text-[#1C1C1E] mb-4 leading-tight" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Produtos em Destaque
            </h2>
            
            {/* Description - Espaçamento 16px → 40px */}
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Aproveite nossas ofertas exclusivas com os melhores preços e avaliações do Mercado Livre
            </p>

            {/* Trust Indicators - Grid moderno */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
            >
              {[
                { icon: "✓", text: "Entrega garantida", color: "green" },
                { icon: "⭐", text: "Produtos verificados", color: "blue" },
                { icon: "🏆", text: "Melhores preços", color: "orange" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className={`${
                    item.color === 'green' ? 'text-green-500' : 
                    item.color === 'blue' ? 'text-blue-500' : 
                    'text-[#FF8C42]'
                  } text-base`}>
                    {item.icon}
                  </span>
                  <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Carousel Section - Espaçamento 64px → 96px */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-24"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-7xl mx-auto"
            >
              <CarouselContent className="-ml-3 md:-ml-4 lg:-ml-6">
                {FEATURED_PRODUCTS.map((product, index) => (
                  <CarouselItem key={product.id} className="pl-3 md:pl-4 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <ProductCard
                        product={product}
                        index={index}
                        onBuyClick={handleBuyClick}
                        isHovered={hoveredProduct === product.id}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Enhanced Carousel Controls */}
              <CarouselPrevious className="hidden md:flex -left-5 lg:-left-7 w-14 h-14 border-2 border-gray-300/50 bg-white/95 backdrop-blur-md hover:bg-[#0A84FF] hover:border-[#0A84FF] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 rounded-full" />
              <CarouselNext className="hidden md:flex -right-5 lg:-right-7 w-14 h-14 border-2 border-gray-300/50 bg-white/95 backdrop-blur-md hover:bg-[#0A84FF] hover:border-[#0A84FF] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 rounded-full" />
            </Carousel>

            {/* Mobile Swipe Indicator - Espaçamento 0 → 24px */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden text-center mt-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/80 backdrop-blur-sm rounded-full text-gray-500 text-sm">
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-base"
                >
                  ←
                </motion.span>
                <span className="font-medium">Deslize para ver mais</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-base"
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section - Espaçamento 96px → 80px */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { icon: "📦", value: "500+", label: "Produtos disponíveis", gradient: "from-blue-500 to-cyan-500" },
                { icon: "⚡", value: "98%", label: "Satisfação dos clientes", gradient: "from-purple-500 to-pink-500" },
                { icon: "🚀", value: "24h", label: "Envio rápido", gradient: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group"
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`}></div>
                  
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/60 shadow-lg group-hover:shadow-2xl group-hover:border-gray-300 transition-all duration-300">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section - Espaçamento 80px → final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            {/* Featured Offer Box - Espaçamento 0 → 32px */}
            <motion.div
              className="inline-flex items-center gap-4 mb-8 px-8 py-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl border-2 border-green-200/60 shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
              />
              
              <span className="text-3xl relative z-10">💰</span>
              <div className="text-left relative z-10">
                <div className="text-green-700 font-semibold text-base mb-0.5">Oferta Exclusiva</div>
                <div className="text-green-600 text-sm">Até 30% de desconto em produtos selecionados</div>
              </div>
            </motion.div>

            {/* CTA Button - Espaçamento 32px → 24px */}
            <div className="mb-6">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
                className="relative inline-block"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#0A84FF] to-[#4FC3F7] rounded-3xl blur-2xl opacity-30"
                  animate={{
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <Button 
                  size="lg"
                  className="relative bg-gradient-to-r from-[#0A84FF] to-[#4FC3F7] hover:from-[#0A84FF]/90 hover:to-[#4FC3F7]/90 text-white shadow-2xl border-0 h-auto min-h-12 sm:h-16 px-6 sm:px-12 py-3 sm:py-0 text-sm sm:text-base font-semibold rounded-2xl w-full sm:w-auto"
                  onClick={handleBuyClick}
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                    <span className="text-center sm:text-left">Ver todas as ofertas no Mercado Livre</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-lg sm:text-xl flex-shrink-0"
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Security Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-2.5 text-sm text-gray-500"
            >
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Compra 100% segura através do Mercado Livre</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
