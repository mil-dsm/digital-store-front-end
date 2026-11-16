# Digital Store

Loja virtual desenvolvida em **React** como projeto final de Front-end do curso **GT Online 4.0 – Geração Tech**. O projeto segue a documentação do repositório base [projeto-digital-store](https://github.com/digitalcollegebr/projeto-digital-store) e o design do Figma (Drip Store).

**Autora:** Milena de Sousa Mesquita

**Site publicado:** _(cole aqui o link da Vercel depois do deploy)_

## Tecnologias

- [React](https://react.dev/learn) 19
- [Vite](https://vite.dev/) (servidor de desenvolvimento e build)
- [React Router](https://reactrouter.com/) (rotas e `NavLink`)
- CSS puro, com as cores do projeto definidas como variáveis em `src/index.css`

## Funcionalidades

**Em todas as páginas (`Layout`)**
- Cabeçalho com logo, campo de busca (lupa ou `Enter` leva para `/products?filter=texto`), links *Cadastre-se* e *Entrar*, ícone do carrinho e navegação principal com destaque no link da página atual.
- Rodapé com logo, descrição, redes sociais, listas de links geradas a partir de arrays (`title` e `informations`), linha divisória e ano atual.
- No celular, o cabeçalho troca a navegação por um menu lateral (hambúrguer) e a busca abre ao clicar na lupa.

**Home (`/`)**
- Galeria de imagens com setas (seta desabilitada na primeira e na última imagem).
- Coleções em destaque e os 8 produtos em alta.

**Listagem de produtos (`/products`)**
- Ordenação por menor e maior preço (considera o preço com desconto).
- Filtro por marca (`FilterGroup` com checkbox).
- Busca vinda do cabeçalho (`?filter=`), com o total de produtos encontrados no título.

**Visualização do produto (`/product/:id`)**
- Galeria com miniaturas (borda na miniatura selecionada).
- `BuyBox` com nome, referência, nota, preços (com e sem desconto), descrição, seleção de tamanho e cor e botão *Comprar*.
- Produtos recomendados (os outros produtos, sem repetir o atual).

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 22 ou superior.

```bash
npm install
npm run dev      # abre em http://localhost:5173
```

Outros comandos:

```bash
npm run build    # gera a versão de produção na pasta dist
npm run preview  # abre a versão de produção localmente
npm run lint     # verifica o código com o oxlint
```

## Estrutura de pastas

```
public/              imagens dos slides, coleções e produtos
src/
├── assets/          SVGs (logos, setas, redes sociais, carrinho, estrela)
├── components/      um componente por pasta (JSX + CSS)
│   ├── BuyBox
│   ├── FilterGroup
│   ├── Footer
│   ├── FooterInfo
│   ├── Gallery
│   ├── Header
│   ├── Logo
│   ├── ProductCard
│   ├── ProductListing
│   ├── ProductOptions
│   └── Section
├── data/
│   └── products.js  produtos usados no site (sem API)
├── pages/
│   ├── Layout.jsx   Header + conteúdo (children) + Footer
│   ├── HomePage/
│   │   ├── HomePage.css
│   │   ├── HomePage.jsx
│   ├── ProductListingPage/
│   │   ├── ProductListingPage.css
│   │   ├── ProductListingPage.jsx
│   ├── ProductViewPage/
│   │   ├── ProductViewPage.css
│   │   ├── ProductViewPage.jsx
│   ├── Layout.jsx
│   └── PlaceholderPage.jsx
├── App.jsx          rotas
├── index.css        variáveis de cor e estilos globais
└── main.jsx
```

As páginas apenas montam os componentes; a lógica de cada parte fica no próprio componente (por exemplo, o índice da imagem em `Gallery` e a opção escolhida em `ProductOptions`, ambos com `useState`).

## Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/products` | Listagem (aceita `?filter=texto`) |
| `/produtos` | Mesma listagem (nome usado no README base) |
| `/product/:id` | Visualização do produto |
| `/categories`, `/orders`, `/login`, `/signup` | Páginas "em construção" (não fazem parte dos requisitos) |

## Decisões em relação ao README base

- A rota de listagem é `/products`, usada na busca e no link "Ver todos". A rota `/produtos`, citada em outro trecho do README base, também funciona.
- As imagens ficam em `public/` e são chamadas como `/arquivo.jpeg`, que é o caminho correto no Vite (o README base cita `public/...png`).
- Os produtos são dados locais em `src/data/products.js`, com `id`, marca e categoria para a listagem e a página do produto. Como o repositório base tem só 5 imagens de produto, elas se repetem.
- Na Gallery, a navegação não é circular: as setas ficam desabilitadas na primeira e na última imagem, como pede o README base.

## Licença

MIT. Veja o arquivo [LICENSE](LICENSE).