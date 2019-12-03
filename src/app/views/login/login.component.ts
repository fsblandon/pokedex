import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  users: User[] = [];

  emailInvalid = true;

  passInvalid = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if(JSON.parse(localStorage.getItem('users'))) {
      this.users = JSON.parse(localStorage.getItem('users'));
      const user = this.users.find(u => u.email === this.loginForm.value.email);
      if (user.email === this.loginForm.value.email) {
        if (user.password === this.loginForm.value.password) {
          this.loginForm.reset();
          this.route.navigateByUrl('home');
        } else {
          this.passInvalid = false;
        }
        
      } else {
        this.emailInvalid = false;
        /* this.loginForm.reset();
        this.route.navigateByUrl('login'); */
      }
    } else {
      this.loginForm.reset();
      this.route.navigateByUrl('register');
    }
    
  }

  toRegister() {
    this.route.navigateByUrl('register');
  }

}
