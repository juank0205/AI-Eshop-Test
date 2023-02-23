import { Component, Input } from '@angular/core';
import { Car } from 'src/app/services/car.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Car;
}
