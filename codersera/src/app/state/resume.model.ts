export interface ResumeModel {
    name:string,
    imageLink:string,
    expertise:string,
    location:string,
    introduction:string,
    memberSince:string,
    availability:string,
    skills:{name: string,experience:string,projects:string,level:string,showInProfile:boolean,category:string}[],
    projects:{projectName:string,link:string,toolsUsed:string[]}[];
    employment:{profile:string,organisationName:string,startYear:string,endYear:string,technologies:string,details:{detail:string}[]}[],
  experience:{name:string,link?:string,description:string}[],

  education:{courseName:string,university:string}[]
}

export interface basicInfo {
  basicInfo : {
  name: string;
  expertise: string;
  location: string;
  introduction: string;
}}

export interface employment {
    employment: {
    profile:string,
    organisationName:string,
    startYear:string,
    endYear:string,
    technologies:string,
    details:{detail:string}[]
    }
}



