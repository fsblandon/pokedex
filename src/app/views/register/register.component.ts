import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  users: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.minLength(5)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    if(JSON.parse(localStorage.getItem('users'))) {
      this.users = JSON.parse(localStorage.getItem('users'));
      this.users.push(this.registerForm.value);
      localStorage.setItem('users', JSON.stringify(this.users));
    } else {
      this.users.push(this.registerForm.value);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    this.registerForm.reset();
    this.route.navigateByUrl('login');
  }

  toCancel() {
    this.route.navigateByUrl('login');
  }

}
