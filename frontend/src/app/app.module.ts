import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticatedService } from "./services/ensure-authenticated.service";
import { LoginRedirectService } from "./services/login-redirect.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent, canActivate: [LoginRedirectService]},
      {path: 'register', component: RegisterComponent, canActivate: [LoginRedirectService]},
      {path: 'status', component: StatusComponent, canActivate: [EnsureAuthenticatedService]},
    ]),
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthService,
    EnsureAuthenticatedService,
    LoginRedirectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
