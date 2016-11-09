import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHeaderComponent } from './header.component';
import { AppFooterComponent } from './footer.component';
import { AppTestComponent } from './app.test.component';
import { AppTest2Component } from './app.test2.component';
import { AppTestFComponent } from './app.testF.component';
import { AppTest2FComponent } from './app.test2F.component';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'header.html',
        component: AppHeaderComponent
      },
      {
        path: 'footer.html',
        component: AppFooterComponent
      },
      {
        path: 'h1',
        component: AppTestComponent
      },
      {
        path: 'h2',
        component: AppTest2Component
      },
      {
        path: 'f1',
        component: AppTestFComponent
      },
      {
        path: 'f2',
        component: AppTest2FComponent
      }
    ])],
  declarations: [AppHeaderComponent, AppFooterComponent, AppTestComponent, AppTest2Component, AppTestFComponent, AppTest2FComponent],
  bootstrap: [AppHeaderComponent, AppFooterComponent]
})
export class AppModule { }
