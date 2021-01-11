import { IProduct } from './../../../Shared/prod-frm-firebase';
import { ProductsService } from './../../../Services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit , OnDestroy{

  //products$;

  products: any[];
  filterdProducts: any[];
  subscripe: Subscription;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private prodSrv:ProductsService) {
    //this.products$ =  this.prodSrv.getAllProducts();

    this.subscripe = this.prodSrv.getAllProducts()
    .subscribe(products => {
      this.filterdProducts = this.products = products;
              // Calling the DT trigger to manually render the table
      this.dtTrigger.next();

    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 1
    };
  }

  filter(query: string)
  {
    this.filterdProducts = (query) ?
    this.products.filter(p =>
                              p.payload.val().title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
                              p.payload.val().price.toString().includes(query.toString())
                        ) : this.products;

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}


