import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { take } from 'rxjs/operators';
import { IProduct } from 'src/app/Shared/prod-frm-firebase';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories$;
  product:any = {};
  id;

  constructor(private categorySrv:CategoriesService ,
              private prodServ:ProductsService ,
              private router:Router ,
              private activeRouter:ActivatedRoute) {}

   onSubmit(f:NgForm)
{
console.log(f.value);
console.log(f.valid);
}

   Save(product){
     if(this.id)
     {
this.prodServ.update(this.id , product);
     }
     else
     {
      this.prodServ.addProduct(product);
     }
this.router.navigateByUrl('/admin/products');
   }

  ngOnInit(){

    this.categories$ = this.categorySrv.getCategories();

    this.id = this.activeRouter.snapshot.paramMap.get('id');
if(this.id){
  this.prodServ.getProdById(this.id)
  .valueChanges()
  .pipe(take(1))
  .subscribe(prod => {
    if(prod){
      this.product = prod ;
      console.log(prod)
    }
  })
}

  }

  delete(productId) {
    if(confirm('Are you sure you want to delete this product ?')){
      this.prodServ.delete(productId);
    }
    this.router.navigate(['admin/products']);
  }



}


  // this.prodServ.getProducts().subscribe(prd => {
  //   this.products = prd;
  //   console.log(this.products);
  //   console.log(typeof this.products);
  //   const id = this.activeRouter.snapshot.paramMap.get('id');
  //   this.product = this.products.filter(prod => prod.id== id)


  // })

