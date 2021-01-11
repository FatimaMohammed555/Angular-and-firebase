import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';





@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db:AngularFireDatabase , private http:HttpClient) { }

  //add product//
addProduct(prooduct){
this.db.list('/products').push(prooduct);
}

//get all products
getAllProducts(){
  return this.db.list('/products').snapshotChanges();
  //return this.db.list('/products');

}

//get product by id
getProdById(productID:string){
//return this.db.object('products/' + productID);
return this.db.object(`/products/${productID}`);

}

delete(productId) {
  this.db.object(`/products/${productId}`).remove();
}

update(productId, product) {
  return this.db.object(`/products/${productId}`).update(product);
}

/*
getProducts(){
  return this.http.get('https://shoppingstore-c8a6f-default-rtdb.firebaseio.com/products.json');
}
 */


}
