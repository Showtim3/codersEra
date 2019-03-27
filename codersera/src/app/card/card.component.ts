import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    
    <div class="flexBox">
      <div class="parent" *ngFor="let item of data">
    <div class="img-container"><img [src]=item.link alt="images"></div>
    <div class="text">
      <div class="text-title">{{item.name}}</div>
      <div class="text-description">{{item.description}}</div>
        
    </div>
  </div>
    </div>
`,
})
export class CardComponent implements OnInit {
  @Input() public data;

  constructor() {

  }

  ngOnInit() {
  }

}
