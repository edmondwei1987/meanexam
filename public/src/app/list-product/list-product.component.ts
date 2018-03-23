import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products:any;
  constructor(private _httpService:HttpService) {
    this.products=[];
    this._httpService.getProducts().subscribe(data=>{
      this.products=data;
    });
  }

  ngOnInit() {
  }

}
