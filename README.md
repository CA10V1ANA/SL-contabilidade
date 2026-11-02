# SL Contabilidade & Coworking

Primeira versão do site institucional, baseada no briefing e mockup “Dê direção ao seu negócio”. React, Next.js App Router, TypeScript, Tailwind CSS, Motion e Lucide. Página pré-renderizada; componentes cliente limitados às interações e revelações. Sem backend, login, pagamento ou formulário de envio fictício.

## Executar

Requer Node.js 20.9+ (validado com Node 24).

```powershell
npm.cmd ci
npm.cmd run dev
```

Abrir http://127.0.0.1:3000. Para produção local:

```powershell
npm.cmd run build
npm.cmd run start
```

## Verificações

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npx.cmd playwright install chromium
npm.cmd run test:e2e
```

Os testes usam o servidor de produção (e reutilizam a porta 3000 se já estiver ocupada pelo projeto). Ao alterar código, reconstrua e reinicie o servidor antes do teste. Cobrem 390px, 768px e 1440px, ausência de rolagem horizontal, axe WCAG A/AA, foco e Escape no menu, redimensionamento, acordeões por teclado, galeria, destinos de contato e movimento reduzido. As capturas ficam em `docs/screenshots/`. Auditoria automática não substitui avaliação com usuários e tecnologias assistivas.

## Conteúdo e pendências do cliente

Editar **src/config/site.ts**:

- `whatsapp`: configurado com o número confirmado pelo cliente, **+55 85 3336-4534** (`558533364534`). Os botões gerais e de cada serviço abrem o WhatsApp com a mensagem correspondente, preparada para o visitante enviar.
- `messages`: mensagens contextualizadas por serviço; o link apenas prepara a conversa, sem enviar automaticamente.
- `units`: confirmar endereço, horário, telefone e URL exata de mapa de cada unidade. Campos ausentes não são renderizados. Não inferir disponibilidade de um serviço nas duas unidades.
- `images`: substituir as fotos ilustrativas por fotos autorizadas da equipe, atendimento e instalações. Atualizar descrição, legenda e dimensões. Nenhuma fotografia atual representa a SL.
- `services` e `faq`: validar o escopo e as condições de atendimento com o cliente.
- Logo oficial: substituir a identificação tipográfica provisória em `src/components/shared.tsx` e o favicon em `src/app/icon.svg`.
- Domínio: confirmar antes de adicionar canonical, sitemap ou dados estruturados com URLs absolutas.

Sem WhatsApp, os CTAs chegam a `#contato`, onde o visitante encontra o Instagram real. Endereços, prazos, preços, depoimentos e métricas não foram inventados. Os contatos do coworking solicitam informações; não confirmam reservas.

## Imagens e licenças

Fotografias ilustrativas baixadas do Unsplash em 02/11/2026, armazenadas localmente e convertidas para WebP 1400×1000. Licença: https://unsplash.com/license (uso comercial permitido; não redistribuir como banco de fotos).

| Arquivo | Origem |
| --- | --- |
| `public/images/conversation.webp` | https://images.unsplash.com/photo-1521737711867-e3b97375f902 |
| `public/images/meeting.webp` | https://images.unsplash.com/photo-1497366811353-6870744d04b2 |
| `public/images/office.webp` | https://images.unsplash.com/photo-1497366754035-f200968a6e72 |

A fita azul, o portal e as letras em contorno são SVG original, em `src/components/direction-artwork.tsx`. Não foi usado o mockup inteiro como fundo. Manrope é distribuída pelo Fontsource (SIL Open Font License), servida localmente. Lucide usa licença ISC. Motion usa MIT. Não há código copiado de Codrops, React Bits, Magic UI ou Aceternity.

## Organização

- `src/app`: layout, metadados, página de servidor e estilos.
- `src/components`: identidade, cabeçalho, acordeões, galeria, revelações e arte.
- `src/config/site.ts`: dados tipados e construção dos links de contato.
- `tests/site.spec.ts`: testes de navegador.
- `docs/design.md`: decisões visuais e referências.

A rolagem é nativa; movimentos respeitam `prefers-reduced-motion`. O menu usa diálogo nativo para conter foco e fechar por Escape; a navegação devolve foco ao destino. O conteúdo principal permanece visível mesmo sem animação. As interações requerem JavaScript.

## Dependências

`npm audit --omit=dev` não encontrou vulnerabilidades nas dependências de produção na verificação inicial. A auditoria completa apontou 16 ocorrências moderadas na cadeia de ferramentas ESLint/minimatch (GHSA-g3hv-75wg-m249). O npm propõe downgrades incompatíveis; não foi aplicado `audit fix --force`. Reavaliar quando as ferramentas publicarem versões compatíveis com a correção. Essas dependências são usadas em desenvolvimento e não no código entregue ao navegador.
