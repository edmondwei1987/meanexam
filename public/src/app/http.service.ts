import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }
  getProducts(){
    return this._http.get('/api/products');
  }
  createProduct(product){
    return this._http.post('/api/products',product);
  }
  getProduct(id){
    return this._http.get('api/products/'+id);
  }
  deleteProduct(id){
    return this._http.delete('/api/products/'+id);
  }
  updateProduct(product){
    return this._http.put('/api/products/'+product._id,product);
  }

}
