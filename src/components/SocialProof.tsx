import { Card } from "./ui/card";
import { Star, Quote, TrendingUp, Award, Users, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function SocialProof() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Gerente de TI",
      company: "Tech Solutions",
      rating: 5,
      comment: "Excelente atendimento e produtos de qualidade. Sempre compro na MultSystems pelo Mercado Livre. Recomendo!",
      avatar: "CS",
      gradient: "from-[#667eea] to-[#764ba2]",
    },
    {
      name: "Maria Santos",
      role: "Empresária",
      company: "Contabilidade MS",
      rating: 5,
      comment: "Entrega rápida, preços competitivos e suporte excepcional. Já é a terceira vez que compro e sempre satisfeita.",
      avatar: "MS",
      gradient: "from-[#f093fb] to-[#f5576c]",
    },
    {
      name: "João Oliveira",
      role: "Freelancer",
      company: "Designer Gráfico",
      rating: 5,
      comment: "Montei meu setup gamer inteiro com a MultSystems. Produtos originais e entrega super rápida. Top demais!",
      avatar: "JO",
      gradient: "from-[#4facfe] to-[#00f2fe]",
    },
  ];

  const stats = [
    {
      number: "10k+",
      label: "Clientes Satisfeitos",
      icon: Users,
      gradient: "from-[#667eea] to-[#764ba2]",
      glowColor: "rgba(102, 126, 234, 0.3)",
    },
    {
      number: "98%",
      label: "Avaliações Positivas",
      icon: TrendingUp,
      gradient: "from-[#34C759] to-[#30B350]",
      glowColor: "rgba(52, 199, 89, 0.3)",
    },
    {
      number: "5.0",
      label: "Nota no Mercado Livre",
      icon: Star,
      gradient: "from-[#FFD600] to-[#FFA000]",
      glowColor: "rgba(255, 214, 0, 0.3)",
    },
    {
      number: "15+",
      label: "Anos de Experiência",
      icon: Award,
      gradient: "from-[#f093fb] to-[#f5576c]",
      glowColor: "rgba(245, 87, 108, 0.3)",
    },
  ];

  return (
    <section 
      className="py-32 relative overflow-hidden" 
      id="social-proof"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute inset-0 gradient-mesh opacity-40"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-[#f093fb]/20 to-[#f5576c]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: stat.glowColor }}
                ></div>

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 text-center overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.gradient}`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="text-white" size={24} strokeWidth={2.5} />
                  </motion.div>

                  {/* Number */}
                  <div 
                    className={`mb-2 text-5xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    style={{ fontWeight: 800 }}
                  >
                    {stat.number}
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 text-sm">{stat.label}</p>

                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFD600]/20 to-[#FFA000]/20 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-[#FFD600]/30"
          >
            <Star className="text-[#FFA000]" size={20} fill="#FFA000" />
            <span className="text-[#FF8C42] text-sm">DEPOIMENTOS</span>
            <Star className="text-[#FFA000]" size={20} fill="#FFA000" />
          </motion.div>
          <h2 className="text-[#1C1C1E] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Milhares de clientes satisfeitos confiam na MultSystems para suas necessidades em tecnologia
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative h-full"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

              <Card className="relative h-full p-8 bg-white/90 backdrop-blur-xl border-white/50 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${testimonial.gradient}`}></div>

                {/* Quote decoration */}
                <Quote className="absolute top-6 right-6 text-gray-100 group-hover:text-gray-200 transition-colors" size={56} />
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                      >
                        <Star size={18} fill="#FFD600" color="#FFD600" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`relative w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                    >
                      <div className="absolute inset-0 rounded-2xl animate-pulse bg-gradient-to-br from-white/20 to-transparent"></div>
                      <span className="relative z-10">{testimonial.avatar}</span>
                    </motion.div>
                    <div>
                      <h4 className="text-[#1C1C1E] text-sm mb-1">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mercado Livre Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.01, y: -3 }}
          className="text-center group relative max-w-3xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD600] to-[#FFA000] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          <Card className="relative inline-block w-full p-10 bg-gradient-to-br from-[#FFD600]/10 via-white/80 to-[#FFA000]/10 backdrop-blur-xl border-2 border-[#FFD600]/30 rounded-3xl shadow-2xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD600' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              {/* Stars badge */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex justify-center items-center gap-2 mb-6"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  >
                    <Star size={32} fill="#FFD600" color="#FFD600" className="drop-shadow-lg" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Content */}
              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD600]/20 to-[#FFA000]/20 backdrop-blur-sm rounded-full mb-2">
                  <Sparkles size={16} className="text-[#FFA000]" />
                  <span className="text-xs text-gray-700">Loja Oficial</span>
                </div>
                <h4 className="text-[#1C1C1E] text-xl mb-2">Mercado Livre Premium</h4>
                <p className="text-gray-600">
                  Mais de <span className="text-[#FFA000]">10.000 vendas</span> realizadas com <span className="text-[#34C759]">98% de aprovação</span>
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#FFD600]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#FFA000]/20 to-transparent rounded-full blur-3xl"></div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
