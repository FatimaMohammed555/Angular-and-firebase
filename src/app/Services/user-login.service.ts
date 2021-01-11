import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { switchMap }from 'rxjs/operators';
import { Iuser } from '../Shared/iuser';
import { of } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  //user:firebase.User;
//$ -> it is means user is observal
  user$:Observable<firebase.User>;

  constructor(private auth: AngularFireAuth , private route:ActivatedRoute ) {
    //auth.authState.subscribe(userlog =>this.user = userlog);
    this.user$ = auth.authState;
  }

login() {
    //const provider = new firebase.auth.GoogleAuthProvider();
    //let returnUrl = this.route.snapshot.queryParamMap.get('returnURL') || '/';
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

logout(){
this.auth.signOut();
}


}
