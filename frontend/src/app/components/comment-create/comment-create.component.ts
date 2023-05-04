import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentService  } from '../../services/comment.service';

import { Comment } from  '../../models/Comment.model'
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent {
  
  commentForm!: FormGroup;
  @Input() productId!:string;
  @Output() commentCreated = new EventEmitter<Comment>();

  @ViewChild('commentFormDirective') commentFormDirective!: NgForm;
   
  constructor(private formBuilder: FormBuilder, private commentService: CommentService,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
       author: ['', Validators.required],
       message:['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      const author = this.commentForm.get('author')?.value;
      const message = this.commentForm.get('message')?.value;
      const productId =  this.productId
      
      const comment: any = {
        productId,
        author,
        message
      };
  
      this.commentService.createComment(comment).subscribe(
        (comment) => {
          this.snackBar.open('Product created successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
          console.log('Comment posted successfully:', comment);
          this.commentCreated.emit(comment);
          this.commentForm.reset();
          this.commentFormDirective.resetForm();
        },
        (error) => {
          console.error('Error posting comment:', error);
          this.snackBar.open('Error creating product', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        }
      );
    } else {
      this.commentForm.markAllAsTouched();
    }
  }

}
