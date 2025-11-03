import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Wrench, 
  Laptop, 
  Monitor, 
  Zap, 
  Shield, 
  CheckCircle2,
  Clock,
  HeadphonesIcon,
  Sparkles,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CONTACT_INFO } from "../constants/navigation";
import { useScrollToSection } from "../hooks/useScrollToSection";
import { createWhatsAppLink } from "../utils/formatters";

const services = [
  {
    id: 1,
    icon: Laptop,
    title: "Manutenção de Notebooks",
    description: "Limpeza, troca de componentes, upgrade de hardware e otimização de desempenho",
    features: [
      "Troca de tela e teclado",
      "Upgrade de RAM e SSD",
      "Limpeza térmica",
      "Reparo de placa-mãe"
    ],
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1709102884400-b50ca1a12bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjByZXBhaXIlMjB0ZWNobmljaWFufGVufDF8fHx8MTc2MjEzNzM5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    icon: Monitor,
    title: "Manutenção de Desktops",
    description: "Formatação, montagem, upgrade e manutenção preventiva e corretiva",
    features: [
      "Montagem personalizada",
      "Formatação e instalação",
      "Diagnóstico completo",
      "Manutenção preventiva"
    ],
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1756801370266-f589801cedc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwY29tcHV0ZXIlMjBtYWludGVuYW5jZXxlbnwxfHx8fDE3NjIxMzczOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    icon: Zap,
    title: "Instalação de No-Break",
    description: "Proteção completa para seus equipamentos contra quedas de energia e oscilações",
    features: [
      "Dimensionamento correto",
      "Instalação profissional",
      "Testes de funcionamento",
      "Garantia de serviço"
    ],
    gradient: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1591964006776-90b32e88f5ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhY2t1cCUyMGJhdHRlcnl8ZW58MXx8fHwxNzYyMTM3Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    icon: HeadphonesIcon,
    title: "Suporte Técnico",
    description: "Atendimento especializado para resolver problemas e tirar dúvidas",
    features: [
      "Suporte remoto",
      "Visita técnica",
      "Atendimento prioritário",
      "Consultoria técnica"
    ],
    gradient: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1674471361339-2e1e1dbd3e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwJTIwZGVzayUyMHN1cHBvcnQlMjB0ZWNobmljaWFufGVufDF8fHx8MTc2MjEzNzczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Garantia de Serviço",
    description: "Todos os serviços com garantia de 90 dias"
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Diagnóstico em até 24h úteis"
  },
  {
    icon: Wrench,
    title: "Técnicos Certificados",
    description: "Equipe especializada e experiente"
  },
  {
    icon: Sparkles,
    title: "Orçamento Gratuito",
    description: "Avaliação sem compromisso"
  },
];

export function TechnicalServices() {
  const scrollToSection = useScrollToSection();

  const handleContactClick = () => {
    scrollToSection("contato-form");
  };

  const handleWhatsAppAssistencia = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para assistência técnica.";
    window.open(createWhatsAppLink(CONTACT_INFO.whatsappTech, message), "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 lg:py-20" id="servicos">

      <div className="container-custom">
        {/* Section Header */}
        <SectionHeader
          badge="ASSISTÊNCIA TÉCNICA"
          title="Serviços Especializados"
          subtitle="Assistência técnica realizada pela Total Tech - Equipe certificada para cuidar dos seus equipamentos com profissionalismo e garantia"
          Icon={Wrench}
          emoji="🔧"
        />

        {/* Total Tech Badge */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block">
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#0A84FF]/30 rounded-tl-xl"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#0A84FF]/30 rounded-tr-xl"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#0A84FF]/30 rounded-bl-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#0A84FF]/30 rounded-br-xl"></div>
            
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-[#0A84FF]/5 rounded-2xl blur-xl"></div>
            
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0A84FF]/10 via-[#4FC3F7]/10 to-[#0A84FF]/10 border-2 border-[#0A84FF]/30 rounded-2xl px-8 py-4 shadow-lg relative">
            <div className="flex items-center gap-2">
              <Wrench className="text-[#0A84FF]" size={24} />
              <div className="h-8 w-px bg-[#0A84FF]/30"></div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600 mb-1">Parceiro Técnico Oficial</p>
              <p className="text-[#0A84FF] text-xl tracking-wide">
                <span className="font-bold">TOTAL</span> <span className="font-light">TECH</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-px bg-[#0A84FF]/30"></div>
              <MessageCircle className="text-[#25D366]" size={24} />
            </div>
          </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-[#0A84FF]/30 h-full overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Service Image - First on mobile, right on desktop */}
                <div className="w-full lg:w-64 flex-shrink-0 lg:order-2">
                  <div className="relative overflow-hidden h-64 lg:h-full lg:min-h-[500px]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 lg:order-1">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <service.icon size={32} className="text-white" strokeWidth={2.5} />
                  </div>

                  <Badge className="mb-3 bg-[#FF8C42]/10 text-[#FF8C42] border-[#FF8C42]/20 hover:bg-[#FF8C42]/20">
                    Serviço Profissional
                  </Badge>

                  <h3 className="text-[#1C1C1E] mb-3 group-hover:text-[#0A84FF] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 
                          size={20} 
                          className="text-[#0A84FF] flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleWhatsAppAssistencia}
                      className="flex-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#25D366]/90 hover:to-[#128C7E]/90 text-white border-0 shadow-lg group/btn"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      WhatsApp Total Tech
                    </Button>
                    <Button
                      onClick={handleContactClick}
                      variant="outline"
                      className="flex-1 border-2 border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white group/btn"
                    >
                      Mais Informações
                      <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="relative">
          {/* Premium Background Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A84FF] via-[#4FC3F7] to-[#0A84FF] p-[2px] shadow-xl">
            <div className="relative bg-white rounded-3xl p-6 lg:p-10">
              <div>
                <div className="text-center mb-12">
                  <Badge className="mb-4 bg-gradient-to-r from-[#0A84FF] to-[#4FC3F7] text-white border-0 shadow-lg px-6 py-2">
                    ⚡ Diferenciais MultSystem
                  </Badge>
                  <h3 className="text-[#1C1C1E] mb-3">
                    Por que escolher nossos serviços?
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Compromisso com qualidade, agilidade e satisfação total do cliente
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-[#0A84FF] to-[#4FC3F7] rounded-2xl flex items-center justify-center shadow-lg">
                        <benefit.icon size={24} className="text-white" strokeWidth={2.5} />
                      </div>
                      <h4 className="text-[#1C1C1E] mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="text-center mt-10">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-2xl mx-auto">
                    <Button
                      size="lg"
                      onClick={handleWhatsAppAssistencia}
                      className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#25D366]/90 hover:to-[#128C7E]/90 text-white border-0 h-12 px-8 rounded-2xl w-full sm:w-auto"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      WhatsApp Total Tech
                    </Button>
                    <Button
                      size="lg"
                      onClick={handleContactClick}
                      variant="outline"
                      className="border-2 border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white h-12 px-8 rounded-2xl w-full sm:w-auto"
                    >
                      <Wrench size={18} className="mr-2" />
                      Outros Contatos
                    </Button>
                  </div>
                  <div className="mt-4 space-y-1">
                    <p className="text-[#0A84FF] text-sm">
                      💬 <strong>Assistência Técnica Total Tech</strong>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Atendimento WhatsApp de segunda a sexta, das 8h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
