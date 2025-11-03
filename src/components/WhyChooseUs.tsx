import { Card } from "./ui/card";
import { Headphones, Truck, ShieldCheck, Award, Star, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Produtos 100% Originais",
      description: "Garantia do fabricante e nota fiscal em todas as compras",
      gradient: "from-[#0A84FF] to-[#4FC3F7]",
      badge: "Certificado",
    },
    {
      icon: Truck,
      title: "Entrega em Todo Brasil",
      description: "Envio rápido e seguro com rastreamento online",
      gradient: "from-[#34C759] to-[#30D158]",
      badge: "Rápido",
    },
    {
      icon: Award,
      title: "Loja Premium ML",
      description: "Selo de qualidade e milhares de avaliações positivas",
      gradient: "from-[#FFD60A] to-[#FF9500]",
      badge: "Premium",
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe técnica pronta para ajudar você 24/7",
      gradient: "from-[#FF375F] to-[#FF453A]",
      badge: "24/7",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section 
      className="bg-gradient-to-br from-[#0A84FF] via-[#0866D6] to-[#4FC3F7] text-white relative overflow-hidden py-24 lg:py-32"
    >
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>

      {/* Floating orbs with modern gradients */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-[#4FC3F7]/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-pulse"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm10 0h1v1h-1V0zm10 0h1v1h-1V0zm10 0h1v1h-1V0zm10 0h1v1h-1V0zm10 0h1v1h-1V0zm10 0h1v1h-1V0zm10 0h1v1h-1V0zM0 10h1v1H0v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zM0 20h1v1H0v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zM0 30h1v1H0v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zM0 40h1v1H0v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zM0 50h1v1H0v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zM0 60h1v1H0v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zM0 70h1v1H0v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1zm10 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge de destaque */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full mb-6 border border-white/30"
          >
            <Sparkles size={18} className="text-[#FFD60A]" />
            <span className="text-sm text-white">Excelência Comprovada</span>
          </motion.div>

          <h2 className="text-white mb-5 text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 700 }}>
            Por que escolher a MultSystems?
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Experiência, qualidade e compromisso com a satisfação do cliente em cada detalhe
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-3xl blur-2xl transition-all duration-500"></div>
              
              <Card 
                className="relative p-8 bg-white/10 backdrop-blur-xl border-white/30 hover:bg-white/15 transition-all duration-500 cursor-pointer rounded-3xl overflow-hidden h-full shadow-2xl group-hover:shadow-[0_20px_80px_rgba(255,255,255,0.15)] group-hover:border-white/50"
              >
                {/* Top gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}></div>

                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="animate-shimmer absolute inset-0"></div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-300 rounded-tl-2xl"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-300 rounded-br-2xl"></div>

                <div className="text-center relative z-10">
                  {/* Icon container with rotating ring */}
                  <div className="relative inline-block mb-6">
                    {/* Rotating outer ring */}
                    <motion.div 
                      className="absolute -inset-4 rounded-2xl border-2 border-dashed border-white/20 group-hover:border-white/40"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Icon background with gradient */}
                    <motion.div 
                      className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-2xl`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent rounded-2xl"></div>
                      
                      {/* Pulsing glow behind icon */}
                      <div className="absolute inset-0 blur-xl opacity-60 bg-white rounded-2xl group-hover:scale-150 transition-transform duration-500"></div>
                      
                      <feature.icon size={36} className="text-white relative z-10" strokeWidth={2.5} />
                    </motion.div>
                  </div>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30 group-hover:bg-white/30 transition-all">
                    <Zap size={12} className="text-[#FFD60A]" />
                    <span className="text-xs text-white">{feature.badge}</span>
                  </div>

                  <h3 className="text-white mb-3 text-xl" style={{ fontWeight: 600 }}>{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Decorative bottom corner orb */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating Section - Modernizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center relative"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD60A]/20 via-[#FF9500]/20 to-[#FFD60A]/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative inline-block">
            {/* Corner decorations */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"></div>
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-white/30 rounded-bl-2xl"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-white/30 rounded-br-2xl"></div>
            
            <div className="flex flex-col items-center space-y-4 bg-white/15 backdrop-blur-xl border border-white/40 px-10 py-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Animated shimmer background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              
              {/* Stars */}
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <Star className="w-8 h-8 fill-[#FFD60A] text-[#FFD60A]" />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Text */}
              <div className="text-white relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl md:text-4xl" style={{ fontWeight: 700 }}>Avaliação 5.0</span>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFD60A]/20 backdrop-blur-sm rounded-full border border-[#FFD60A]/30">
                    <Award size={14} className="text-[#FFD60A]" />
                    <span className="text-xs text-white">Mercado Livre</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm md:text-base">
                  Mais de <span className="text-[#FFD60A]" style={{ fontWeight: 600 }}>10.000 clientes satisfeitos</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
