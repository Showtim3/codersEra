import {Action} from "@ngrx/store";
import {basicInfo, employment} from "./resume.model";

export const ADD = '[ResumeModel] Add';
export const ADDBASICINFO = '[ResumeModel] AddBasicInfo';
export const ADDEMPLOYMENT = '[ResumeModel] ADDEMPLOYMENT';
export const ADDPROJECT = '[ResumeModel] ADDPROJECT';
export const ADDEXPERIENCE = '[ResumeModel] ADDEXPERIENCE';
export const ADDEDUCATION = '[ResumeModel] ADDEDUCATION';
export const ADDSKILLS = '[ResumeModel] ADDSKILLS';
export const GENERATE = '[ResumeModel] GENERATE';
export const READ = '[ResumeModel] Read';

export class Add implements Action{
  readonly type = ADD;
  constructor() {};
}

export class AddBasicInfo implements Action{
  readonly type = ADDBASICINFO;
  constructor(public payload: basicInfo) {};
}

export class AddEmployment implements Action{
  readonly type = ADDEMPLOYMENT;
  constructor(public payload) {};
}
export class AddProject implements Action{
  readonly type = ADDPROJECT;
  constructor(public payload) {};
}

export class AddExperience implements Action{
  readonly type = ADDEXPERIENCE;
  constructor(public payload) {};
}

export class AddEducation implements Action{
  readonly type = ADDEDUCATION;
  constructor(public payload) {};
}

export class AddSkills implements Action{
  readonly type = ADDSKILLS;
  constructor(public payload) {};
}

export class Generate implements Action{
  readonly type = GENERATE;
  constructor(){}
}

export class Read implements Action{
  readonly type = READ;
  constructor() {};
}



export type Actions = Add | Read | AddBasicInfo | AddSkills | AddEmployment | AddProject | AddExperience | AddEducation|Generate;
