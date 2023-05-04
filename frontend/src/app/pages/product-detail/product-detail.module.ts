import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { ProductDetailComponent } from './product-detail.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule
  ]
})
export class ProductDetailsModule { }
