import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/product-add/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit/product-edit.component';

 const routes: Routes=[
  {
    path: '',component:AdminLayoutComponent,children:[
      {path: '', component:ProductListComponent},
      {path: 'add',component:ProductAddComponent},
      {path: ':id/edit',component:ProductEditComponent}
    ]
  }
 ];


// admin/dashboard

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

