import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'products',component:ListProductComponent},
  {path:'products/edit/:id',component:UpdateProductComponent},     
  {path:'products/new',component:NewProductComponent},
  {path:'products/:id',component:DetailProductComponent},
  {path:'',pathMatch:'full',redirectTo:'products'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
