# Políticas Legais - Guia de Implementação

## 🎯 Objetivo

Este documento explica como as políticas legais estão implementadas no site da MultSystem e como utilizá-las ou modificá-las.

## 📁 Estrutura de Arquivos

```
/constants/legal.ts        # Conteúdo de todas as políticas
/components/LegalModal.tsx  # Modal para exibição das políticas
/components/MultSystemFooter.tsx  # Links para as políticas
```

## 🔧 Como Funciona

### 1. Conteúdo Centralizado

Todo o conteúdo legal está em `/constants/legal.ts`:

```typescript
export const LEGAL_CONTENT = {
  privacyPolicy: { ... },    // Política de Privacidade
  termsOfService: { ... },   // Termos de Uso
  returnPolicy: { ... }      // Trocas e Devoluções
}
```

### 2. Estrutura de Cada Política

```typescript
{
  title: string,           // Título da política
  lastUpdated: string,     // Data da última atualização
  sections: [              // Array de seções
    {
      title: string,       // Título da seção
      content: string[]    // Array de parágrafos
    }
  ]
}
```

### 3. Formatação de Texto

O conteúdo suporta formatação especial:

#### Negrito
```typescript
content: ["**Texto em negrito**"]
// Renderiza: <strong>Texto em negrito</strong>
```

#### Listas
```typescript
content: [
  "Itens da lista:",
  "• Primeiro item",
  "• Segundo item",
  "• Terceiro item"
]
```

#### Parágrafos Normais
```typescript
content: ["Texto normal do parágrafo"]
```

#### Espaçamento
```typescript
content: [
  "Primeiro parágrafo",
  "",  // Linha vazia para espaçamento
  "Segundo parágrafo"
]
```

## 🎨 Componente LegalModal

### Uso Básico

```tsx
import { LegalModal } from "./components/LegalModal";
import { LEGAL_CONTENT } from "./constants/legal";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Ver Política
      </button>
      
      <LegalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={LEGAL_CONTENT.privacyPolicy}
      />
    </>
  );
}
```

### Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `isOpen` | `boolean` | Controla se o modal está aberto |
| `onClose` | `() => void` | Callback ao fechar o modal |
| `content` | `LegalContent` | Conteúdo da política a exibir |

### Características

- ✅ Responsivo (mobile-first)
- ✅ Scroll interno suave
- ✅ Formatação automática de texto
- ✅ Badge com data de atualização
- ✅ Seção de contato ao final
- ✅ Design consistente com o site

## 📝 Como Atualizar as Políticas

### Passo 1: Editar o Conteúdo

Abra `/constants/legal.ts` e localize a política que deseja atualizar:

```typescript
export const LEGAL_CONTENT = {
  privacyPolicy: {
    title: "Política de Privacidade",
    lastUpdated: "03 de Novembro de 2025",  // ← ATUALIZAR DATA
    sections: [
      {
        title: "1. Introdução",
        content: [
          "Novo texto...",  // ← EDITAR CONTEÚDO
        ]
      }
    ]
  }
}
```

### Passo 2: Atualizar a Data

Sempre atualize o campo `lastUpdated` quando modificar o conteúdo:

```typescript
lastUpdated: "10 de Dezembro de 2025"  // Nova data
```

### Passo 3: Testar

1. Abra o site
2. Clique no link da política no footer
3. Verifique se o conteúdo está correto
4. Confirme a formatação
5. Teste em mobile e desktop

## ➕ Como Adicionar Nova Seção

### Em uma Política Existente

```typescript
sections: [
  // ... seções existentes ...
  {
    title: "11. Nova Seção",  // Número sequencial
    content: [
      "Primeiro parágrafo da nova seção.",
      "",
      "**Subtítulo Importante**",
      "• Item de lista 1",
      "• Item de lista 2",
      "",
      "Mais conteúdo..."
    ]
  }
]
```

## 🆕 Como Criar Nova Política

### Passo 1: Adicionar ao legal.ts

```typescript
export const LEGAL_CONTENT = {
  privacyPolicy: { ... },
  termsOfService: { ... },
  returnPolicy: { ... },
  
  // Nova política
  newPolicy: {
    title: "Título da Nova Política",
    lastUpdated: "Data Atual",
    sections: [
      {
        title: "1. Primeira Seção",
        content: [
          "Conteúdo..."
        ]
      }
    ]
  }
} as const;
```

### Passo 2: Adicionar Link no Footer

