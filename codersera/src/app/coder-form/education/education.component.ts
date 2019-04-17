import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {AppState} from "../../state/app.state";
import {Store} from "@ngrx/store";
import * as ResumeModelActions from "../../state/resume.actions";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit, OnDestroy{
  degree:string = "";
  university: string = "";
  dataPure:boolean = false;
  educationObject : {degree:string,university:string}[] = [];
  constructor(private toastr: ToastrService,private store:Store<AppState>) { }

  ngOnInit() {}
  ngOnDestroy(): void {
    console.log("Destroy Education triggered");

    if(this.dataPure){

      this.store.dispatch(new ResumeModelActions.AddEducation({education:this.educationObject}));
      this.store.dispatch(new ResumeModelActions.Read());
    }
  }

  saveEducationHandler() {
    if (!this.degree || !this.university) {
      if(!this.degree){
        this.toastr.error("Required Field","Degree");
        document.getElementById("degree-education").focus();
      }
      else if(!this.university){
        this.toastr.error("Required Field","University");
        document.getElementById("university-education").focus();
      }
    } else {
      this.dataPure=true;
    let tempObj = {
      degree: this.degree,
      university: this.university
    };
    this.educationObject.push(tempObj);
    this.clear();
    this.toggleWelcome();
  }
  }
  clear(){
    this.degree = "";
    this.university = "";
  }

  populateEducation(i: number) {
    this.addEducationHandler();
    this.degree = this.educationObject[i].degree;
    this.university = this.educationObject[i].university;
    this.educationObject.splice(i,1);
  }

  removeEducationHandler(indexToRemove :number) {
    this.educationObject.splice(indexToRemove,1);
  }

  
  addEducationHandler() {

    document.getElementById("welcome-education-block").style.display = "none";
    document.getElementById("input-education-block").style.display = "block";

  }
  toggleWelcome(){
    console.log("Toggle Welcome");
    document.getElementById("welcome-education-block").style.display = "block";
    document.getElementById("input-education-block").style.display = "none";
  }
}
