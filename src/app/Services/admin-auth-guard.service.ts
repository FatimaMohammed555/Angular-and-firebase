//import { map } from 'rxjs/operators';
import { Iuser } from './../Shared/iuser';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from './user-login.service';
import { UserService } from './user.service';
import { switchMap }from 'rxjs/operators';
//import  "rxjs/add/operator/switchMap";


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private userSrv:UserService) { }

   canActivate():Observable<boolean>{
 return this.userSrv.AppUser$.pipe(map((appUser:Iuser) =>appUser.isAdmin)
 )}



}
