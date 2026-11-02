// "Banco de dados" local dos produtos. Os objetos têm os campos do README
// (name, image, price, priceDiscount) mais o que as páginas precisam:
// id (para a rota /product/:id), brand/category (filtros) e os dados do BuyBox.
//
// ATENÇÃO: no Vite, arquivos da pasta public/ são servidos a partir da raiz.
// Usaando "/product-thumb-1.jpeg" e NÃO "public/product-thumb-1.png" como escrito no README.
// Só existem 5 imagens de produto; elas se repetem nos 8 produtos.

const productImages = [
  { src: '/produc-image-1.jpeg' },
  { src: '/produc-image-2.jpeg' },
  { src: '/produc-image-3.jpeg' },
  { src: '/produc-image-4.jpeg' },
  { src: '/produc-image-5.jpeg' },
]

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const products = [
  { id: 1, name: 'Tênis K-Swiss V8 - Masculino', brand: 'K-Swiss', category: 'Tênis', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100 },
  { id: 2, name: 'Tênis Nike Air Force - Masculino', brand: 'Nike', category: 'Tênis', image: '/product-thumb-2.jpeg', price: 250 },
  { id: 3, name: 'Tênis Adidas Runner - Feminino', brand: 'Adidas', category: 'Tênis', image: '/product-thumb-3.jpeg', price: 300, priceDiscount: 219.9 },
  { id: 4, name: 'Tênis Puma Street - Unissex', brand: 'Puma', category: 'Tênis', image: '/product-thumb-4.jpeg', price: 180 },
  { id: 5, name: 'Tênis K-Swiss Classic - Feminino', brand: 'K-Swiss', category: 'Tênis', image: '/product-thumb-5.jpeg', price: 220, priceDiscount: 149.9 },
  { id: 6, name: 'Tênis Nike Court - Masculino', brand: 'Nike', category: 'Tênis', image: '/product-thumb-1.jpeg', price: 270 },
  { id: 7, name: 'Tênis Adidas Street - Unissex', brand: 'Adidas', category: 'Tênis', image: '/product-thumb-2.jpeg', price: 199.9, priceDiscount: 129.9 },
  { id: 8, name: 'Tênis Puma Run - Feminino', brand: 'Puma', category: 'Tênis', image: '/product-thumb-3.jpeg', price: 210 },
].map((product) => ({
  // Dados extras usados só na página do produto (BuyBox e Gallery).
  reference: `REF-${String(product.id).padStart(4, '0')}`,
  stars: 4.7,
  rating: 90,
  description,
  images: productImages,
  sizes: ['39', '40', '41', '42', '43'],
  colors: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'],
  ...product,
}))

export function getProductById(id) {
  return products.find((product) => product.id === Number(id))
}
