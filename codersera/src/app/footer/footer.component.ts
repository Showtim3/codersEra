import { Component, OnInit } from '@angular/core';
import * as faker from 'faker/locale/de_AT';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})

export class FooterComponent implements OnInit {
  products : {name:string, description: string}[] = [];
  info: string[]= [];
  links: string[] = [];

  constructor() {

    this.products.push({name: "Codementor",description: "Find a mentor to help you in real time"});
    this.products.push({name:"CodeMentorX",description:"Hire world-class freelance developers for your team"});
    this.products.push({name:"Community",description:"Share insights, exchange ideas, and learn from fellow developers"});

    for(let i=0;i<6;i++)
    {this.info.push(faker.lorem.sentence(7));}

    for(let i=0;i<6;i++){
      this.links.push(faker.lorem.sentence(5));
    }
  }

  ngOnInit() {
  }

}
