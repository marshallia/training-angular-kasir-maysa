import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Eror404Component } from './eror404/eror404.component';
import {AdminModule} from './admin/admin.module';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Eror404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AdminModule,
      FormsModule,
      AdminRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
