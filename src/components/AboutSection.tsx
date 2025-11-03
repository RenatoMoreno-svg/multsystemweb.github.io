import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Target, Eye, Heart, Award, Users, Briefcase } from "lucide-react";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        'Prover a "melhor entrega" em soluções em tecnologia da informação, com total comprometimento a satisfação de nossos clientes.',
    },
    {
      icon: Eye,
      title: "Visão",
      items: [
        "Ética nas relações",
        "Excelência na execução",
        "Credibilidade com mercado",
        "Eficiência",
      ],
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Nos Comprometermos em tornar a experiência de nossos clientes únicas, através de atendimento e comprometimento com os mesmos.",
    },
  ];

  const portfolio = [
    {
      icon: Briefcase,
      title: "Comercialização de Produtos",
      description: "Soluções completas em hardware e software",
    },
    {
      icon: Users,
      title: "Terceirização Especializada",
      description: "Mão de obra qualificada para sua empresa",
    },
    {
      icon: Award,
      title: "Consultoria Sênior",
      description: "Expertise para projetos complexos",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-bl from-[#0A84FF]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF8C42]/5 to-transparent rounded-full blur-3xl"></div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A84FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Sobre a MultSystems"
          subtitle="Nascemos Respirando TI"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* História */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12 border border-gray-100 relative overflow-hidden group"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0A84FF]/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#4FC3F7]/5 to-transparent"></div>
            
            {/* Decorative dots */}
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#0A84FF]/20"></div>
            <div className="absolute top-10 right-10 w-1.5 h-1.5 rounded-full bg-[#4FC3F7]/20"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-[#FF8C42]/20"></div>
            
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="w-1 h-16 bg-gradient-to-b from-[#0A84FF] to-[#4FC3F7] rounded-full relative">
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A84FF] to-[#4FC3F7] rounded-full animate-pulse opacity-50"></div>
              </div>
              <div>
                <h3 className="text-[#1C1C1E] mb-4">Nossa História</h3>
                <p className="text-[#3C3C43] leading-relaxed mb-4">
                  Desde a década de 80 iniciamos atividades com primeiros computadores
                  pessoais e temos evoluímos sempre com nosso negócio focado em oferecer
                  soluções de TI em conformidade com as melhores práticas de mercado,
                  buscando sempre prover a melhor experiência aos nossos clientes.
                </p>
                <p className="text-[#3C3C43] leading-relaxed">
                  Tudo que sua empresa precisa em TI, pode contar com a MultSystems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Portfólio */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-[#1C1C1E] text-center mb-8">
              Nosso Portfólio de Soluções
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow relative group overflow-hidden"
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#0A84FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4FC3F7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0A84FF] to-[#4FC3F7] rounded-lg flex items-center justify-center mb-4 relative shadow-lg group-hover:shadow-xl transition-shadow">
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF] to-[#4FC3F7] rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <item.icon className="text-white relative z-10" size={24} />
                  </div>
                  <h4 className="text-[#1C1C1E] mb-2">{item.title}</h4>
                  <p className="text-[#86868B] text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Missão, Visão e Valores */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 relative group overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#FF8C42]/0 group-hover:border-[#FF8C42]/40 transition-all duration-300 rounded-tr-lg"></div>
                  
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/0 to-transparent group-hover:from-[#FF8C42]/5 transition-all duration-300"></div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C42] to-[#ff7a2e] rounded-lg flex items-center justify-center mb-4 relative shadow-lg group-hover:shadow-xl transition-shadow">
                    {/* Icon shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                    <value.icon className="text-white relative z-10" size={24} />
                  </div>
                  <h4 className="text-[#1C1C1E] mb-3">{value.title}</h4>
                  {value.description ? (
                    <p className="text-[#3C3C43] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {value.items?.map((item, i) => (
                        <li
                          key={i}
                          className="text-[#3C3C43] text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-[#0A84FF] rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
