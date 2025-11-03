import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { ShoppingBag, Building2, Globe, Check, Sparkles } from "lucide-react";
import { useScrollToSection } from "../hooks/useScrollToSection";

export function BusinessUnits() {
  const scrollToSection = useScrollToSection();

  const handleContactClick = () => {
    scrollToSection("contato");
  };

  const units = [
    {
      icon: ShoppingBag,
      title: "VAREJO",
      subtitle: "Atendimento personalizado",
      features: [
        "Mais de 2000 itens em estoque",
        "Atendimento ao consumidor final",
        "Garantia estendida disponível",
      ],
      gradient: "from-[#667eea] via-[#764ba2] to-[#667eea]",
      iconBg: "bg-gradient-to-br from-[#667eea] to-[#764ba2]",
      glowColor: "rgba(102, 126, 234, 0.5)",
    },
    {
      icon: Building2,
      title: "CORPORATIVO",
      subtitle: "Soluções empresariais",
      features: [
        "Atendimento para empresas",
        "Time de vendas especializado",
        "Projetos customizados",
      ],
      gradient: "from-[#f093fb] via-[#f5576c] to-[#f093fb]",
      iconBg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
      glowColor: "rgba(245, 87, 108, 0.5)",
    },
    {
      icon: Globe,
      title: "E-COMMERCE",
      subtitle: "Compras online 24/7",
      features: [
        "Conveniência para todos clientes",
        "Oportunidades e ofertas especiais",
        "Entrega rápida em todo Brasil",
      ],
      gradient: "from-[#4facfe] via-[#00f2fe] to-[#4facfe]",
      iconBg: "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]",
      glowColor: "rgba(79, 172, 254, 0.5)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section className="py-32 relative overflow-hidden">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Animated floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#4facfe]/20 to-[#00f2fe]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Unidades de Negócios"
          subtitle="Soluções personalizadas para cada tipo de cliente com excelência e inovação"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {units.map((unit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
              }}
              className="group relative"
            >
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gray-200/0 group-hover:border-gray-300/60 transition-all duration-300 rounded-tl-2xl z-10"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gray-200/0 group-hover:border-gray-300/60 transition-all duration-300 rounded-br-2xl z-10"></div>
              
              {/* Card with glassmorphism */}
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
                
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${unit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="animate-shimmer absolute inset-0"></div>
                </div>

                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${unit.gradient}`}
                ></div>
                
                {/* Decorative geometric shapes */}
                <div className="absolute top-8 right-8 w-16 h-16 border border-gray-100 rotate-45 opacity-20"></div>
                <div className="absolute bottom-12 left-8 w-12 h-12 border border-gray-100 rounded-full opacity-20"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Floating icon with glow */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-6"
                  >
                    <div
                      className="absolute inset-0 blur-2xl opacity-50"
                      style={{ backgroundColor: unit.glowColor }}
                    ></div>
                    <div
                      className={`relative w-20 h-20 ${unit.iconBg} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_40px_${unit.glowColor}] transition-all duration-500`}
                    >
                      <unit.icon className="text-white" size={36} strokeWidth={2.5} />
                    </div>
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-full mb-4 border border-white/50"
                  >
                    <Sparkles size={14} className="text-[#FF8C42]" />
                    <span className="text-xs text-gray-700">Premium</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-[#1C1C1E] mb-2 tracking-wide bg-clip-text">
                    {unit.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-600 mb-6 text-sm">
                    {unit.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4">
                    {unit.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div
                            className={`w-6 h-6 ${unit.iconBg} rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
                          >
                            <Check className="text-white" size={14} strokeWidth={3} />
                          </div>
                        </div>
                        <span className="text-[#3C3C43] leading-relaxed text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <motion.button
                    onClick={handleContactClick}
                    whileHover={{ x: 5 }}
                    className={`mt-8 flex items-center gap-2 text-sm bg-gradient-to-r ${unit.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300 cursor-pointer`}
                  >
                    Saiba mais
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`bg-gradient-to-r ${unit.gradient}`}>
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#667eea]"/>
                    </svg>
                  </motion.button>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl rounded-full shadow-lg border border-white/40">
            <Sparkles className="text-[#FF8C42]" size={18} />
            <span className="text-gray-700">
              Escolha a melhor solução para o seu negócio
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
