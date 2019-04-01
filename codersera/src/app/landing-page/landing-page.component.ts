import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <app-navbar></app-navbar>
    <app-header></app-header>
    <app-section-features></app-section-features>
    <div style="height:2px;background-color: #f6f6f6"></div>
    <app-section-work></app-section-work>
    <app-content1></app-content1>
    <app-footer></app-footer>
  `,

})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
