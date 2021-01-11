import { count } from 'rxjs/operators';
import { IShoppingCartItem } from './ishopping-cart-item';


export class IShoppingCart {

constructor(public items:IShoppingCartItem[]){}

get getTotalCounter(){
  let counter = 0 ;
  for (let productID in this.items) {
    counter += this.items[productID].quantity
  }
  return counter;
}

get productIds(){
  return Object.keys(this.items);
}

get totalPrice() {
  let sum = 0;
  for (let productId in this.items)
      sum += this.items[productId].product.price * this.items[productId].quantity;
  return sum;
}

}
