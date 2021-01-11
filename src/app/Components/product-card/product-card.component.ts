import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product:any;
  @Input('shoppingCart') shoppingCart;


  constructor(private shoppingCartSrv:ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart()
  {
this.shoppingCartSrv.addToCart(this.product);
  }

  removeFromCart()
  {
this.shoppingCartSrv.removeFromCart(this.product);
  }

/* getQuantity()
{
  if(!this.shoppingCart) return 0 ;
  let item = this.shoppingCart.items[this.product.key];
  return item ? item.quantity: 0;
} */

getQuantity() {
  if (!this.shoppingCart) {
    return 0;
  } else if (this.shoppingCart && !this.shoppingCart.items) {
    return 0;
  } else {
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }
}

}
