# Portfólio — Vinícius de Góis Lima

Site estático responsivo, feito com HTML, CSS e JavaScript puro. Não requer instalação, conta ou etapa de build. Todos os recursos visuais e fontes de sistema funcionam sem dependências externas.

## Abrir no VS Code

1. Extraia o ZIP.
2. No VS Code, clique em Arquivo → Abrir Pasta e selecione `portfolio-vinicius`.
3. Abra `index.html` no navegador. Opcionalmente, use a extensão Live Server e clique em “Open with Live Server”.

## Adicionar ao repositório

Copie o conteúdo desta pasta para a raiz do seu repositório: `index.html`, `style.css`, `script.js`, `assets/` e este README. Faça commit e push. Os caminhos relativos permitem hospedar em GitHub Pages, inclusive em uma subpasta de repositório. Nenhum comando npm é necessário.

## Arquivos

- `index.html`: textos, links e estrutura das seções.
- `style.css`: cores, espaçamentos, tipografia e regras para celular/tablet.
- `script.js`: menu móvel, currículo e cópia do e-mail.
- `assets/`: foto, ilustração, prévias e favicon.

## Personalizar

- As cores principais ficam no começo de `style.css`, em `:root`.
- O e-mail está em `index.html` e em `script.js`; atualize os dois ao alterar.
- As imagens dos projetos são prévias ilustrativas extraídas do conceito aprovado. Substitua `chale-preview.webp` e `treinago-preview.webp` por capturas reais quando desejar.
- O Chalé aponta para a URL fornecida do GitHub Pages e seu repositório. O Treinago aponta para `Treinago2.0`; um repositório privado só abre para pessoas autorizadas. Não foi inventada uma URL pública de demonstração. Quando houver uma, substitua “Em desenvolvimento” por um link em `index.html`.
- O botão Currículo abre uma versão resumida baseada nas informações das referências, com opção Imprimir / Salvar PDF. Revise formação, datas e conhecimentos antes de enviar a recrutadores. Para usar um PDF próprio, coloque-o em `assets/curriculo.pdf` e substitua o botão `#open-resume` por um link para esse arquivo; remova também seu listener em `script.js`.
- O contato abre o aplicativo de e-mail do visitante. Não há formulário ou servidor de envio.
- A cópia automática do e-mail depende do navegador e de um contexto seguro (HTTPS ou localhost); ao abrir diretamente por arquivo, há alternativa de seleção manual.

## Acessibilidade

Menu com estado expandido, navegação por teclado, link para pular ao conteúdo, imagens com textos alternativos, foco visível, aviso de cópia com região de status e respeito à preferência de movimento reduzido.
