import {
  Monitor,
  HardDrive,
  Printer,
  Shield,
  Camera,
  Phone,
  FileText,
  Droplet,
  Wifi,
  Share2,
  Radio,
  Cable,
  Package,
} from "lucide-react";
import { MultSystemCategoryCard } from "../MultSystemCategoryCard";
import { SectionHeader } from "../SectionHeader";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function ImprovedMultSystemCategories() {
  const handleMercadoLivreClick = () => {
    window.open("https://www.mercadolivre.com.br", "_blank");
  };

  return (
    <div 
      className="bg-[#F5F6FA] relative overflow-hidden py-20 lg:py-32" 
      id="produtos"
    >
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white transform rotate-180"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          fill="currentColor"
        >
          <path d="M0,0 C360,74 1080,74 1440,0 L1440,74 L0,74 Z" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Hardware Section */}
        <section id="hardware" className="mb-24 scroll-mt-20">
          <SectionHeader
            emoji="💻"
            badge="HARDWARE"
            badgeColor="text-[#0A84FF]"
            title="Equipamentos de Alta Performance"
            subtitle="Componentes e equipamentos de última geração para sua empresa ou setup pessoal. Produtos originais com garantia e melhor custo-benefício do mercado."
          />
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Monitor}
                  title="Computadores & Monitores"
                  items={["Desktops Completos", "Monitores LED/4K", "Monitores Gamer"]}
                  iconColor="text-[#0A84FF]"
                  delay={0}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={HardDrive}
                  title="Componentes"
                  items={["Processadores Intel/AMD", "Memória RAM DDR4/DDR5", "SSD NVMe & HD"]}
                  iconColor="text-[#0A84FF]"
                  delay={0.1}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Printer}
                  title="Impressoras"
                  items={["Multifuncionais", "Laser Monocromática", "Térmicas PDV"]}
                  iconColor="text-[#0A84FF]"
                  delay={0.2}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover:bg-[#0A84FF] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 hover:bg-[#0A84FF] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg" />
          </Carousel>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

            </motion.div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-24">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Suprimentos Section */}
        <section id="suprimentos" className="mb-24 scroll-mt-20">
          <SectionHeader
            emoji="📄"
            badge="SUPRIMENTOS"
            badgeColor="text-[#0A84FF]"
            title="Insumos para seu Escritório"
            subtitle="Produtos essenciais para manter sua operação sempre funcionando com qualidade e economia."
          />
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={FileText}
                  title="Papel A4"
                  items={["Resmas 75g Sulfite", "Resmas 90g Premium", "Papel Fotográfico"]}
                  iconColor="text-[#0A84FF]"
                  delay={0}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Droplet}
                  title="Cartuchos"
                  items={["HP Originais", "Canon Originais", "Epson Originais"]}
                  iconColor="text-[#0A84FF]"
                  delay={0.1}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Droplet}
                  title="Toners"
                  items={["Originais Lacrados", "Compatíveis Qualidade", "Todas as marcas"]}
                  iconColor="text-[#0A84FF]"
                  delay={0.2}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover:bg-[#0A84FF] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 hover:bg-[#0A84FF] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg" />
          </Carousel>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-24">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Network Section */}
        <section id="network" className="scroll-mt-20">
          <SectionHeader
            emoji="🌐"
            badge="NETWORK"
            badgeColor="text-[#4FC3F7]"
            title="Infraestrutura de Rede Profissional"
            subtitle="Soluções completas para conectividade empresarial com equipamentos de marcas líderes do mercado."
          />
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Wifi}
                  title="Roteadores"
                  items={["Wi-Fi 6 Mesh", "Dual Band AC", "Alta Performance"]}
                  iconColor="text-[#4FC3F7]"
                  delay={0}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Share2}
                  title="Switches"
                  items={["Gerenciáveis L2/L3", "PoE+ Enterprise", "Gigabit 24/48 portas"]}
                  iconColor="text-[#4FC3F7]"
                  delay={0.1}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Radio}
                  title="Access Points"
                  items={["Indoor Corporativo", "Outdoor IP67", "Controladores Cloud"]}
                  iconColor="text-[#4FC3F7]"
                  delay={0.2}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Cable}
                  title="Cabeamento Estruturado"
                  items={["Cat5e/Cat6/Cat6a", "Patch Cords", "Conectores RJ45"]}
                  iconColor="text-[#4FC3F7]"
                  delay={0.3}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <MultSystemCategoryCard
                  icon={Cable}
                  title="Fibra Óptica"
                  items={["Monomodo/Multimodo", "Patch Cords Blindados", "Conectores SC/LC"]}
                  iconColor="text-[#4FC3F7]"
                  delay={0.4}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover:bg-[#4FC3F7] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 hover:bg-[#4FC3F7] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg" />
          </Carousel>
        </section>
      </div>
    </div>
  );
}
