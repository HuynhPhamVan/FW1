import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/product-add/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit/product-edit.component';

// decorators
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminLayoutComponent,
    ProductDetailComponent,
ProductAddComponent,
ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
