import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import {RegistrationComponent} from '../registration/registration/registration.component';
import { RegistrationModule } from '../registration/registration.module';



@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'home', component: HomeComponent},
      {path:'signup', component: RegistrationComponent}
    ]),
    RegistrationModule
  ]
})
export class NavbarModule { }
