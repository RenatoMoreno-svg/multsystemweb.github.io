# MultSystems - UI/UX Design System Documentation

## 📐 Design Principles

### 1. Hierarquia Visual Clara
- **Títulos**: Progressão consistente de tamanhos (H1 > H2 > H3)
- **Espaçamento**: Sistema baseado em grid de 8px
- **Contraste**: Texto primário (#1C1C1E) sobre fundos claros
- **Peso Visual**: Uso estratégico de bold (700-800) em títulos

### 2. Sistema de Espaçamento (8px Grid)
```
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 96px
```

### 3. Seções
```
Mobile: 48px (3rem) padding vertical
Tablet: 80px (5rem) padding vertical
Desktop: 120px (7.5rem) padding vertical
Large Desktop: 160px (10rem) padding vertical
```

## 🎨 Color System

### Primary Colors
- **Primary 500**: #0A84FF (azul principal)
- **Secondary 500**: #FF8C42 (laranja CTAs)
- **Accent 500**: #4FC3F7 (azul claro detalhes)

### Semantic Colors
- **Success**: #25D366 (WhatsApp verde)
- **Warning**: #FFE600 (amarelo avaliações)
- **Text Primary**: #1C1C1E (cinza escuro)
- **Text Secondary**: #6B7280
- **Background**: #FFFFFF
- **Background Alt**: #F5F6FA

## 📏 Typography Scale

### Tamanhos
- **Display**: 72px (4.5rem) - Hero titles
- **H1**: 48-60px (3-3.75rem) - clamp(2.5rem, 6vw, 4.5rem)
- **H2**: 36-48px (2.25-3rem) - clamp(2rem, 4vw, 3rem)
- **H3**: 24-30px (1.5-1.875rem)
- **Body Large**: 18px (1.125rem)
- **Body**: 16px (1rem)
- **Small**: 14px (0.875rem)

### Font Weights
- **Regular**: 400 (body text)
- **Medium**: 500 (labels, badges)
- **Semibold**: 600 (buttons)
- **Bold**: 700 (headings)
- **Extrabold**: 800 (hero titles)

### Line Heights
- **Tight**: 1.25 (headings)
- **Normal**: 1.5 (body)
- **Relaxed**: 1.625 (long-form content)

## 🧩 Component Patterns

### 1. Section Header Pattern
```tsx
<SectionHeader
  emoji="💻"
  badge="HARDWARE"
  badgeColor="text-[#0A84FF]"
  title="Equipamentos de Alta Performance"
  subtitle="Descrição da seção..."
  align="center"
/>
```

**Estrutura**:
- Badge com emoji/ícone
- Título principal (H2)
- Subtítulo descritivo
- Linha decorativa opcional

**Espaçamento**: 16px (4rem) margin-bottom

### 2. Card Pattern
```css
padding: 32px (2rem)
border-radius: 24px (1.5rem)
border: 2px solid gray-100
hover: shadow-xl + translateY(-4px)
transition: 200ms cubic-bezier
```

**Hierarquia no Card**:
1. Ícone/Imagem (topo)
2. Título (H3 ou H4)
3. Descrição/Lista
4. CTA Button (bottom)

### 3. Button Patterns

#### Primary CTA
```css
background: gradient (FF8C42 → ff7a2e)
height: 56px (3.5rem)
padding: 0 32px
font-size: 16px
font-weight: 600
border-radius: 16px (1rem)
```

#### Secondary CTA
```css
background: transparent
border: 2px solid
padding: similar to primary
```

### 4. Grid System
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3-4 columns
- **Gap**: 24px (md) ou 32px (lg)

## 🎭 Motion Design Guidelines

### 1. Timing Functions
- **Fast**: 150ms - micro interactions (hover)
- **Base**: 200ms - standard transitions
- **Slow**: 300ms - larger animations
- **Slower**: 500ms - hero animations

### 2. Animation Types
- **Fade In**: opacity 0 → 1
- **Slide Up**: translateY(20px) → 0
- **Scale**: scale(0.9) → 1
- **Stagger**: delay incremental (0.1s)

### 3. Viewport Animations
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.5 }}
```

## ♿ Accessibility Heuristics

### 1. Nielsen's 10 Usability Heuristics Applied

#### Visibility of System Status
- Loading states em formulários
- Hover feedback em todos os elementos interativos
- Active states visuais

#### Match Between System and Real World
- Linguagem clara e objetiva
- Ícones intuitivos
- Termos familiares ao e-commerce

#### User Control and Freedom
- Navegação clara com âncoras
- Scroll suave entre seções
- Menu mobile com close button

#### Consistency and Standards
- Design system padronizado
- Cores semânticas consistentes
- Padrões de layout repetíveis

#### Error Prevention
- Form validation
- Confirmações em ações importantes
- Labels claros em inputs

#### Recognition Rather than Recall
- Menu sempre visível
- Breadcrumbs visuais
- Ícones descritivos

### 2. WCAG Compliance
- **Contraste**: Mínimo 4.5:1 para texto normal
- **Focus States**: outline visível com 2px solid
- **Skip to Content**: Link de pulo para conteúdo principal
- **Alt Text**: Todas as imagens com descrição
- **Keyboard Navigation**: Todos os elementos interativos acessíveis

## 📱 Responsive Breakpoints
```css
sm: 640px   /* mobile landscape */
md: 768px   /* tablet */
lg: 1024px  /* desktop */
xl: 1280px  /* large desktop */
2xl: 1536px /* extra large */
```

## 🎯 Conversion Optimization

### 1. CTAs Hierarchy
1. **Primary**: "Comprar no Mercado Livre" (laranja)
2. **Secondary**: "Ver Produtos" (outline)
3. **Tertiary**: Links de texto

### 2. Trust Signals
- Badges do Mercado Livre
- Avaliações 5 estrelas
- Números sociais (10k+ clientes)
- Selos de segurança

### 3. Visual Hierarchy for Conversion
1. Hero com proposta de valor clara
2. Trust bar imediatamente após
3. Produtos organizados por categoria
4. Social proof (depoimentos)
5. Benefícios (Why Choose Us)
6. Contato fácil
7. Newsletter/Footer

## 🔄 Component States

### Interactive States
- **Default**: Estado inicial
- **Hover**: scale(1.05) + shadow increase
- **Active**: scale(0.95)
- **Focus**: outline 2px solid primary
- **Disabled**: opacity 0.5 + cursor not-allowed

## 📦 Reusable Patterns

### Pattern: Glass Morphism
```css
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.2)
```

### Pattern: Gradient Text
```css
background: linear-gradient(135deg, primary, accent)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

### Pattern: Card Hover Effect
```css
transition: all 200ms
hover: transform translateY(-4px) + shadow-xl
```

## 🎨 Design Tokens Usage

### Import in Components
```tsx
style={{ 
  paddingTop: "var(--section-padding-lg)",
  gap: "var(--spacing-xl)",
  borderRadius: "var(--radius-2xl)"
}}
```

### Benefits
- ✅ Consistência global
- ✅ Fácil manutenção
- ✅ Responsive automático
- ✅ Escalabilidade

---

**Última atualização**: 2025
**Versão**: 1.0
**Mantido por**: MultSystems Design Team
