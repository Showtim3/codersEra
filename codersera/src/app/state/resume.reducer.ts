
import {ResumeModel} from "./resume.model";
import * as ResumeModelActions from './resume.actions';

const InitialState= {
  name:"dummyName",
  imageLink:"link",
  expertise:"profile",
  location:"location",
  introduction:"introduction",
  memberSince:"member",
  availability:"full-time",
  skills:[{name:"skillName",experience:"16 years",projects:"2",level:"advance",category:"language",showInProfile:false}],
  projects:[{projectName:"Hello",link:"l1",toolsUsed:["java"]}],
  employment:[{profile:"p1",organisationName:"pg",startYear:"1993", endYear:"2000",technologies:"javascript,bootstrap",details:[{detail:"Hello Details"}]}],
  experience:[{name:"exp1",link:"link1",description:"Hello"}],
  education:[{courseName:"english",university:"IPU"}]

};

export async function resumeModelReducer(state: ResumeModel[] =[InitialState] , action: ResumeModelActions.Actions) {

  switch (action.type) {

    case ResumeModelActions.ADD:
      console.log("Add Action Triggered");
      return {...state};

    case ResumeModelActions.ADDBASICINFO:
      let basicInfo = {
        name: action.payload.basicInfo.name,
        expertise:action.payload.basicInfo.expertise,
        location:action.payload.basicInfo.location,
        introduction:action.payload.basicInfo.introduction
      };
      let newState = state;
      newState["__zone_symbol__value"][0].name = basicInfo.name;
      newState["__zone_symbol__value"][0].expertise = basicInfo.expertise;
      newState["__zone_symbol__value"][0].location = basicInfo.location;
      newState["__zone_symbol__value"][0].introduction = basicInfo.introduction;
      return newState;

    case ResumeModelActions.ADDSKILLS:
      let newStateSkill = state;
      newStateSkill["__zone_symbol__value"][0].skills= action.payload;
      return newStateSkill;


    case ResumeModelActions.ADDEMPLOYMENT:
      let newState2 = state;
      newState2["__zone_symbol__value"][0].employment = action.payload.employment;
      return newState2;

    case ResumeModelActions.ADDPROJECT:
      let newState3 = state;
      newState3["__zone_symbol__value"][0].projects = action.payload;
      return newState3;

    case ResumeModelActions.ADDEXPERIENCE:
      console.log(action.payload);
      let newState4 = state;
      newState4["__zone_symbol__value"][0].experience = action.payload;
      return newState4;


    case ResumeModelActions.ADDEDUCATION:
      let newState5 = state;
      newState5["__zone_symbol__value"][0].education = action.payload;
      return newState5;



    case ResumeModelActions.READ:
      console.log("Read Triggered");
      return state;

    default:
      console.log("Default Triggered");
      return state;
  }
}
