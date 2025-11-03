import { NavigationItem } from "../types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Início", id: "inicio" },
  { label: "Produtos", id: "produtos" },
  { label: "Ofertas", id: "ofertas" },
  { label: "Serviços", id: "servicos" },
  { label: "Contato", id: "contato-form" },
];

export const CONTACT_INFO = {
  phone: "+551134567890",
  phoneDisplay: "(11) 3456-7890",
  whatsapp: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  whatsappTech: "5511987654321",
  whatsappTechDisplay: "(11) 98765-4321",
  email: "contato@multsystems.com.br",
  address: "R. Campos Sales, 508 - Centro, Itatiba - SP",
  mapsUrl: "https://www.google.com/maps/place/R.+Campos+Sales,+508+-+Centro,+Itatiba+-+SP",
} as const;

export const SOCIAL_LINKS = {
  mercadoLivre: "https://www.mercadolivre.com.br",
} as const;
