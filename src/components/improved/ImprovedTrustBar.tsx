import { Shield, Truck, CreditCard, Headphones, Award, Clock } from "lucide-react";
import { motion } from "motion/react";

export function ImprovedTrustBar() {
  const features = [
    {
      icon: Shield,
      text: "Compra 100% Segura",
      subtext: "SSL & Certificados",
    },
    {
      icon: Truck,
      text: "Frete Grátis Brasil",
      subtext: "Compras acima R$ 299",
    },
    {
      icon: CreditCard,
      text: "Parcele em até 12x",
      subtext: "Sem juros no cartão",
    },
    {
      icon: Award,
      text: "Garantia Estendida",
      subtext: "Produtos originais",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#1C1C1E] via-[#2a2a2a] to-[#1C1C1E] border-y-2 border-[#FF8C42]/20 relative overflow-hidden py-12">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0A84FF]/5 via-transparent to-[#FF8C42]/5"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}></div>
      
      <div 
        className="container-custom relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-4 text-white group cursor-pointer"
            >
              <motion.div
                className="bg-[#FF8C42]/20 p-4 rounded-2xl group-hover:bg-[#FF8C42]/30 transition-colors border border-[#FF8C42]/20 group-hover:border-[#FF8C42]/40 shadow-lg"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon size={28} className="text-[#FF8C42]" />
              </motion.div>
              <div className="text-center">
                <p className="text-sm font-semibold text-white group-hover:text-[#FF8C42] transition-colors mb-1">
                  {feature.text}
                </p>
                <p className="text-xs text-gray-400">
                  {feature.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-[#FF8C42] to-transparent mt-8 rounded-full"
        />
      </div>
    </div>
  );
}
