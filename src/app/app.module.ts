import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { UserModule } from './modules/user/user.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    VehiclesModule,
    UserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
