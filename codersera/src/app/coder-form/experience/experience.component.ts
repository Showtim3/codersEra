import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import CoderFormValidation from "../coder-form-validation";
import * as ResumeModelActions from "../../state/resume.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})


export class ExperienceComponent implements OnInit,OnDestroy {
  experienceObject:{expTitle:string,expLink:string,expDescription:string}[] = [];
  expTitle:string = "";
  expLink:string = "";
  expDescription:string = "";
  dataPure:boolean = false;
  constructor(private toastr:ToastrService,private store:Store<AppState>) {}

  ngOnInit() {}
  ngOnDestroy(): void {
    console.log("Destroy Experience triggered");

    if(this.dataPure){

      this.store.dispatch(new ResumeModelActions.AddExperience({exp:this.experienceObject}));
      this.store.dispatch(new ResumeModelActions.Read());
    }
  }

  clear(){
    this.expTitle = "";
    this.expLink = "";
    this.expDescription = "";
  }

  saveExperienceHandler() {
    if(!this.expTitle||!this.expDescription){
      if(!this.expTitle){
        this.toastr.error("Required Field","Experience Title");
        document.getElementById("title-experience").focus();
      }
      else if(!this.expDescription){
        this.toastr.error("Required Field","Description");
        document.getElementById("description-experience").focus();
      }
    }
    else if(this.expLink!==""&&CoderFormValidation.isValidUrl(this.expLink)===null){
      this.toastr.error("Invalid URL","URL");
      document.getElementById("link-experience").focus();
    }
    else {
      this.dataPure = true;
      let tempObj = {
        expTitle: this.expTitle,
        expLink: this.expLink,
        expDescription: this.expDescription
      };
      this.experienceObject.push(tempObj);
      this.clear();
      this.toggleWelcome();
    }
  }

  populateExperience(i: number) {
    this.addExperienceHandler();
    this.expTitle = this.experienceObject[i].expTitle;
    this.expLink = this.experienceObject[i].expLink;
    this.expDescription = this.experienceObject[i].expDescription;
    this.experienceObject.splice(i,1);
  }

  deleteProject(indexToRemove: number) {
    this.experienceObject.splice(indexToRemove,1);
  }


  addExperienceHandler() {
    document.getElementById("welcome-experience-block").style.display = "none";
    document.getElementById("input-experience-block").style.display = "block";
  }
  toggleWelcome(){
    document.getElementById("welcome-experience-block").style.display = "block";
    document.getElementById("input-experience-block").style.display = "none";
  }
}
