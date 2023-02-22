import { Component, Input, OnInit  } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  products: Product[];
  selectedProduct: Product = { name: '', price: 0, image: '', description: '' };

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAll()
      .subscribe(products => this.products = products);
  }
}
