import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  })
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute,
    private route :Router
  ) {
    this.router.paramMap.subscribe((params => {
      const id = Number(params.get('id'));
      console.log("id", id)
      this.productService.getProduct(id).subscribe(data => {
        this.product = data;

        this.productForm.patchValue({
          name: data.name,
          price: data.price
        })
      }, error => console.log(error.message))
    }))
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 3

      }
      this.productService.updateProduct(product)
        .subscribe((product) => {
          console.log('product', product);
          this.route.navigate([""])
        })
    }
  }
}
