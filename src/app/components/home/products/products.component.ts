import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Produto';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    { name: 'Produto 01 - Camisa do Flamengo', imageUrl: './assets/imagem-produto-1.webp', price: 'R$ 9,90', addedToCart: false },
    { name: 'Produto 02', imageUrl: './assets/imagem-produto-2.webp', price: 'R$ 19,90', addedToCart: false },
    { name: 'Produto 03', imageUrl: './assets/imagem-produto-3.webp', price: 'R$ 29,90', addedToCart: false },
    { name: 'Produto 04', imageUrl: './assets/imagem-produto-4.webp', price: 'R$ 39,90', addedToCart: false },
    { name: 'Produto 05', imageUrl: './assets/imagem-produto-5.webp', price: 'R$ 49,90', addedToCart: false },
    { name: 'Produto 06', imageUrl: './assets/imagem-produto-6.webp', price: 'R$ 59,90', addedToCart: false },
    { name: 'Produto 07', imageUrl: './assets/imagem-produto-7.webp', price: 'R$ 69,90', addedToCart: false },
    { name: 'Produto 08', imageUrl: './assets/imagem-produto-8.webp', price: 'R$ 79,90', addedToCart: false },
    { name: 'Produto 09', imageUrl: './assets/imagem-produto-9.webp', price: 'R$ 89,90', addedToCart: false },
    { name: 'Produto 10', imageUrl: './assets/imagem-produto-10.webp', price: 'R$ 99,90', addedToCart: false }
  ];

  expanded: boolean = false; // Nova propriedade para controlar o estado expandido dos botões

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded(product: Product): void {
    this.expanded = !this.expanded; // Alterna o estado expandido dos botões
  }

  addToCart(product: Product): void {
    product.addedToCart = true; // Define o estado de adição ao carrinho como true
  }

  removeFromCart(product: Product): void {
    product.addedToCart = false; // Define o estado de adição ao carrinho como false
  }
}
