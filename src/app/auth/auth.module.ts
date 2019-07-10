import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MAterial
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ]
})
export class AuthModule { }
