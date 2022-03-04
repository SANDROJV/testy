import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    FormPageComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
