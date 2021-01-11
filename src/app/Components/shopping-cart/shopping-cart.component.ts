import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/Shared/ishopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$:Observable<IShoppingCart>;

  constructor(private cartSrv:ShoppingCartService) { }

 async ngOnInit() {
this.cart$ = await this.cartSrv.getCart();
  }

  clearCart() {
    this.cartSrv.clearCart();
  }

}
