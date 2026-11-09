# Digital Store

Projeto final de Front-end (GT Online 4.0 – Geração Tech). Loja virtual em React com 3 páginas: Home, Listagem de Produtos e Visualização do Produto.

**Autora:** Milena de Sousa Mesquita

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão de produção
```

## Estrutura

```
public/            imagens
src/
├── assets/        SVGs (logos, ícones)
├── components/    componentes reutilizáveis (uma pasta por componente)
├── data/          products.js: dados dos produtos
├── pages/         Layout + uma página por rota
├── App.jsx        rotas
└── index.css      cores (variáveis CSS) e estilos globais
```

Rotas: `/`, `/products` (aceita `?filter=texto`), `/product/:id`. Categorias, Meus Pedidos, Entrar e Cadastre-se são páginas em construção.

## Decisões

- Rota de listagem padronizada em `/products` (o README base mistura `/products` e `/produtos`).
- Imagens ficam em `public/` e são referenciadas como `/arquivo.jpeg`.
- Dados locais em `src/data/products.js` (sem API).