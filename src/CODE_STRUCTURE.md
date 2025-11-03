# MultSystem - Estrutura do Código

## 📁 Estrutura de Pastas

```
/
├── components/          # Componentes React
│   ├── figma/          # Componentes gerados do Figma
│   ├── improved/       # Versões melhoradas de componentes
│   └── ui/             # Componentes UI (shadcn/ui)
├── constants/          # Constantes e dados estáticos
├── hooks/              # React Hooks customizados
├── styles/             # Arquivos CSS e tokens de design
├── types/              # TypeScript type definitions
└── utils/              # Funções utilitárias
```

## 🧩 Componentes Principais

### Layout
- **MultSystemHeader**: Cabeçalho com navegação responsiva
- **MultSystemFooter**: Rodapé com informações da empresa e links para políticas
- **BackToTop**: Botão flutuante para voltar ao topo
- **WhatsAppButton**: Botão flutuante do WhatsApp
- **LegalModal**: Modal para exibição de políticas legais

### Seções
- **ImprovedMultSystemHero**: Banner principal
- **ImprovedTrustBar**: Barra de confiança com estatísticas
- **ImprovedMultSystemCategories**: Carrosséis de categorias
- **FeaturedProducts**: Produtos em destaque
- **TechnicalServices**: Serviços técnicos com Total Tech
- **BusinessUnits**: Unidades de negócio
- **SocialProof**: Depoimentos de clientes
- **WhyChooseUs**: Diferenciais da empresa
- **ContactInfo**: Formulário de contato
- **AboutSection**: Sobre a empresa

## 📦 Constants

### navigation.ts
- `NAVIGATION_ITEMS`: Itens do menu de navegação
- `CONTACT_INFO`: Informações de contato (telefones, email, endereço)
- `SOCIAL_LINKS`: Links para redes sociais e marketplace

### products.ts
- `FEATURED_PRODUCTS`: Lista de produtos em destaque
- `calculateDiscount()`: Calcula desconto percentual

### legal.ts
- `LEGAL_CONTENT`: Conteúdo de políticas legais
  - `privacyPolicy`: Política de Privacidade (LGPD)
  - `termsOfService`: Termos de Uso
  - `returnPolicy`: Política de Trocas e Devoluções

## 🪝 Hooks

### useScrollToSection
Hook para scroll suave até uma seção específica da página.

**Uso:**
```tsx
const scrollToSection = useScrollToSection();
scrollToSection('produtos');
```

### useReducedMotion
Hook para detectar preferências de movimento reduzido do usuário e dispositivos móveis.

## 🛠️ Utils

### formatters.ts
- `formatPhoneForWhatsApp()`: Formata telefone para link do WhatsApp
- `createWhatsAppLink()`: Cria link completo do WhatsApp com mensagem
- `parsePriceToNumber()`: Converte string de preço para número
- `calculatePercentageDiscount()`: Calcula desconto percentual
- `formatPhoneDisplay()`: Formata telefone para exibição

## 📝 Types

### Principais interfaces:
- `Product`: Estrutura de produto
- `Service`: Estrutura de serviço
- `Category`: Estrutura de categoria
- `NavigationItem`: Item de navegação
- `Testimonial`: Depoimento de cliente
- `Feature`: Característica/funcionalidade

## 🎨 Design System

### Cores Principais
- **Primary Blue**: `#0A84FF`
- **Secondary Blue**: `#4FC3F7`
- **Orange**: `#FF8C42`
- **Yellow**: `#FFE600`
- **Dark**: `#1C1C1E`

### Padrões
- Glassmorphism para cards e sobreposições
- Gradientes vibrantes
- Micro-interações com Motion
- Design responsivo mobile-first

## 🔗 Navegação

### IDs das Seções
- `#inicio` - Hero Section
- `#produtos` - Categorias de Produtos
- `#ofertas` - Produtos em Destaque
- `#servicos` - Serviços Técnicos
- `#contato-form` - Formulário de Contato

## 📱 Responsividade

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading de imagens com ImageWithFallback
- Scroll passivo para melhor performance
- RequestAnimationFrame para animações de scroll
- Componentes otimizados com React best practices

## 🔧 Manutenção

### Adicionar novo produto em destaque
Edite `/constants/products.ts` e adicione o item ao array `FEATURED_PRODUCTS`.

### Adicionar nova seção
1. Crie o componente em `/components/`
2. Adicione ID único à seção
3. Importe e use em `/App.tsx`
4. Adicione ao menu em `/constants/navigation.ts` se necessário

### Atualizar informações de contato
Edite `/constants/navigation.ts` no objeto `CONTACT_INFO`.

## 📋 Políticas Legais

O site inclui políticas completas em conformidade com a legislação brasileira:

### Documentos Disponíveis
- **Política de Privacidade** (LGPD): Tratamento de dados pessoais
- **Termos de Uso**: Condições de uso do site e serviços
- **Política de Trocas e Devoluções** (CDC): Direitos do consumidor

### Acesso
Disponíveis no footer através de modais elegantes.

### Documentação
- `/LEGAL_COMPLIANCE.md` - Conformidade legal detalhada
- `/POLICIES_README.md` - Guia de implementação e atualização

## 📄 Licença

Código proprietário da MultSystem. Todos os direitos reservados.
