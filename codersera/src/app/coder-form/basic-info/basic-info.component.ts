import {Component, OnInit} from '@angular/core';
import {AppState} from "../../state/app.state";
import {ToastrService} from "ngx-toastr";
import {Store} from "@ngrx/store";
import * as ResumeModelActions from "../../state/resume.actions";
import {Observable} from "rxjs";
import {ResumeModel} from "../../state/resume.model";
import {StateService} from "../../service/state-service.service";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.sass']
})
export class BasicInfoComponent implements OnInit {
  informationObject : {name:string,expertise:string,location:string,introduction:string} ;
  name:string = "";
  expertise:string = "";
  location:string = "";
  introduction:string = "";

  resumeModel : Observable<ResumeModel[]>;

  constructor(private toastr: ToastrService,private store:Store<AppState>,private stateService: StateService) {

  }

   ngOnInit() {

   // console.log("On init Triggered");
    this.store.dispatch(new ResumeModelActions.Read());
    let x = this.stateService.getState();
    this.name = x.name;
    this.expertise = x.expertise;
    this.location = x.location;
    this.introduction = x.introduction;
    //console.log(x);

  }


  saveInformation() {
    if(!this.name||!this.location||!this.introduction||!this.expertise){
      if(!this.name){
        this.toastr.error("Required Field","Name");
        document.getElementById("name-basicInfo").focus();
      }
      else if(!this.expertise){
        this.toastr.error("Required Field","Profile");
        document.getElementById("profile-basicInfo").focus();
      }
      else if(!this.location){
        this.toastr.error("Required Field","Location");
        document.getElementById("location-basicInfo").focus();
      }
      else if(!this.introduction){
        this.toastr.error("Required Field","Brief Introduction");
        document.getElementById("introduction-basicInfo").focus();
      }
    }
    else{
      this.informationObject = {
        name:this.name,
        expertise:this.expertise,
        location:this.location,
        introduction:this.introduction,
      };
      //console.log(this.informationObject);
      this.store.dispatch(new ResumeModelActions.AddBasicInfo({basicInfo:this.informationObject}));
      this.toastr.success("Information Stored Successfully");
    }
  }
}
