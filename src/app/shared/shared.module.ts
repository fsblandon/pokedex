import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../views/detail/detail.component';
import { HomeComponent } from '../views/home/home.component';
import { RegisterComponent } from '../views/register/register.component';
import { LoginComponent } from '../views/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../pipes/search.pipe';



@NgModule({
  declarations: [
    DetailComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DetailComponent
  ]
})
export class SharedModule { }
