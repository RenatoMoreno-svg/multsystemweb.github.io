# Clean Code Practices - MultSystem

## 📋 Princípios Aplicados

### 1. Single Responsibility Principle (SRP)
Cada componente tem uma responsabilidade única e bem definida:
- `ProductCard` - Renderiza um único produto
- `BackToTop` - Gerencia apenas o scroll para o topo
- `useScrollToSection` - Hook dedicado ao scroll suave

### 2. DRY (Don't Repeat Yourself)
- **Constants**: Dados centralizados em `/constants/`
- **Utils**: Funções reutilizáveis em `/utils/formatters.ts`
- **Hooks**: Lógica compartilhada em hooks customizados
- **Components**: Componentes reutilizáveis como `ProductCard`, `SectionHeader`

### 3. Separation of Concerns
```
/components     → UI e apresentação
/constants      → Dados estáticos
/hooks          → Lógica de negócio reutilizável
/types          → Definições de tipos
/utils          → Funções auxiliares
```

### 4. Naming Conventions

#### Componentes
- PascalCase para componentes: `ProductCard`, `BackToTop`
- Nomes descritivos e auto-explicativos
- Prefixo "Improved" para versões otimizadas

#### Funções
- camelCase para funções: `handleBuyClick`, `scrollToSection`
- Verbos para ações: `create`, `format`, `calculate`
- Nomes descritivos: `createWhatsAppLink` vs `create`

#### Constants
- UPPER_SNAKE_CASE para constantes: `FEATURED_PRODUCTS`, `CONTACT_INFO`
- Agrupadas por contexto em arquivos separados

#### Types
- PascalCase para interfaces/types: `Product`, `Service`, `NavigationItem`
- Sufixo "Props" para props de componentes: `ProductCardProps`

### 5. Code Organization

#### Imports
Ordem padrão:
```tsx
// 1. External libraries
import { useState } from "react";
import { motion } from "motion/react";

// 2. UI components
import { Button } from "./ui/button";

// 3. Custom components
import { ProductCard } from "./ProductCard";

// 4. Hooks
import { useScrollToSection } from "../hooks/useScrollToSection";

// 5. Constants
import { CONTACT_INFO } from "../constants/navigation";

// 6. Utils
import { createWhatsAppLink } from "../utils/formatters";

// 7. Types
import { Product } from "../types";

// 8. Assets
import logoImage from "figma:asset/...";
```

#### Component Structure
```tsx
// 1. Imports
import { ... } from "...";

// 2. Types/Interfaces
interface ComponentProps {
  ...
}

// 3. Constants (se necessário)
const LOCAL_CONSTANT = ...;

// 4. Component
export function Component({ ...props }: ComponentProps) {
  // 4.1. Hooks
  const [state, setState] = useState();
  const customHook = useCustomHook();

  // 4.2. Event Handlers
  const handleClick = () => { ... };

  // 4.3. Effects
  useEffect(() => { ... }, []);

  // 4.4. Render
  return ( ... );
}
```

### 6. Performance Optimizations

#### Eventos de Scroll
```tsx
// ✅ BOM - Com requestAnimationFrame
useEffect(() => {
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // lógica
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// ❌ RUIM - Direto
useEffect(() => {
  const handleScroll = () => { /* lógica */ };
  window.addEventListener("scroll", handleScroll);
}, []);
```

#### Lazy Loading de Imagens
```tsx
// ✅ BOM - Com componente otimizado
<ImageWithFallback src={url} alt="..." />

// ❌ RUIM - Tag img direta
<img src={url} alt="..." />
```

### 7. Type Safety

```tsx
// ✅ BOM - Tipos bem definidos
interface Product {
  id: number;
  name: string;
  price: string;
}

function ProductCard({ product }: { product: Product }) { ... }

// ❌ RUIM - Tipos any
function ProductCard({ product }: { product: any }) { ... }
```

### 8. Clean Functions

#### Funções Puras
```tsx
// ✅ BOM - Função pura
export function calculateDiscount(price: string, oldPrice: string): number {
  const current = parsePriceToNumber(price);
  const original = parsePriceToNumber(oldPrice);
  return Math.round((1 - current / original) * 100);
}

// ❌ RUIM - Função com side effects
let globalDiscount = 0;
export function calculateDiscount(price: string, oldPrice: string): number {
  globalDiscount = Math.round((1 - parseFloat(price) / parseFloat(oldPrice)) * 100);
  return globalDiscount;
}
```

#### Funções Pequenas
- Máximo 20-30 linhas
- Uma responsabilidade por função
- Extrair lógica complexa para funções auxiliares

### 9. Component Composition

```tsx
// ✅ BOM - Composição
function FeaturedProducts() {
  return (
    <Carousel>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Carousel>
  );
}

// ❌ RUIM - Tudo em um componente
function FeaturedProducts() {
  return (
    <Carousel>
      {products.map(product => (
        <Card>
          {/* 100+ linhas de JSX repetido */}
        </Card>
      ))}
    </Carousel>
  );
}
```

### 10. Error Handling

```tsx
// ✅ BOM - Com validação
export function calculateDiscount(price: string, oldPrice?: string): number {
  if (!oldPrice) return 0;
  
  const current = parsePriceToNumber(price);
  const original = parsePriceToNumber(oldPrice);
  
  if (original === 0) return 0;
  
  return Math.round((1 - current / original) * 100);
}
```

### 11. Comments vs Self-Documenting Code

```tsx
// ✅ BOM - Código auto-explicativo
const handleWhatsAppClick = () => {
  const message = "Olá! Gostaria de mais informações.";
  window.open(createWhatsAppLink(CONTACT_INFO.whatsapp, message), "_blank");
};

// ❌ RUIM - Código confuso que precisa de comentário
const handleClick = () => {
  // Abre o WhatsApp com mensagem
  window.open(`https://wa.me/${c.w}?text=${encodeURIComponent(m)}`, "_blank");
};
```

### 12. Magic Numbers

```tsx
// ✅ BOM - Constantes nomeadas
const SCROLL_THRESHOLD = 300;
const ANIMATION_DELAY = 5000;

if (window.scrollY > SCROLL_THRESHOLD) {
  setIsVisible(true);
}

// ❌ RUIM - Números mágicos
if (window.scrollY > 300) {
  setIsVisible(true);
}
```

## 🎯 Checklist para Novos Componentes

- [ ] Nome descritivo e claro
- [ ] Props tipadas com interface
- [ ] Responsabilidade única
- [ ] Reutilizável quando possível
- [ ] Usa constantes ao invés de valores hardcoded
- [ ] Usa hooks customizados para lógica compartilhada
- [ ] Eventos de scroll com requestAnimationFrame
- [ ] Listeners de eventos com cleanup
- [ ] Componentes pequenos (< 200 linhas)
- [ ] Exportado corretamente

## 🚀 Próximos Passos

1. **Testes**: Adicionar testes unitários com Jest/Testing Library
2. **Acessibilidade**: Melhorar ARIA labels e navegação por teclado
3. **i18n**: Preparar para internacionalização
4. **Storybook**: Documentar componentes visualmente
5. **Performance**: Análise com Lighthouse e otimizações adicionais

## 📚 Referências

- [Clean Code - Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [React Best Practices](https://react.dev/)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
