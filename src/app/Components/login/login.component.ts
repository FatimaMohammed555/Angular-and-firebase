import { UserLoginService } from './../../Services/user-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private userServ:UserLoginService) { }

  login() {
    //const provider = new firebase.auth.GoogleAuthProvider();
    this.userServ.login();
  }

  ngOnInit(): void {
  }

}
