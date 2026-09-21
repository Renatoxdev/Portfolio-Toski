# Toski — Digital Artist & Illustrator

Portfólio editorial em Next.js (App Router), TypeScript e Tailwind CSS. A composição segue as quatro referências em `referencias visuais/`; essas imagens não são publicadas como obras. As imagens exibidas e os projetos são placeholders explícitos.

## Executar

Requer Node.js 20.9+ e npm.

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Para produção:

```sh
npm run build
npm start
```

## Páginas

- `/`: capa com wordmark, navegação e espaço cinematográfico para uma obra.
- `/work`: galeria editorial, filtros e lightbox (Escape fecha; setas navegam).
- `/projects`: 11 projetos de exemplo; cinco e seis colunas em telas amplas, três no tablet, duas no celular.
- `/projects/[slug]`: artbook com descrição, imagens e próximo projeto. Exemplo: `/projects/the-wandering-isle`.
- `/about`: imagem, categorias de clientes de exemplo, serviços e apresentação provisória.
- `/contact`: contato direto por e-mail e perfis sociais configuráveis.
- Rotas inexistentes: página 404.

## Alterar conteúdo

| Arquivo | Conteúdo |
| --- | --- |
| `data/site.ts` | Nome, subtítulo, biografia, disponibilidade, e-mail, serviços, categorias de clientes, navegação e redes sociais |
| `data/artworks.ts` | Obras, títulos, filtros, alt text, caminho e dimensões das imagens |
| `data/projects.ts` | Projetos, slugs, categorias, ano, descrição e imagens internas |
| `app/page.tsx` | Texto e composição da capa |
| `app/contact/page.tsx` | Texto editorial de contato |
| `app/globals.css` | Paleta, tipografia, espaçamentos e breakpoints |
| `app/layout.tsx` | SEO, OpenGraph básico e fontes locais |

`hello@toski.art` é provisório. Substitua pelo e-mail confirmado antes de publicar. As redes possuem `href: null`: ficam como texto até que os endereços reais sejam informados. Não são atribuídos clientes reais à artista. Revise biografia, serviços, disponibilidade e todos os exemplos antes da publicação.

## Substituir placeholders por obras

1. Adicione as artes em `public/images/artworks/`, capas em `public/images/projects/` e retrato em `public/images/about/` (preferencialmente WebP, AVIF, PNG ou JPEG).
2. Atualize `src`/`image`, `alt`, `width` e `height` nos arquivos de dados. Dimensões devem refletir o arquivo original; os componentes reservam espaço para evitar saltos no layout.
3. Capa: o componente `components/GalleryBackdrop.tsx` seleciona automaticamente obras de Illustration e Environments com proporção horizontal maior que 1,4 em `data/artworks.ts`. O fundo alterna a cada 6 segundos, permite pausar e respeita movimento reduzido. Ajuste `.backdrop-slide` para mudar o enquadramento.
4. About: substitua `/images/about/portrait.svg` e seu texto alternativo em `app/about/page.tsx`.
5. Projetos: altere `images` em `data/projects.ts`; cada projeto pode receber imagens, dimensões e legendas próprias. Remova as indicações de conteúdo de exemplo somente após inserir os dados reais.

SVGs atuais são blocos neutros com rótulos, não reproduções das referências. Imagens raster locais usam a otimização de `next/image`; imagens fora da primeira dobra carregam sob demanda. Fontes Cormorant Garamond e Manrope são locais e suas licenças OFL estão em `public/fonts/`.

## Organização

`app/` contém rotas e estilos; `components/` contém Header, Footer, Logo, BotanicalMark, SocialLinks, PageShell, SectionHeading, ArtworkGrid e ProjectCard; `data/` centraliza o conteúdo; `public/` contém assets locais.

O layout usa fundo `#FFF9EA`, texto principal `#354751`, texto colorido `#1F6F6D` e hover `#56787D`, tipografia serif editorial e pequenos rótulos sans-serif. As proporções variadas da galeria tornam-se uma coluna no celular. As animações são CSS e respeitam `prefers-reduced-motion`. Menu e conteúdo básico continuam disponíveis sem JavaScript; filtros e lightbox necessitam JavaScript.

## Verificação

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Os testes verificam rotas em 375, 768 e 1440 px, overflow, carregamento de imagens, filtros, lightbox, retorno de foco, navegação mobile, próximo projeto, 404 e conteúdo sem JavaScript. O servidor de testes usa o build de produção.
