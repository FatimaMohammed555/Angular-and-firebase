import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iuser } from '../Shared/iuser';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminNotAccessService {

  constructor(private userSrv:UserService) { }

   canActivate():Observable<boolean>{
 return this.userSrv.AppUser$.pipe(map((appUser:Iuser) =>!appUser.isAdmin)
 )}


}
