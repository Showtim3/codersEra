import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  template: `<div class="navbar-signup"><app-navbar></app-navbar></div>
   
    <div class="signup-container">
      <div class="signup-card">
      <div class="signup-heading">
        <h1>CodersERA</h1>
        Join the community of top coders.
      </div>
      <div class="signform-container">
        <div class="input-all-wrapper">
        <div class="input-box">
            <mat-form-field class="ngInput-wrapper">
              <mat-label>
                <span>Full Name</span>
              </mat-label>
              <mat-icon>
                <i  class="fa icon-self fa-user"></i>
              </mat-icon>

              <input [(ngModel)]="dataObj.name" class="input-field" placeholder="Enter you full name" matInput >
            </mat-form-field>
        </div>
        
        <div class="input-box">
        <mat-form-field class="ngInput-wrapper">
          <mat-label>
            <span>I am a..</span>
          </mat-label>
          <mat-icon><i  class="fa fa-wrench"></i></mat-icon>
         

          <mat-select>
  <mat-option (click)="optionHandler(i)" *ngFor="let skill of skills;let i = index" [value]="i"><span>{{skill.name}}:{{skill.description  }}</span></mat-option>
</mat-select>
        </mat-form-field>
        </div>
          
        <div class="input-box">
          <mat-form-field class="ngInput-wrapper">
            <mat-icon><i  class="fa fa-envelope"></i></mat-icon>
            <mat-label><span>Email</span></mat-label>
            <input [(ngModel)]="dataObj.email" class="input-field" matInput placeholder="Email Address">
          </mat-form-field>
        </div>

        <div class="input-box">
          <mat-form-field class="ngInput-wrapper">
            <mat-icon><i  class="fa fa-lock"></i></mat-icon>
            <mat-label><span>Password</span></mat-label>
            <input [(ngModel)]="dataObj.password" type="password" class="input-field" matInput placeholder="Password should be atleast 8 characters">
          </mat-form-field>
        </div>

        <div class="input-box">
          <mat-form-field class="ngInput-wrapper">
            <mat-icon><i  class="fa fa-lock"></i></mat-icon>
            <mat-label><span>Confirm Password</span></mat-label>
            <input class="input-field" matInput placeholder="Confirm Password">
          </mat-form-field>
          
        </div>
          <div class="submit-btn">
          <button (click)="submitHandler()"  mat-raised-button><span>Submit</span></button>
          </div>
      </div>
      </div>
      </div>
    
        <app-footer></app-footer>
    </div>
  `,

})
export class SignupFormComponent implements OnInit {
  skills : {name:string,description:string}[] = [];
  x:string = "Apple";
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  dataObj: {name:string,profession:any,email:string,password:string} = {name:"",profession:"",email:"",password:""};
  constructor() {
    this.skills = [
      {
        name:"Developer",
        description:"  Front-end, back-end, full-stack etc."
      },{
        name:"Designer",
        description:"  UI,UX,visual,interaction etc."
      },{
        name:"Finance Expert",
        description:"  FP&A, M&A, quarterly etc."
      },{
        name:"Project Manager",
        description:"  Agile PM, scrum master etc."
      }



    ];
  }

  ngOnInit() {}

  optionHandler(i){
    this.dataObj.profession = this.skills[i];
  }
  submitHandler() {
    console.log(this.dataObj);
  }
}
export interface Food {
  value: string;
  viewValue: string;
}
