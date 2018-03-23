import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product:any;
  disableDelete:boolean;
  constructor(private _route:ActivatedRoute,private _router:Router,private _httpService:HttpService) {
    this.disableDelete=true;
    this.product={name:'',qty:null,price:null}; 
    this._route.paramMap.subscribe((params)=>{
      // console.log(params.get('id'));
      this._httpService.getProduct(params.get('id')).subscribe(data=>{
        // console.log(data);
        this.product=data;
        if(this.product.qty>0){
          this.disableDelete=true;
        }else{
          this.disableDelete=false;
        }
      });
    });
  }

  deleteProduct(){
      this._httpService.deleteProduct(this.product._id).subscribe(data=>{
      this._router.navigate(['/products']);
    });
  }

  ngOnInit() {
  }

}
