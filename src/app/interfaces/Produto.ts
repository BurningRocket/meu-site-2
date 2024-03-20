export interface Product {
    name: string;
    imageUrl: string;
    price: string;
    addedToCart: boolean; // Novo atributo para controlar o estado de adição ao carrinho
  }