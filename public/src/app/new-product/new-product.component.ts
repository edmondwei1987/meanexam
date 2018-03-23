import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  product:any;
  errors:any;
  constructor(private _httpService:HttpService,private _router:Router) {
    this.product={name:'',qty:null,price:null};
    this.errors=[];
  }

  ngOnInit() {
  }
  createProduct(){
    this.errors=[];
    this._httpService.createProduct(this.product).subscribe((data:any)=>{
      this.product={name:'',qty:null,price:null};      
      if(data.errors){
        for(let key in data.errors){
          this.errors.push(data.errors[key]);
        }
      }else{
        this._router.navigate(['/products']);
      }
    });
  }

  resetCreate(){
    this.product={name:'',qty:null,price:null};
    this.errors=[];
  }

}
