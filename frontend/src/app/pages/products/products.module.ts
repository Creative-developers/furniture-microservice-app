import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ProductsListingComponent } from './products.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProductsListingComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ProductListingModule { }
