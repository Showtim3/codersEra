import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AppState} from "../state/app.state";
import {Store} from "@ngrx/store";
import * as ResumeModelActions from "../state/resume.actions";
import {StateService} from "../service/state-service.service";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-coder-form',
  templateUrl: './coder-form.component.html',
  styleUrls: ['./coder-form.component.sass']
})
export class CoderFormComponent implements OnInit,AfterViewInit,OnDestroy {
  fields : string[] = [];
  keySkills: string[] = [];
  showField :boolean[] = [];
  employmentObj=[];
  coderForm: FormGroup;
  lastIndex: number;
  addFieldOnEnter:boolean = false;
  showInputBool :boolean= false;
  currentlyWorking:boolean = false;
  constructor(private fb: FormBuilder,private toastr: ToastrService,private store:Store<AppState>,private stateService: StateService,private db: AngularFireDatabase) {

  }


  ngOnInit() {
    this.coderForm=new FormGroup({
      employments:new FormArray([
        this.addEmploymentFormGroup()
      ]),
    });

    this.fields = ["Basic Information","Key Skills","Projects","Employment","Experience","Education"];
    for(let len in this.fields){
      this.showField[len] = false;
    }

    this.keySkills = ['Bootstrap',"Html","CSS","Ruby On Rails"];

  }
  ngOnDestroy(): void {
    console.log("Destroy  Employment triggered");
    console.log(this.employmentObj);
    this.store.dispatch(new ResumeModelActions.AddEmployment({employment:this.employmentObj}));
    this.store.dispatch(new ResumeModelActions.Read());
  }

  toggleAddField(){
    if(!this.addFieldOnEnter){
      return "button";
    }
    else return "";
  }

  addEmploymentDetails(i,clear?:boolean){
   // console.log("Add Emplyment details triggered");
    if(clear){
     // console.log(this.lastIndex);
      if((<FormArray>(<FormArray>this.coderForm.get('employments')).controls[this.lastIndex])!== undefined){


      const control = (<FormArray>(<FormArray>this.coderForm.get('employments')).controls[this.lastIndex].get('details'));

      console.log(control);
      for(let it = 0;it<=control.length;it++){
        control.removeAt(it);
      }}
    }
    else{
      const control = (<FormArray>(<FormArray>this.coderForm.get('employments')).controls[i].get('details'));
      this.lastIndex = i;
   //   console.log(control);
      control.push(this.addEmploymentDetailsGroup());
    }
  }

  removeEmploymentDetails(i,j){
    const control = (<FormArray>(<FormArray>this.coderForm.get('employments')).controls[i].get('details'));
    control.removeAt(j);
  }

  addEmploymentFormGroup():FormGroup{
    return this.fb.group({
      profile:new FormControl(''),
      organisationName:new FormControl(''),
      startYear:new FormControl(''),
      endYear:new FormControl(''),
      technologies:new FormControl(''),
      details: new FormArray([
        this.addEmploymentDetailsGroup()
      ]),
    })
  }

  addEmploymentDetailsGroup(){
    return this.fb.group({
      detail:'',
    })
  }

  fieldClickHandler(index: number) {
    document.getElementById(`coder-box1-field${index}`).classList.add('coder-box1-selected');
    for(let i=0;i<this.fields.length;i++){
      this.showField[i] = i === index;
      if(i!==index){
        document.getElementById(`coder-box1-field${i}`).classList.remove('coder-box1-selected');
      }
    }
  }


  getDetails(coderForm?: FormGroup, i?: number,) {
    let len =  (<FormArray>(<FormArray>this.coderForm.get('employments')).controls[i].get('details')).length;
    let ar = [];
    for(let i=0;i<len;i++){
      ar.push(1);
    }
    return ar;
 //return coderForm.controls.employments.controls[i].controls.details.controls;
  }

  saveEmployment(ind?: number) {

    let tempData = this.coderForm.get('employments').value;

    if(!tempData[0].profile||!tempData[0].organisationName||!tempData[0].startYear||!tempData[0].endYear||!tempData[0].technologies||tempData[0].details.length< 1){

      this.toastr.error("Invalid Input");
    }
    else {
      this.addFieldOnEnter = false;
      for (let key in this.employmentObj) {
        if (this.employmentObj[key][0].profile === this.coderForm.controls.employments.value[0].profile && this.employmentObj[key][0].organisationName === this.coderForm.controls.employments.value[0].organisationName) {
          this.employmentObj.splice(parseInt(key), 1);
          break;
        }
      }

      let data = this.coderForm.controls.employments.value;
      if (data) {
        console.log(data);
        data[0].technologies = data[0].technologies.split(',');
        this.employmentObj.push(data);
        this.sortEmploymentObj();


      }
      this.toggleWelcome();
      this.coderForm.reset();

      this.store.dispatch(new ResumeModelActions.AddEmployment({employment:this.employmentObj}));
      this.store.dispatch(new ResumeModelActions.Read());
     this.addEmploymentDetails(null, true);

    }
  }



  sortEmploymentObj(){
    this.employmentObj.sort(function(a,b){return -(parseInt(a[0].startYear) - parseInt(b[0].startYear));});
  }

  deleteEmployment(organName,sYear) {
    for(let key in this.employmentObj){
      if(this.employmentObj[key][0].organisationName===organName && parseInt(this.employmentObj[key][0].startYear)===parseInt(sYear)){
        this.employmentObj.splice(parseInt(key),1);
        break;
      }
    }
  }

  populateData(ind: number) {

    this.coderForm.setControl('employments',this.setEmployment(ind));

    this.showInput();
  }

  setEmployment(ind): FormArray {
    //console.log("Inside Set Employment");
    //this.addEmploymentHandler();
    //console.log(this.employmentObj[ind][0].profile);
    console.log(this.employmentObj[ind][0]);
    let techUsed :string = "";
    for(let key in this.employmentObj[ind][0].technologies){
      techUsed+= this.employmentObj[ind][0].technologies[key]
    }
    console.log(techUsed);
    const formArray = this.fb.array([]);
    formArray.push(this.fb.group({
      profile:this.employmentObj[ind][0].profile,
      organisationName:this.employmentObj[ind][0].organisationName,
      startYear:this.employmentObj[ind][0].startYear,
      endYear:this.employmentObj[ind][0].endYear,
      technologies: techUsed,
      details: this.setEmploymentDetails(ind),
    }));
    return formArray;
  }

  setEmploymentDetails(ind: number) {
  const formArray = this.fb.array([]);
  for(let key in this.employmentObj[ind][0].details) {
    formArray.push(this.fb.group({
      detail: this.employmentObj[ind][0].details[key].detail,
    }));
  }

  return formArray;
}


  addEmploymentHandler() {

    document.getElementById("welcome-employment-block").style.display = "none";
    document.getElementById("input-employment-block").style.display = "block";
  }
  showInput(){
    document.getElementById("welcome-employment-block").style.display = "none";
    this.showInputBool = true;

  }
  toggleWelcome(){
    document.getElementById("welcome-employment-block").style.display = "block";
    document.getElementById("input-employment-block").style.display = "none";
  }

  ngAfterViewInit(): void {}

  disableEndYear() {
    console.log(this.currentlyWorking);
    this.currentlyWorking = true;

  }

}

