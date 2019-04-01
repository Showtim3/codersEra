import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-features',
  template: `
    <div class="features-container">
    <div class="features-heading" ><span>What you'll find on CodersERA</span>
    </div>
  <div class="features-wrapper">
    <div class="features">
      <div class="feature" *ngFor="let feature of featuresArray">
        <div class="feature-img"><img [src]="feature.imgLink" alt="features-image"></div>
        <div class="feature-text">
          <div class="feature-text-heading"><span>{{feature.title}}</span></div>
          <div class="feature-text-description"><span>{{feature.description}}</span></div>
        </div>
      </div>
    </div>
  </div>
    </div>
  `,

})
export class SectionFeaturesComponent implements OnInit {
  featuresArray: {}[] = [];

  constructor() {
    this.featuresArray = [
      {
        title:"A variety of technologies",
        description:"From help with JavaScript, Swift, React, and more, keep up to speed with good programming practices.",
        imgLink:"../assets/section-features/one.png",

      },{
        title:"Code Help From Experts",
        description:"Our mentors go through a strict application and vetting process that evaluates their coding skills.",
        imgLink:"../assets/section-features/two.png",
      },{
        title:"Effortless Setup",
        description:"Take advantage of our easy set up and billing process to connect with a coding mentor or developer right away.",
        imgLink:"../assets/section-features/three.png",
      }
    ]
  }

  ngOnInit() {
  }

}
