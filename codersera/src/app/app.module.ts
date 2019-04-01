import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { Content1Component } from './content1/content1.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { SectionWorkComponent } from './section-work/section-work.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {routingComponents} from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material";
import {MatSelectModule} from "@angular/material/select";
import { ContactUsComponent } from './contact-us/contact-us.component';
import {AgmCoreModule} from "@agm/core";
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    Content1Component,
    FooterComponent,
    CardComponent,
    SectionFeaturesComponent,
    SectionWorkComponent,
    SignupFormComponent,
    routingComponents,
    LandingPageComponent,
    ContactUsComponent,
    ProjectsComponent,

  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAfJTVKnpLl0ULuuwDuix-9ANpyQhP6mfc'
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
