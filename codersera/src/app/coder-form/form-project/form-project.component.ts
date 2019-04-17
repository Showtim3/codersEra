import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import CoderFormValidation from "../coder-form-validation";
import * as ResumeModelActions from "../../state/resume.actions";
import {AppState} from "../../state/app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.sass']
})
export class FormProjectComponent implements OnInit,OnDestroy {
  projectObj :{projectName:string, description:string,link:string,techUsed: string}[] = [];
  techUsed:string;
  projectName: string;
  description:string;
  link:string = "";
  dataPure:boolean;
  constructor(private toastr :ToastrService,private store: Store<AppState>) {

  }

  ngOnInit() {
  }

  saveProjectHandler() {
    console.log(this.link);
    if(!this.projectName||!this.description||!this.techUsed){
      if(!this.projectName){
        this.toastr.error("Required Field","Project Name");
        document.getElementById("projectName-project").focus();
      }
      else if(!this.description){
        this.toastr.error("Required Field","Description");
        document.getElementById("description-project").focus();
      }
      else if(!this.techUsed){
        this.toastr.error("Required Field","Technologies");
        document.getElementById("technologies-project").focus();
      }
    }
    else if(this.link!=="" && CoderFormValidation.isValidUrl(this.link) === null){
        console.log(this.link);
      this.toastr.error("Invalid URL","URL");
      document.getElementById("url-project").focus();
    }
    else if(!CoderFormValidation.shouldHaveAtleastFourTech(this.techUsed)){
      this.toastr.error("","Minimum 4 technologies required");
      document.getElementById("techUsed-project").focus();
    }
    else {
      this.dataPure = true;
      let tempObj = {
        projectName: this.projectName,
        techUsed: this.techUsed,
        link:this.link,
        description:this.description
      };
      this.projectObj.push(tempObj);
      this.clearInputFields();
      this.toggleWelcome();
    }
  }
      clearInputFields() {
        this.projectName = "";
        this.techUsed = "";
        this.link = "";
        this.description = "";
      }

  ngOnDestroy(){
    console.log("Destroy Projects triggered");
  if(this.dataPure){
    this.store.dispatch(new ResumeModelActions.AddProject({projects:this.projectObj}));
    this.store.dispatch(new ResumeModelActions.Read());
  }
  }

  populateProject(i: number) {
    this.addProjectHandler();
    this.projectName = this.projectObj[i].projectName;
    this.techUsed =  this.projectObj[i].techUsed;
    this.link=this.projectObj[i].link;
    this.description=this.projectObj[i].description;
    this.projectObj.splice(i,1);
  }

  deleteProject(indexToRemove: number) {
    this.projectObj.splice(indexToRemove,1);
  }


  addProjectHandler() {
    document.getElementById("welcome-project-block").style.display = "none";
    document.getElementById("input-project-block").style.display = "block";
  }
  toggleWelcome(){
    document.getElementById("welcome-project-block").style.display = "block";
    document.getElementById("input-project-block").style.display = "none";
  }
}
