# Verificação da primeira versão

Data: 02/11/2026.

- Build Next.js de produção: aprovado, rota `/` pré-renderizada.
- ESLint: aprovado sem avisos.
- TypeScript: aprovado.
- Playwright/Chromium: 7 testes aprovados.
- Capturas de página inteira em 390, 768 e 1440 px, revisadas contra o mockup.
- Sem rolagem horizontal nas três larguras, inclusive nas seções inferiores.
- Axe WCAG 2 A/AA e 2.1 AA: nenhuma violação automática nos estados iniciais das três larguras.
- Acordeões: abertura/fechamento por clique, Enter e Space; estado ARIA e conteúdo associados.
- Menu: foco inicial, contenção no diálogo, Escape, retorno de foco, navegação e fechamento ao passar para desktop.
- Galeria: avanço e retorno, indicador atualizado; sem rotação automática.
- Links internos: todos com destino existente. Instagram com URL do briefing.
- WhatsApp: ausência e valor inválido mantêm fallback; fixture de número válido gera mensagens por contexto. Nenhuma mensagem foi enviada.
- Preferência de movimento reduzido respeitada; conteúdo principal visível sem JavaScript.
- Nenhuma exceção JavaScript observada nos testes de layout.

Ajustes após inspeção: seta redundante removida nas soluções no celular, texto de apoio aumentado, índice decorativo escondido no tablet para não cruzar a fita, enquadramento da foto revisto e logo do menu conectado ao fechamento.

A implementação preserva branco/azul/amarelo, títulos grandes, fita com profundidade, letras SL em contorno, soluções numeradas e a seção azul com fotografia ampla. Diferenças intencionais: SVG simplificado em vez de render 3D fotográfico; fotos ilustrativas identificadas em lugar de imagens reais da SL; dúvidas frequentes e contato incluídos conforme briefing.

Limites: revisão em Chromium, sem teste em dispositivo físico ou Safari. Não houve publicação remota. Fotos, logo e contatos definitivos dependem do cliente. Os achados de ferramentas de desenvolvimento do npm audit estão documentados no README.
