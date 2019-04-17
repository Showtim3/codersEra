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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule, MatButtonModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material";
import { ContactUsComponent } from './contact-us/contact-us.component';
import {AgmCoreModule} from "@agm/core";
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { CoderFormComponent } from './coder-form/coder-form.component';
import { SkillsComponent } from './coder-form/skills/skills.component';
import { FormProjectComponent } from './coder-form/form-project/form-project.component';
import { ExperienceComponent } from './coder-form/experience/experience.component';
import { EducationComponent } from './coder-form/education/education.component';
import {MatSnackBarModule} from "@angular/material";
import { BasicInfoComponent } from './coder-form/basic-info/basic-info.component';


import {ToastrModule} from "ngx-toastr";
import {resumeModelReducer} from "./state/resume.reducer";
import {StoreModule} from "@ngrx/store";
import { PreviewProfileComponent } from './coder-form/preview-profile/preview-profile.component';

import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {NgxSpinnerComponent, NgxSpinnerModule} from "ngx-spinner";

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
    ResumeComponent,
    CoderFormComponent,
    SkillsComponent,
    FormProjectComponent,
    ExperienceComponent,
    EducationComponent,
    BasicInfoComponent,
    PreviewProfileComponent,


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
    MatAutocompleteModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    StoreModule.forRoot({
      reducer: resumeModelReducer
    }),
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAfJTVKnpLl0ULuuwDuix-9ANpyQhP6mfc'
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],

  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
