import { Component, OnInit } from '@angular/core';
import {RESUMEOBJECT} from "../../resume-data/resume-object";
import {StateService} from "../service/state-service.service";
import {AngularFireDatabase} from "@angular/fire/database";
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {
  //resumeObj :{}= RESUMEOBJECT;
  resumeObj : {employment}={employment:[]};
  firebaseObj : {};
  empObj:{}[] = [];
  userId :string;
  showProfile:boolean = false;
  constructor(private stateService: StateService, public db: AngularFireDatabase,private route:ActivatedRoute,private spinner:NgxSpinnerService) {
//    let obj = this.stateService.convertDataToResumeObject();
//     console.log(obj);
//     this.resumeObj = obj;
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      this.userId = this.route.snapshot.params.id;
      console.log(this.userId);
      this.spinner.show();
    });

  }

  ngOnInit() {
    this.spinner.show();
  console.log("ngOintResume");
  this.getData();


  }

  getData(){
  try{
      let itemRef = this.db.object(`users/${this.userId}`);
      itemRef.snapshotChanges().subscribe(action => {

        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
        this.firebaseObj = action.payload.val();
        this.resumeObj = this.stateService.convertDataToResumeObject(this.firebaseObj);
        let tempObj = this.resumeObj.employment;
        for(let key in this.resumeObj.employment){
          //console.log(this.resumeObj.employment[key][0]);
          this.empObj.push(this.resumeObj.employment[key][0]);
        }
        console.log(this.resumeObj);
        console.log(tempObj);
        this.showProfile=true;
  this.spinner.hide();
      });
  }catch (e) {
    alert(e);
  }

}
}
