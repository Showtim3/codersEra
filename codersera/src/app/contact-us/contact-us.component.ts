import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {
    latitude = 51.678418;
    longitude = 7.809007;
    toggleShow = false;
  constructor() { }

  ngOnInit() {
  }

}
