import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Product  } from '../../models/Product.model'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
   @Input() product!: Product
   defaultImage:string =   'https://placehold.co/300x300'
   apiURL:string = environment.PRODUCTS_API_URL 

   getImage(): string {
    if (!this.product.image || this.product.image === '')  return this.defaultImage;
    return `${this.apiURL}/${this.product.image}`;
  }
}
