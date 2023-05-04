import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';

import { ProductCreateComponent } from '../../components/product-create/product-create.component'
import { Product } from '../../models/Product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsListingComponent {

  // products: Product[] = [
  //   new Product('1', 'Chair', 'A comfortable chair', 49.99, 'https://placehold.co/300x300'),
  //   new Product('2', 'Table', 'A sturdy table', 129.99, 'https://placehold.co/300x300'),
  //   new Product('3', 'Sofa', 'A cozy sofa', 399.99, 'https://placehold.co/300x300'),
  // ]
  products: Product[] = [];

  constructor( private productService: ProductService, private dialog:MatDialog ) {}
  
  ngOnInit() : void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductCreateComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(product => {
        if (product && product !== undefined) this.products.push(product)
    });
  }

}
