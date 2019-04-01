import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  parentObj: {}[]=[];

  constructor() { }

  ngOnInit() {
    this.parentObj = [
      {
      name:"React",
      description:"Hire A React Developer",
      imgLink:"../assets/icons/tech-card/react.png"
      }, {
      name:"Angular",
      description:"Hire An Angular Developer",
      imgLink:"../assets/icons/tech-card/angular.png"
      }, {
      name:"React Native",
      description:"Hire A React Native Developer",
      imgLink:"../assets/icons/tech-card/reactNative.svg"
      },{
      name:"Andriod",
      description:"Hire A React Native Developer",
      imgLink:"../assets/icons/tech-card/android.png"
      },{
      name:"IOS",
      description:"Hire An IOS Developer",
      imgLink:"../assets/icons/tech-card/apple.png"
      },{
      name:"NodeJS",
      description:"Hire A NodeJS Developer",
      imgLink:"../assets/icons/tech-card/node.svg"
      },{
      name:"Python",
      description:"Hire A Python Developer",
      imgLink:"../assets/icons/tech-card/python.png"
      },{
      name:"Java",
      description:"Hire A Java Developer",
      imgLink:"../assets/icons/tech-card/java.png"
      },{
      name:"Ruby On Rails",
      description:"Hire Ruby On Rails Developer",
      imgLink:"../assets/icons/tech-card/ror.png"
      },{
      name:"Express",
      description:"Hire An Express Developer",
      imgLink:"../assets/icons/tech-card/express.jpg"
      }
      ];

  }


}
