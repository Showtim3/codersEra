import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupFormComponent} from "./signup-form/signup-form.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ProjectsComponent} from "./projects/projects.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:LandingPageComponent},
  {path:'signup',component:SignupFormComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SignupFormComponent,LandingPageComponent,ContactUsComponent,ProjectsComponent];
