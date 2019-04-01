import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    
    <div class="wrapper">
      <div class="boxCard1">
        <div class="flexBox">
          <div class="parent item{{i}}" *ngFor="let item of first;let i = index">
            <div class="img-container"><img [src]=item.imgLink alt="images"></div>
            <div class="text">
              <div class="text-title">{{item.name}}</div>
              <div class="text-description">{{item.description}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="boxCard2">
        <div class="flexBox">
          <div class="parent2 item{{i+5}}" *ngFor="let item of second;let i = index">
            <div class="img-container"><img [src]=item.imgLink alt="images"></div>
            <div class="text">
              <div class="text-title">{{item.name}}</div>
              <div class="text-description">{{item.description}}</div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
`,
})
export class CardComponent implements OnInit {
  @Input() public data ;
  first:{}[]=[];
  second:{}[]=[];

  constructor() {

    setTimeout(()=>this.addData(),100);

  }
  addData(){
    console.log(this.data);
    for(let i=0;i<5;i++){
      this.first.push(this.data[i]);
    }
    for(let i=5;i<10;i++){
      this.second.push(this.data[i]);
    }
  }

  ngOnInit() {
    console.log(this.data);
  }

}
