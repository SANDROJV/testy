import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { EndComponent } from './end/end.component';
import { InsightsComponent } from './insights/insights.component';
import { PersonalComponent } from './personal/personal.component';
import { SkillsComponent } from './skills/skills.component';
import { CovidComponent } from './covid/covid.component';
import { ApplicationsComponent } from './applications/applications.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent 
  },
  {
    path: 'end',
    component: EndComponent
  },
  {
    path: 'insights',
    component: InsightsComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'covid',
    component: CovidComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
