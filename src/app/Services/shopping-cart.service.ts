import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IShoppingCart } from '../Shared/ishopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db : AngularFireDatabase) { }


//to create shopping-cart node
private create(){
  return this.db.list('/shopping-carts').push({
    dateCreated: new Date().getTime()
  });
}

//to create id of user or check it
public async getOrCreateCartId() {
  let cartId = localStorage.getItem('cartId');
  if (cartId) return cartId;
  let result = await this.create();
  localStorage.setItem('cartId', result.key);
  return result.key;
 }

 //
 public getItem(cartId: string, productId: string){
  return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
}

//to addToCart
async addToCart(product) {
  this.updateCart(product , +1)
}

//to addToCart
async removeFromCart(product) {
  this.updateCart(product , -1)
}


async updateCart(product , quantityStatus) {
  let cartId = await this.getOrCreateCartId();

  let item$ = this.getItem(cartId, product.key);

  item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
    if (item.payload.exists()) {item$.update({ product: product.payload.val(), quantity: item.payload.val().quantity + quantityStatus })}
    else item$.set({ product: product.payload.val(), quantity: 1 });
  })
}


public async getCart():Promise<Observable<IShoppingCart>>{
  const cartId = await this.getOrCreateCartId();
  //if (cartId && this.db.object('/shopping-carts/' + cartId + '/items')) {
  return this.db.object(`/shopping-carts/${cartId}`).valueChanges()
    .pipe(map((cart:IShoppingCart) => new IShoppingCart(cart.items)))
  }
//}

async clearCart() {
  let cartId = await this.getOrCreateCartId();
  return this.db.object(`/shopping-carts/${cartId}/items`).remove();
}

}
