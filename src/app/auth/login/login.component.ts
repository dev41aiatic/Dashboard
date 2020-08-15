import {FormGroup, FormControl} from '@angular/forms'
import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),


  })

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

   async onLogin(){
    const {email, password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email,password);
    if (user){
      //Redireccionar a la home page
      this.router.navigate(['/home']);
    }
    }
    catch(error){console.log(error)}
    
  }
}
