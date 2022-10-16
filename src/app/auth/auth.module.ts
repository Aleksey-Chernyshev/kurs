import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthComponent} from "./auth.component";
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";


@NgModule({
  declarations:[
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ],
    imports: [
      CommonModule,
      RouterOutlet,
      SharedModule,
      AuthRoutingModule
    ]
  }
)
export class AuthModule{}
