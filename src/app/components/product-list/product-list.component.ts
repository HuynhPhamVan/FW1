import { NgLocalization } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
products!: IProduct[]
myName :string=""
 
status: boolean =false;
constructor(private productService: ProductService) {
  this.productService.getProducts().subscribe(data =>{
    this.products =data
  })
}
setValue(e: any) {
  this.myName = e.target.value;
}
toggle() {
  this.status = !this.status
}
removeItem(id: number){
  this.productService.deleteProduct(id).subscribe(()=>{
    this.products = this.products.filter(product => product.id !== id)
    location.reload
  })
}

// updateItem(id: Number){
//   this.productService.updateProduct(this.products).subscribe(()=>{
//     this.products = this.products.filter(product => product.id !== id)
// })
// }

}
