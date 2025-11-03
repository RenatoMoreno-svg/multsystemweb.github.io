import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ShoppingBag, Package, Star, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

export function ImprovedMultSystemHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleMercadoLivreClick = () => {
    window.open("https://www.mercadolivre.com.br", "_blank");
  };

  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative bg-gradient-to-br from-[#1C1C1E] via-[#2a2a2a] to-[#1C1C1E] text-white overflow-hidden py-20 lg:py-32"
    >
      {/* Background Pattern with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc2MjAwNjU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Circuit Board Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-r from-[#0A84FF]/20 to-[#4FC3F7]/10"
      ></motion.div>

      {/* Animated Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-80 h-80 bg-[#0A84FF]/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#4FC3F7]/10 rounded-full blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-3 bg-[#0A84FF]/20 border border-[#4FC3F7]/50 px-6 py-3 rounded-full mb-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star size={18} fill="#FF8C42" color="#FF8C42" />
              </motion.div>
              <span className="text-sm font-medium text-[#4FC3F7]">Loja Oficial</span>
            </div>
            <div className="w-1 h-4 bg-[#4FC3F7]/30"></div>
            <span className="text-sm text-gray-300">Mercado Livre Premium</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Zap size={16} className="text-[#FF8C42]" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              className="text-white leading-tight mb-2 text-5xl md:text-6xl lg:text-7xl"
              style={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block"
              >
                Tudo em Informática,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block bg-gradient-to-r from-[#4FC3F7] via-[#0A84FF] to-[#4FC3F7] bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                  animation: "shimmer-text 3s linear infinite",
                }}
              >
                com Qualidade e Tecnologia
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-300 mb-10 max-w-2xl text-lg leading-relaxed"
          >
            Hardware, suprimentos e redes — encontre tudo em um só lugar! Produtos de qualidade, entrega rápida e suporte especializado para sua empresa ou uso pessoal.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF8C42] to-[#ff7a2e] hover:from-[#ff7a2e] hover:to-[#FF8C42] text-white border-0 relative overflow-hidden group h-14 px-8 text-base font-semibold shadow-2xl rounded-2xl"
                onClick={handleMercadoLivreClick}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <ShoppingBag className="mr-2 relative z-10" size={22} />
                <span className="relative z-10">Acessar Mercado Livre</span>
                <ArrowRight className="ml-2 relative z-10" size={22} />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm relative overflow-hidden group h-14 px-8 text-base font-semibold rounded-2xl"
                onClick={scrollToProducts}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <Package className="mr-2 relative z-10" size={22} />
                <span className="relative z-10">Explorar Produtos</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "10k+", label: "Produtos", icon: null, delay: 0 },
              { value: null, label: "Avaliação 5.0", stars: true, delay: 0.1 },
              { value: "24h", label: "Entrega Rápida", icon: null, delay: 0.2 },
              { value: "Top", label: "Seller Premium", icon: TrendingUp, delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + stat.delay,
                  type: "spring",
                  bounce: 0.4,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                {stat.stars ? (
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.05 }}
                      >
                        <Star
                          size={18}
                          fill="#FF8C42"
                          color="#FF8C42"
                          className="group-hover:animate-pulse"
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-[#FF8C42] mb-2 text-3xl font-bold">
                    {stat.icon && <stat.icon size={28} />}
                    <span>{stat.value}</span>
                  </div>
                )}
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-[#F5F6FA]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          fill="currentColor"
        >
          <path d="M0,0 C360,74 1080,74 1440,0 L1440,74 L0,74 Z" />
        </svg>
      </div>

    </section>
  );
}
