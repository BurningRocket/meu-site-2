import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Product } from '../../../../../interfaces/Produto';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css'],
  providers: [ConfirmationService]
})
export class CartSidebarComponent{
  sidebarVisible = false;
  cartList: Array<Product> = [
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
}


