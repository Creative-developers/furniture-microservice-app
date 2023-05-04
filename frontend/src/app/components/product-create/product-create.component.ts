import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { CustomValidationService } from '../../services/customvalidation.service';
import { MatDialogRef } from '@angular/material/dialog';

import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  productForm!: FormGroup;
  selectedFile!: File;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private customValidationService: CustomValidationService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ProductCreateComponent>
    ) { }


  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      image: [null, [
           this.customValidationService.requiredValidator(),
          this.customValidationService.imageTypeValidator("jpg, jpeg, png"),
          this.customValidationService.fileSizeValidator(2000000)
      ]]
    });
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    this.productForm.controls['image'].markAsTouched();
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = new FormData();
      formData.append('name', this.productForm.get('name')?.value);
      formData.append('description', this.productForm.get('description')?.value);
      formData.append('price', this.productForm.get('price')?.value);
      console.log({file: this.selectedFile})
      formData.append('image', this.selectedFile)
      
      this.productService.createProduct(formData).subscribe((product: Product) => {
        this.snackBar.open('Product created successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.dialogRef.close(product);
        this.productForm.reset();
      }, (error) => {
        console.error('Error creating product:', error);
        this.snackBar.open('Error creating product', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }
  
  
  

}
