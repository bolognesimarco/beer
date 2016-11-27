import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBodyComponent } from './body.component';
import { AppSigninComponent } from './app.signin.component';
import { AppHomeGuestComponent } from './app.home.guest.component';
import { RouterModule } from '@angular/router';
import { StateService } from '../services/StateService'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'body.html',
        component: AppBodyComponent
      },
      {
        path: 'signin',
        component: AppSigninComponent
      },
      {
        path: 'home',
        component: AppHomeGuestComponent
      }
    ])
  ],
  providers: [StateService],
  declarations: [AppBodyComponent, AppSigninComponent, AppHomeGuestComponent],
  bootstrap: [AppBodyComponent]
})
export class AppModule { }
