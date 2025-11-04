import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Zap, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function ContactInfo() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+551134567890";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contato@multsystems.com.br";
  };

  const handleOpenGoogleMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=R.+Campos+Sales,+508+-+Centro,+Itatiba+-+SP", "_blank");
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "(11) 99999-9999",
      action: handleWhatsAppClick,
      buttonText: "Enviar Mensagem",
      gradient: "from-[#25D366] via-[#128C7E] to-[#075E54]",
      iconBg: "bg-gradient-to-br from-[#25D366] to-[#128C7E]",
      glowColor: "rgba(37, 211, 102, 0.4)",
      badge: "Resposta rápida",
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "(11) 3456-7890",
      action: handlePhoneClick,
      buttonText: "Ligar Agora",
      gradient: "from-[#667eea] via-[#764ba2] to-[#667eea]",
      iconBg: "bg-gradient-to-br from-[#667eea] to-[#764ba2]",
      glowColor: "rgba(102, 126, 234, 0.4)",
      badge: "Seg-Sex: 8h-18h",
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "contato@multsystems.com.br",
      action: handleEmailClick,
      buttonText: "Enviar E-mail",
      gradient: "from-[#f093fb] via-[#f5576c] to-[#f093fb]",
      iconBg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
      glowColor: "rgba(245, 87, 108, 0.4)",
      badge: "24h para resposta",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="contato-form" className="py-32 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 gradient-mesh opacity-60"></div>
      
      {/* Floating orbs */}
      {!shouldReduceMotion && (
        <>
          <div className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#f093fb]/20 to-[#f5576c]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Entre em Contato"
          subtitle="Estamos prontos para atender você com excelência e agilidade"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Métodos de Contato */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: method.glowColor }}
                ></div>

                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 overflow-hidden h-full transition-all duration-500 group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
                  
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${method.gradient}`}></div>
                  
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="animate-shimmer absolute inset-0"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Icon with animation */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="relative mb-6"
                    >
                      <div
                        className="absolute inset-0 blur-2xl opacity-60"
                        style={{ backgroundColor: method.glowColor }}
                      ></div>
                      <div
                        className={`relative w-20 h-20 ${method.iconBg} rounded-2xl flex items-center justify-center shadow-2xl`}
                      >
                        <method.icon className="text-white" size={36} strokeWidth={2.5} />
                      </div>
                    </motion.div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-sm rounded-full mb-4 border border-white/60">
                      <Zap size={12} className="text-[#FF8C42]" />
                      <span className="text-xs text-gray-700">{method.badge}</span>
                    </div>

                    <h3 className="text-[#1C1C1E] mb-2">{method.title}</h3>
                    <p className="text-[#3C3C43] mb-6 text-sm break-all">{method.description}</p>
                    
                    <Button
                      onClick={method.action}
                      className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 h-12 group-hover:scale-105`}
                    >
                      <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                      {method.buttonText}
                    </Button>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Informações Adicionais com Bento Grid */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Horário de Atendimento */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/30 to-[#4FC3F7]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl overflow-hidden border border-white/50 group-hover:shadow-[0_20px_80px_rgba(10,132,255,0.2)] transition-all duration-500">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0A84FF] to-[#4FC3F7]"></div>

                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/5 to-[#4FC3F7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="animate-shimmer absolute inset-0"></div>
                </div>

                {/* Decorative corners */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#0A84FF]/0 group-hover:border-[#0A84FF]/40 transition-all duration-300 rounded-tl-2xl"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#4FC3F7]/0 group-hover:border-[#4FC3F7]/40 transition-all duration-300 rounded-br-2xl"></div>

                <div className="relative z-10 flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#0A84FF] to-[#4FC3F7] rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                  >
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></div>
                    <Clock size={36} strokeWidth={2.5} className="text-white relative z-10" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-[#1C1C1E]">Horário de Atendimento</h3>
                      <Sparkles size={18} className="text-[#0A84FF] animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-[#0A84FF]/30 transition-all"
                      >
                        <div className="w-2.5 h-2.5 bg-[#0A84FF] rounded-full"></div>
                        <span className="text-[#3C3C43]">Segunda a Sexta: 8h às 18h</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-[#0A84FF]/30 transition-all"
                      >
                        <div className="w-2.5 h-2.5 bg-[#4FC3F7] rounded-full"></div>
                        <span className="text-[#3C3C43]">Sábado: 8h às 12h</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 rounded-xl border border-[#25D366]/30 group-hover:border-[#25D366]/50 transition-all"
                      >
                        <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse shadow-lg shadow-[#25D366]/50"></div>
                        <span className="text-[#1C1C1E]">WhatsApp 24/7</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner orb */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#0A84FF]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </motion.div>

            {/* Localização */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/30 to-[#FF6B35]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl overflow-hidden border border-white/50 group-hover:shadow-[0_20px_80px_rgba(255,140,66,0.2)] transition-all duration-500">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF8C42] to-[#FF6B35]"></div>

                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/5 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="animate-shimmer absolute inset-0"></div>
                </div>

                {/* Decorative corners */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#FF8C42]/0 group-hover:border-[#FF8C42]/40 transition-all duration-300 rounded-tl-2xl"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#FF6B35]/0 group-hover:border-[#FF6B35]/40 transition-all duration-300 rounded-br-2xl"></div>

                <div className="relative z-10 flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                  >
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></div>
                    <MapPin size={36} strokeWidth={2.5} className="text-white relative z-10" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-[#1C1C1E] mb-6">Nossa Localização</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-[#FF8C42]/30 transition-all">
                        <p className="text-[#3C3C43] leading-relaxed">
                          R. Campos Sales, 508 - Centro<br />
                          Itatiba - SP
                        </p>
                      </div>
                      <div className="space-y-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] text-white rounded-xl hover:opacity-90 transition-all shadow-lg w-full justify-center"
                          onClick={() => setIsMapOpen(true)}
                        >
                          <MapPin size={18} />
                          <span>Ver no Mapa</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-[#FF8C42] border-2 border-[#FF8C42] rounded-xl transition-all shadow-lg w-full justify-center"
                          onClick={handleOpenGoogleMaps}
                        >
                          <ExternalLink size={18} />
                          <span>Abrir no Google Maps</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner orb */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#FF8C42]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action Premium */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A84FF] to-[#4FC3F7] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0A84FF]/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#4FC3F7]/10 to-transparent rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0A84FF]/20 to-[#4FC3F7]/20 backdrop-blur-sm rounded-full mb-6 border border-[#0A84FF]/30"
                >
                  <Sparkles size={16} className="text-[#0A84FF]" />
                  <span className="text-sm text-gray-700">Atendimento Premium</span>
                </motion.div>

                <h3 className="text-[#1C1C1E] mb-4">
                  Precisa de ajuda para escolher o produto ideal?
                </h3>
                <p className="text-[#3C3C43] mb-8 leading-relaxed">
                  Nossa equipe de especialistas está pronta para auxiliar você na melhor
                  escolha para suas necessidades em TI com soluções personalizadas.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white shadow-xl hover:shadow-2xl transition-all border-0 h-14 px-8 text-base"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Falar no WhatsApp
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handlePhoneClick}
                      className="bg-white hover:bg-gray-50 text-[#0A84FF] border-2 border-[#0A84FF] transition-all h-14 px-8 text-base shadow-lg"
                    >
                      <Phone className="mr-2" size={20} />
                      Ligar Agora
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal do Mapa */}
      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] text-white">
            <DialogTitle className="flex items-center gap-3">
              <MapPin size={24} />
              MultSystem - Nossa Localização
            </DialogTitle>
            <DialogDescription className="text-white/90 mt-2">
              R. Campos Sales, 508 - Centro, Itatiba - SP
            </DialogDescription>
          </DialogHeader>
          <div className="w-full h-[500px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8956781234567!2d-46.83789!3d-23.00556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf26e00000000%3A0x0!2sR.%20Campos%20Sales%2C%20508%20-%20Centro%2C%20Itatiba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização MultSystem"
            ></iframe>
          </div>
          <div className="p-6 pt-4 bg-gray-50 border-t">
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => setIsMapOpen(false)}
                className="px-6"
              >
                Fechar
              </Button>
              <Button
                onClick={handleOpenGoogleMaps}
                className="bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] hover:opacity-90 text-white px-6"
              >
                <ExternalLink className="mr-2" size={18} />
                Abrir no Google Maps
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
