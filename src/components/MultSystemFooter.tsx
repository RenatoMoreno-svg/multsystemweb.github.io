import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Clock,
  ShoppingBag,
  ChevronRight,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "motion/react";
import { useState } from "react";
import logoImage from "figma:asset/762bda0b261ea86f64595536f752ddd79544f7a8.png";
import { LegalModal } from "./LegalModal";
import { LEGAL_CONTENT } from "../constants/legal";

type LegalType = "privacy" | "terms" | "returns" | null;

export function MultSystemFooter() {
  const [email, setEmail] = useState("");
  const [openLegal, setOpenLegal] = useState<LegalType>(null);

  const handleMercadoLivreClick = () => {
    window.open("https://www.mercadolivre.com.br", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado por se inscrever!");
    setEmail("");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Início", id: "inicio" },
    { label: "Produtos", id: "produtos" },
    { label: "Ofertas", id: "ofertas" },
    { label: "Depoimentos", id: "social-proof" },
    { label: "Contato", id: "contato-form" },
  ];

  const categories = [
    { label: "Hardware", id: "hardware" },
    { label: "Suprimentos", id: "suprimentos" },
    { label: "Network", id: "network" },
    { label: "Automação", id: "hardware" },
    { label: "CFTV", id: "hardware" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      color: "hover:bg-[#1877F2]",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "#",
      color: "hover:bg-[#FF0000]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: handleWhatsAppClick,
      color: "hover:bg-[#25D366]",
    },
  ];

  return (
    <footer id="contato" className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#f093fb]/20 to-[#f5576c]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Mercado Livre CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 text-center border-b border-gray-700"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-[#FFE600]/20 border border-[#FFE600]/30 rounded-full mb-6"
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="#FFE600"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </motion.svg>
              ))}
            </div>
          </motion.div>
          <h3 className="text-white mb-4">Nossa Loja Oficial no Mercado Livre</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Mais de 10.000 clientes satisfeitos • Avaliação 5.0 • Entrega rápida em todo
            Brasil
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FF8C42] to-[#ff7a2e] hover:from-[#ff7a2e] hover:to-[#FF8C42] text-white shadow-2xl text-lg px-10 border-0"
              onClick={handleMercadoLivreClick}
            >
              <ShoppingBag className="mr-2" size={22} />
              Acessar Loja no Mercado Livre
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="mb-6"
            >
              <img
                src={logoImage}
                alt="MultSystems"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em tecnologia e informática há mais de 15 anos. Oferecemos
              soluções completas para empresas e pessoas físicas com produtos de
              qualidade e atendimento diferenciado.
            </p>

            {/* Newsletter */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/20 to-[#ff7a2e]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h4 className="text-white mb-3 flex items-center gap-2">
                  <Mail size={20} className="text-[#FF8C42]" />
                  Newsletter Exclusiva
                </h4>
                <p className="text-gray-400 text-sm mb-5">
                  Receba ofertas e novidades
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 h-12 rounded-xl focus:bg-white/15 focus:border-white/30 transition-all"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#FF8C42] to-[#ff7a2e] hover:opacity-90 border-0 px-8 h-12 shadow-lg hover:shadow-xl transition-all rounded-xl"
                  >
                    OK
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white mb-6 flex items-center gap-2">
              <ChevronRight size={18} className="text-[#4FC3F7]" />
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-[#FF8C42] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-gray-500 group-hover:text-[#FF8C42] group-hover:translate-x-1 transition-all"
                    />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white mb-6 flex items-center gap-2">
              <ChevronRight size={18} className="text-[#4FC3F7]" />
              Categorias
            </h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <motion.li
                  key={category.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(category.id)}
                    className="text-gray-300 hover:text-[#FF8C42] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-gray-500 group-hover:text-[#FF8C42] group-hover:translate-x-1 transition-all"
                    />
                    {category.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white mb-6 flex items-center gap-2">
              <ChevronRight size={18} className="text-[#4FC3F7]" />
              Contato
            </h4>
            <ul className="space-y-4 mb-8">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-sm"
              >
                <Phone size={18} className="text-[#FF8C42] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+551134567890"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    (11) 3456-7890
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Seg-Sex: 8h-18h</p>
                </div>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-sm"
              >
                <MessageCircle
                  size={18}
                  className="text-[#25D366] mt-0.5 flex-shrink-0"
                />
                <div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-gray-300 hover:text-[#25D366] transition-colors"
                  >
                    (11) 99999-9999
                  </button>
                  <p className="text-gray-500 text-xs mt-1">WhatsApp 24/7</p>
                </div>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-sm"
              >
                <Mail size={18} className="text-[#FF8C42] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@multsystems.com.br"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contato@multsystems.com.br
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-sm"
              >
                <MapPin size={18} className="text-[#4FC3F7] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Paulista, 1000
                  <br />
                  São Paulo - SP
                </span>
              </motion.li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-white mb-4 text-sm">Redes Sociais</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={social.action || (() => window.open(social.href, "_blank"))}
                    className={`relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg group ${social.color}`}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <social.icon size={20} className="relative z-10" strokeWidth={2.5} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © 2025 MultSystems. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => setOpenLegal("privacy")}
                className="text-gray-400 hover:text-[#FF8C42] transition-colors cursor-pointer"
              >
                Política de Privacidade
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => setOpenLegal("terms")}
                className="text-gray-400 hover:text-[#FF8C42] transition-colors cursor-pointer"
              >
                Termos de Uso
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => setOpenLegal("returns")}
                className="text-gray-400 hover:text-[#FF8C42] transition-colors cursor-pointer"
              >
                Trocas e Devoluções
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Legal Modals */}
      <LegalModal
        isOpen={openLegal === "privacy"}
        onClose={() => setOpenLegal(null)}
        content={LEGAL_CONTENT.privacyPolicy}
      />
      <LegalModal
        isOpen={openLegal === "terms"}
        onClose={() => setOpenLegal(null)}
        content={LEGAL_CONTENT.termsOfService}
      />
      <LegalModal
        isOpen={openLegal === "returns"}
        onClose={() => setOpenLegal(null)}
        content={LEGAL_CONTENT.returnPolicy}
      />
    </footer>
  );
}
