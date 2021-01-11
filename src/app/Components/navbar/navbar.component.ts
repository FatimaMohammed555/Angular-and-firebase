import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

import { UserLoginService } from './../../Services/user-login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { UserService } from 'src/app/Services/user.service';
import { map } from 'rxjs/operators';
import { Iuser } from 'src/app/Shared/iuser';
import { IShoppingCart } from 'src/app/Shared/ishopping-cart';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  //user$:Observable<firebase.User>;
appUser:Iuser;
//shoppingCartCounter = 0;
cart$ : Observable<IShoppingCart>;

constructor(public userServ:UserLoginService , private usrSrv:UserService , private cartSrv:ShoppingCartService) {
this.usrSrv.AppUser$.subscribe(newappUser => this.appUser = newappUser);
console.log(this.appUser)

}

 async ngOnInit() {
   this.cart$  = await this.cartSrv.getCart();
  /*  cart$.valueChanges().subscribe(cart => {
     this.shoppingCartCounter = 0;
    for(let prodID in cart.items) {
      this.shoppingCartCounter += cart.items[prodID].quantity;
    }

   }) */
  }

logout(){
  this.userServ.logout();
}

}

