import { UserService } from './Services/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from './Services/user-login.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'shopping';

constructor(
  private userSrv:UserService,
  private authServ:UserLoginService ,
  private route:ActivatedRoute ,
  private router:Router){
    this.authServ.user$.subscribe(user =>{
  if(user)
  {
    this.userSrv.save(user);
    let returnUrl = this.route.snapshot.queryParamMap.get('returnURL');
    this.router.navigateByUrl(returnUrl);
  }
});

}



}
