import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from './user-login.service';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate
{

  constructor(private authServ:UserLoginService , private router:Router) {}

    canActivate(router ,state: RouterStateSnapshot){
      return this.authServ.user$.pipe(map (
user =>{
if (user) {
  return true;
} else {
  this.router.navigate(['/login'] , {queryParams:{returnURL:state.url}});
  return false;
}

}
      ))

  }

}
