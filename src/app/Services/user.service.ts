
import { Iuser } from './../Shared/iuser';
import  firebase  from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { UserLoginService } from './user-login.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
//import { switchMap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase , private userLogSrv:UserLoginService) { }

save(user:firebase.User){
  //user is cosider as table
  //user.id -->i want to save user id
this.db.object('/users/' + user.uid).update({
  name:user.displayName,
  email:user.email
})
console.log(user);
}


//to get user by id
getUserById(uid :string):AngularFireObject<Iuser>{
return  this.db.object('/users/' + uid);
}

get AppUser$():Observable<Iuser>{
  return this.userLogSrv.user$.pipe(
    switchMap(user => {
      if(user){
         return this.getUserById(user.uid).valueChanges();
          }
          else {
            return of(null);
          }
    })
  )
  }






}
