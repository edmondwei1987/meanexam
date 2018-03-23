import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product:any;
  errors:any;
  constructor(private _route:ActivatedRoute,private _router:Router,private _httpService:HttpService) { 
    this.errors=[];
    this.product={name:'',qty:null,price:null}; 
    this.getProduct();
  }
  getProduct(){
    this._route.paramMap.subscribe((params)=>{
      // console.log(params.get('id'));
      this._httpService.getProduct(params.get('id')).subscribe(data=>{
        // console.log(data);
        this.product=data;
      });
    });
  }
  updateProduct(){
    this.errors=[];
    this._httpService.updateProduct(this.product).subscribe((data:any)=>{
      if(data.errors){
        for(let key in data.errors){
          this.errors.push(data.errors[key]);
        }
      }else{
        this._router.navigate(['/products']);
      }
    });
  }
  resetUpdate(){
    this.getProduct();
  }
  ngOnInit() {
  }

}