Edite `/components/MultSystemFooter.tsx`:

```tsx
// 1. Atualizar o tipo
type LegalType = "privacy" | "terms" | "returns" | "new" | null;

// 2. Adicionar botão
<motion.button
  whileHover={{ y: -2 }}
  onClick={() => setOpenLegal("new")}
  className="text-gray-400 hover:text-[#FF8C42] transition-colors"
>
  Nova Política
</motion.button>

// 3. Adicionar modal
<LegalModal
  isOpen={openLegal === "new"}
  onClose={() => setOpenLegal(null)}
  content={LEGAL_CONTENT.newPolicy}
/>
```

## 🎨 Customização do Modal

### Alterar Cores

Edite `/components/LegalModal.tsx`:

```tsx
// Cor do ícone e gradiente
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#4FC3F7]">
  {/* Altere as cores aqui */}
</div>

// Cor dos links e destaques
<strong className="text-[#1C1C1E]">
  {/* Altere a cor do texto destacado */}
</strong>
```

### Alterar Tamanho

```tsx
<DialogContent className="max-w-4xl max-h-[90vh]">
  {/* max-w-4xl = largura máxima */}
  {/* max-h-[90vh] = altura máxima */}
</DialogContent>
```

## 📋 Checklist de Conformidade

Ao atualizar políticas, verifique:

### Política de Privacidade (LGPD)
- [ ] Dados coletados atualizados
- [ ] Finalidades de uso claras
- [ ] Compartilhamento com terceiros descrito
- [ ] Direitos dos titulares listados
- [ ] Procedimento de contato disponível
- [ ] Medidas de segurança descritas
- [ ] Prazo de retenção especificado
- [ ] Data de atualização correta

### Termos de Uso
- [ ] Serviços oferecidos atualizados
- [ ] Restrições de uso claras
- [ ] Propriedade intelectual protegida
- [ ] Limitações de responsabilidade
- [ ] Lei aplicável e foro
- [ ] Data de atualização correta

### Trocas e Devoluções
- [ ] Prazos de garantia corretos
- [ ] Procedimentos claros
- [ ] Custos especificados
- [ ] Exclusões listadas
- [ ] Canais de contato atualizados
- [ ] Data de atualização correta

## 🔍 Exemplos de Uso

### Exemplo 1: Texto com Negrito Inline

```typescript
content: [
  "O prazo de **7 dias corridos** inicia a partir do recebimento."
]
```

Renderiza: "O prazo de **7 dias corridos** inicia a partir do recebimento."

### Exemplo 2: Lista com Subtítulo

```typescript
content: [
  "**Documentos necessários:**",
  "• Nota fiscal",
  "• Certificado de garantia",
  "• Documento com foto"
]
```

### Exemplo 3: Seção de Contato

```typescript
content: [
  "Para dúvidas, entre em contato:",
  "",
  "**E-mail:** contato@multsystems.com.br",
  "**Telefone:** (11) 3456-7890",
  "**WhatsApp:** (11) 99999-9999"
]
```

## 🚨 Avisos Importantes

### ⚠️ Aspectos Legais
- As políticas devem ser revisadas por um advogado
- Mantenha cópias das versões anteriores
- Notifique usuários sobre mudanças significativas
- Verifique conformidade com leis atuais

### ⚠️ Aspectos Técnicos
- Sempre atualize a data `lastUpdated`
- Teste em diferentes dispositivos
- Verifique formatação de texto especial
- Mantenha backups antes de alterações

### ⚠️ Manutenção
- Revise políticas pelo menos anualmente
- Atualize conforme mudanças na lei
- Mantenha histórico de alterações
- Documente mudanças significativas

## 📞 Suporte

### Dúvidas sobre Implementação
- Consulte `/CODE_STRUCTURE.md`
- Consulte `/CLEAN_CODE_PRACTICES.md`
- Revise o código fonte dos componentes

### Dúvidas sobre Conteúdo Legal
- Consulte `/LEGAL_COMPLIANCE.md`
- Contate um advogado especializado
- Verifique legislação atual (LGPD, CDC)

## 🔗 Links Úteis

### Legislação
- [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- [CDC](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm)
- [ANPD](https://www.gov.br/anpd/)

### Referências
- [Guia LGPD Serpro](https://www.serpro.gov.br/lgpd)
- [Procon-SP](https://www.procon.sp.gov.br/)

---

**Versão**: 1.0  
**Última Atualização**: 03 de Novembro de 2025
