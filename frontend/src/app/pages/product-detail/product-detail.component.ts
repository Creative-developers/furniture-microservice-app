import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Product }  from '../../models/Product.model'
import { Comment }  from '../../models/Comment.model'

import { environment } from 'src/environments/environment';
import { ProductService } from '../../services/product.service'
import { CommentService } from '../../services/comment.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  implements OnInit {
  product!:Product
  defaultImage:string =   'https://placehold.co/300x300'
  apiURL:string = environment.PRODUCTS_API_URL 
  comments: Comment[] = []
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private commentService: CommentService
  ){}

  ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.productService.getProductById(id).subscribe(
        product => {
          this.product = product;
          this.commentService.getComments(id).subscribe(comments => {
             this.comments = comments
          }, error => {
            console.error('Error fetching comments:', error)
          })
        },
        error => {
          console.error('Error fetching product:', error);
        }
      );
  }

  onCommentCreated(comment: Comment): void {
    console.log({comment})
    this.comments.push(comment)
  }

  getImage(): string {
    if (!this.product.image || this.product.image === '')  return this.defaultImage;
    return `${this.apiURL}/${this.product.image}`;
  }

  filterComments() {
      this.commentService.filterComments(this.product._id).subscribe(comments => {
          this.comments = comments;
      });
  }

}
