import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-work',
  template: `
    <div class="work-container">
      <div class="work-heading"><span>How Does CodersERA Work?</span>
      </div>
      <div class="work-wrapper">
        <div class="works">
          <div class="work" *ngFor="let work of workArray;let i = index">
            <div class="work-img"><img [src]="work.imgLink" alt="work-image"></div>
            <div class="work-text">
              <span class="counting">{{i+1}}</span><div class="work-text-description">{{work.description}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="work-divider"></div>
      
    <div class="sub-works-wrapper">
      <div class="sub-works">
        <div class="sub-work" *ngFor="let work of subWorkArray;let i = index">
          <div class="sub-work-header">
            <div class="sub-work-img"><img [src]=work.imgLink alt="work-image"></div>
            <div class="sub-work-heading"><span>{{work.title}}</span></div>
          </div>
          
          <div class="sub-work-description">
           <span>{{work.description}}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
      
    
  `,
})
export class SectionWorkComponent implements OnInit {
  workArray :{}[] = [];
  subWorkArray: {}[] = [];
  constructor() {
    this.workArray = [
      {
        description:"Tell us what kind of work you need.",
        imgLink:"../assets/section-work/item5.png",

      },{
        description:"We will find you a perfect match.",
        imgLink:"../assets/section-work/item6.png",
      },{
        description:"Work with us under refund-protection.",
        imgLink:"../assets/section-work/item7.png",
      },{
        description:"Get your Project delivered on time.",
        imgLink:"../assets/section-work/item8.png",
      }
    ];


    this.subWorkArray = [
      {
        imgLink: "../assets/section-work/sub-work/item1.png",
        title: "Any company",
        description: "CodersERA provides the highest quality of freelance talent for any company size and any tech stack or environment."
      },{
        imgLink: "../assets/section-work/sub-work/item2.png",
        title: "Easy communication",
        description: "We make sure all of our elite freelancers speak, read, and write English clearly and fluently."
      },{
        imgLink: "../assets/section-work/sub-work/item3.png",
        title: "Zero risk",
        description: "We offer a no-risk trial period for all freelancers added to your team. Pay only if satisfied."
      },{
        imgLink: "../assets/section-work/sub-work/item4.png",
        title: "Superior work",
        description: "Our experts have a proven track record with elite industry experience ensuring they can ramp up quickly."
      }

    ];
  }



  ngOnInit() {
  }

}
