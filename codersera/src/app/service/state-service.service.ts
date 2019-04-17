import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {ResumeModel} from "../state/resume.model";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  data:ResumeModel;
  constructor(private store:Store<AppState>,private router:Router,private db:AngularFireDatabase) {

  }

  getState(){

    //console.log("Service Triggered");
    let ar = [];
    this.store.select('reducer').subscribe(x => {ar.push(x);} );
    let key = "__zone_symbol__value";
    // console.log(ar);
    // console.log(ar[0][key]);
    this.data=ar[0][key][0];
    //console.log(this.data);
    return this.data;

  }

   convertDataToResumeObject(rawObjectFromFirebase){
    //let rawData = this.getState();
    let rawData = rawObjectFromFirebase;
    console.log(rawData);
    let skillRaw = rawData.skills;
    let skills : {skillName:string,experience:string}[]=[];
    let highlightedSkills :string[] = [];

    let languageArray :string[]= [];
    let frameWorkArray = [];
    let otherArray = [];


    for(let key in skillRaw){
      let skillsTempObj = {
        skillName: skillRaw[key].name,
        experience:skillRaw[key].experience
      };
      skills.push(skillsTempObj);
      if(skillRaw[key].showInProfile){
        highlightedSkills.push(skillRaw[key].name);
      }
      if(skillRaw[key].category==="language"){
        languageArray.push(skillRaw[key].name);
      }
      else if(skillRaw[key].category==="framework"){
        frameWorkArray.push(skillRaw[key].name);
      }
      else if(skillRaw[key].category==="other"){
        otherArray.push(skillRaw[key].name);
      }
    }
    frameWorkArray.push("Angular","React","Ember","Vue");
    otherArray.push("Super Mario","Mortal Kombat","Tekken");
    console.log(skills);
    let skillSection = [
      {skillType:"Language",skill:languageArray},
      {skillType:"Frameworks",skill:frameWorkArray},
      {skillType:"Other",skill:otherArray},

    ];
    console.log(highlightedSkills);
    console.log(skills);
    console.log(skillSection);


    let date = Date().slice(4,15);
    console.log(date);
    let resumeObjectConverted = {
      name: rawData.name,
      imageLink:"https://ih0.redbubble.net/image.516728113.5020/flat,550x550,075,f.u1.jpg",
      expertise:rawData.expertise,
      location:rawData.location,
      introduction:rawData.introduction,
      memberSince: date,
      availability:"full-time",
      highlightedSkills:highlightedSkills,
      skills:skills,
      projects:rawData.projects,
      employment:rawData.employment,
      experience:rawData.experience,
      skillSection:skillSection,
      education:rawData.education,
    };
    console.log(resumeObjectConverted);

    return resumeObjectConverted;
  }

  async saveDataToFireBase(){
    let formDataObject = this.getState();
    console.log(formDataObject);

    let userId = formDataObject.name.toLowerCase();
 let firebaseRespone =    await this.db.object(`users/${userId}`).set(formDataObject);
 console.log(firebaseRespone);
    // try{
    //   await this.db.object(`users/${userId}`).set(formDataObject);
    //
    // }catch (e) {
    //   alert(e);
    // }
    return userId;
    //return Promise.resolve(userId);
  }


}
