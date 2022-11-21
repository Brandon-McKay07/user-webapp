import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HelpusComponent } from './helpus/helpus.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    HelpusComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
