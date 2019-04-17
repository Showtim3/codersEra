import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import * as ResumeModelActions from "../../state/resume.actions";
import {SKILLOBJECT, SKILLOPTIONS} from "./languages";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = SKILLOPTIONS;
  skill="";

  languageObj : string[] = [];
  frameWorkObj : string[] = [];
  otherObj : string[] = [];
  filteredOptions: Observable<string[]>;
  defaultVal = 0;
  defaultSkill = "Beginner";
  experienceArray : number[];
  projectsArray :number[];
  levelArray :string[];

  skillFinalObject :{name:{name:string,category:string,experience:string,projects:string,level:string,showInProfile:boolean}}[];
  map : {} = {};
  constructor(private store: Store<AppState>) {
    this.experienceArray = [0,1,2,3,4,5,6,7,8,10];
    this.projectsArray = [0,1,2,3,4,5,6,7,8,10];
  }

  ngOnInit() {
    console.log(Date);

   this.levelArray = ["Beginner","Intermediate","Expert"];
   this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let x = this.options.find((element) =>{return element === filterValue});
    if(x===undefined){
      this.options.push(`Add ${filterValue}`);
    }
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  skillSelectedHandler(event: MouseEvent) {
    let found  = false;
    console.log(this.skill);
    if(this.skill.startsWith(" Add")|| this.skill.startsWith("Add")){

    }
    else {
      this.map[this.skill] = {
        name: this.skill,
        experience: "",
        projects: "",
        level: "",
        showInProfile: false,
        category: ""
      };
    }
    console.log(map[this.skill]);
    for(let key in SKILLOBJECT.languages){
      if(SKILLOBJECT.languages[key]===this.skill){
        this.languageObj.push(this.skill);
        found = true;
        break;
      }
    }
    if(!found) {
      for (let key in SKILLOBJECT.frameworks) {
        if (SKILLOBJECT.frameworks[key] === this.skill) {
          found = true;
          this.frameWorkObj.push(this.skill);
          break;
        }
      }
    }
    if(this.skill.startsWith(" Add")|| this.skill.startsWith("Add")){
      console.log(this.skill);
      this.skill = this.skill.slice(4,this.skill.length);
      this.otherObj.push(this.skill);
      this.map[this.skill] = {
        name: this.skill,
        experience: "",
        projects: "",
        level: "",
        showInProfile: false,
        category: ""
      };
    }
    this.skill= "";
  }

  highlight(component:number, index: number) {

    switch (component) {
      case 1: document.getElementById(`languageSkill${index}`).classList.toggle("skill-highlight");
      this.map[this.languageObj[index]].showInProfile=!this.map[this.languageObj[index]].showInProfile;
      console.log(this.map[this.languageObj[index]]);
        break;
      case 2:document.getElementById(`frameWorkSkill${index}`).classList.toggle("skill-highlight");
        this.map[this.frameWorkObj[index]].showInProfile=!this.map[this.frameWorkObj[index]].showInProfile;

        break;
      case 3: document.getElementById(`otherSkill${index}`).classList.toggle("skill-highlight");
      console.log(this.otherObj);
      console.log(this.otherObj[index]);
      console.log(this.map);
        this.map[this.otherObj[index]].showInProfile=!this.map[this.otherObj[index]].showInProfile;

      break;
      default: break;
    }

  }

  submitHandler(component:number,index:number,field:number,value: any) {
    console.log(component+ " "+ index + " "+field +" "+ value);
    if(component === 1){
      let skillName = this.languageObj[index];
      console.log(skillName);
      console.log(map[skillName]);
      this.map[skillName].category = "language";

      this.map[skillName].name = skillName;
      if(field===1){
        this.map[skillName].experience = value.toString();
        console.log(this.map[skillName]);
      }
      else if(field==2){
        this.map[skillName].projects =value.toString();
        console.log(this.map[skillName]);
      }
      else if(field==3){
        this.map[skillName].level =value.toString();
        console.log(this.map[skillName]);
      }
    }
    else if(component === 2){
      let skillName = this.frameWorkObj[index];
      this.map[skillName].showInProfile = false;
      this.map[skillName].category ="framework";
      this.map[skillName].showInProfile = false;
    }
    else if(component === 3){
      let skillName = this.otherObj[index];
      this.map[skillName].showInProfile = false;
      this.map[skillName].category ="Others";
    }
    console.log(this.map);
  }

  deleteSkill(skill: string) {
    console.log(this.languageObj);
    let indexToRemove = this.languageObj.indexOf(skill);
    this.languageObj.splice(indexToRemove,1);

  }

  deleteOther(skill: string) {
    let indexToRemove = this.otherObj.indexOf(skill);
    this.otherObj.splice(indexToRemove,1);
  }

  deleteFramework(skill: string) {
    let indexToRemove = this.frameWorkObj.indexOf(skill);
    this.frameWorkObj.splice(indexToRemove,1);
  }

  showTooltip() {
    console.log("showTOoltipTrggrd");
    document.getElementById('tooltip').style.display="block";
  }
  hideTooltip() {
    document.getElementById('tooltip').style.display="none";
  }

  setColorLanguage(event: MouseEvent,index: number) {
    let skillLevel = event.srcElement.innerHTML;
    if(skillLevel === " Beginner "){
      document.getElementById(`skillName${index}`).style.backgroundColor="#568dee";
    }
    else if(skillLevel === " Intermediate "){
      document.getElementById(`skillName${index}`).style.backgroundColor="#3265c8";
    }
    else if(skillLevel === " Expert "){
      document.getElementById(`skillName${index}`).style.backgroundColor="#1d4283";
    }

  }

  setColorFramework(event: MouseEvent, index: any) {
    let skillLevel = event.srcElement.innerHTML;
    if(skillLevel === " Beginner "){
      document.getElementById(`frameWorkName${index}`).style.backgroundColor="#568dee";
    }
    else if(skillLevel === " Intermediate "){
      document.getElementById(`frameWorkName${index}`).style.backgroundColor="#3265c8";
    }
    else if(skillLevel === " Expert "){
      document.getElementById(`frameWorkName${index}`).style.backgroundColor="#1d4283";
    }
  }

  setColorOther(event: MouseEvent, index: number) {
    let skillLevel = event.srcElement.innerHTML;
    if(skillLevel === " Beginner "){
      document.getElementById(`otherName${index}`).style.backgroundColor="#568dee";
    }
    else if(skillLevel === " Intermediate "){
      document.getElementById(`otherName${index}`).style.backgroundColor="#3265c8";
    }
    else if(skillLevel === " Expert "){
      document.getElementById(`otherName${index}`).style.backgroundColor="#1d4283";
    }
  }

  saveSkills() {
    //console.log("Save Skills Triggered");
    //console.log(this.map);
    let skillsAr = [];
    for(let key in this.map){
     // console.log(key);
      //console.log(this.map[key]);
      skillsAr.push(this.map[key]);

    }
    console.log(skillsAr);
    this.store.dispatch(new ResumeModelActions.AddSkills(skillsAr));
  }
}
