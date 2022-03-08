import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { EndComponent } from './end/end.component';
import { PersonalComponent } from './personal/personal.component';
import { SkillsComponent } from './skills/skills.component';
import { CovidComponent } from './covid/covid.component';
import { InsightsComponent } from './insights/insights.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationsComponent } from './applications/applications.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    EndComponent,
    PersonalComponent,
    SkillsComponent,
    CovidComponent,
    InsightsComponent,
    ApplicationsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
