import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup = new FormGroup({
      
    'email':new FormControl(null, [Validators.required, Validators.email]),
    'password':new FormControl(null , Validators.pattern('^[A-Z][a-z0-9]{3,8}$')),

  });

  erro:string;

  constructor(public _AuthService:AuthService,public _Router:Router) { }

  getFormData(FormData){

    this._AuthService.signIn(FormData.value).subscribe(Date=>{

      if(Date.message == 'success'){
        this._Router.navigate(['/home']);
        this._AuthService.saveUserData(Date.user, Date.token);
       
      }else{
        this.erro = Date.message;
      }
      
    });
  }

  ngOnInit(): void {

  }

}
