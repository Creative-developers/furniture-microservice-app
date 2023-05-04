import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { ProductItemComponent } from './product-item/product-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductCreateComponent,
    CommentCreateComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    AvatarModule,
    MatSnackBarModule
  ],
  exports:[
    ProductItemComponent,
    ProductCreateComponent,
    CommentCreateComponent,
    CommentItemComponent
  ]
})
export class ComponentsModule { }
