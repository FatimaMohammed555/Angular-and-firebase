import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';
import { promise } from 'protractor';
import { IShoppingCart } from 'src/app/Shared/ishopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit ,OnDestroy  {


  filterdProducts: any[] = [];
  products: any[] = [];
  categories$;
  category: string;
  //cart$ :Observable<IShoppingCart>;
  subscription: Subscription;
  cart : any;

  constructor(private  prodServ:ProductsService ,
              private catServ:CategoriesService ,
              private cartSrv:ShoppingCartService,
              private route:ActivatedRoute) {}

 async ngOnInit(){
    this.categories$ = this.catServ.getCategories();

    this.subscription =  this.prodServ.getAllProducts()
    .subscribe(prods => {
      this.products = prods ;
      this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filterdProducts = (this.category) ?
      this.products.filter(p => p.payload.val().category === this.category ) : this.products;
      })
    });

this.subscription =  (await this.cartSrv.getCart())
.subscribe(cart => this.cart = cart);

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
