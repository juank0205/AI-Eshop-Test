import { Component, Input, OnInit  } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { Car, CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  products: Car[];
  selectedProduct: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.carService.getCars()
      .subscribe(cars => this.products = cars);
  }
}
