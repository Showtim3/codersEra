import { Component, OnInit } from '@angular/core';
import {StateService} from "../../service/state-service.service";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-preview-profile',
  templateUrl: './preview-profile.component.html',
  styleUrls: ['./preview-profile.component.sass']
})
export class PreviewProfileComponent implements OnInit {

  constructor(private stateService:StateService,private router:Router) { }

  ngOnInit() {
  }

async  previewProfileHandler() {
     console.log("Preview Profile Triggered");
    try {
     let userId =  await this.stateService.saveDataToFireBase();
     this.router.navigateByUrl(`resume/${userId}`);
    }catch (e) {
      alert(e);

    }
  //console.log(this.stateService.getState());

  }

}
