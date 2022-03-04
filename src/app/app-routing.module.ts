import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { EndComponent } from './end/end.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome-page'
  },
  {
    path: 'welcome-page',
    component: WelcomePageComponent 
  },
  {
    path: 'end',
    component: EndComponent
  },
  {
    path: 'question',
    component: FormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
