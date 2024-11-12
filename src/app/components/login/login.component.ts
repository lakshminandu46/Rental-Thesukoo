import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private router:Router){
  this.LoginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}
checkLogin(){
  console.log(this.LoginForm.value);
  if(this.LoginForm.valid){
    if(this.LoginForm.value.username=="admins"&& this.LoginForm.value.password=="admin123"){
      this.router.navigateByUrl('/admin/cars');
    }
    else if(this.LoginForm.value.password==this.LoginForm.value.username.slice(0,3)+"123"){
      this.router.navigateByUrl('/user/cars');
    }
  }
}
 
  
  

}
