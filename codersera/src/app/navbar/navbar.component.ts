import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  i:number = 2;
  navList:string[] = [];
  hamList:string[] = [];
  parent = document.getElementsByClassName('nav-Container');
  coderBtn = document.getElementById('coder');
  constructor() {
    this.navList.push('About','Contact Us','Projects');
    this.hamList.push('About','Contact Us','Projects','Apply As Coder','Consult A Coder');

  }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
   this.scrollHandler();

  }

  toggle() {
    if(this.i%2 === 0){

      document.getElementById('bg').classList.add('background');
      document.getElementById('box1').classList.add('box1-change');
      document.getElementById('box2').classList.add('box2-change');
      document.getElementById('box3').classList.add('box3-change');
      document.getElementById("hamMenu").classList.add('hamMenu-change');
      this.i++;
    } else{
      document.getElementById('bg').classList.remove('background');
      document.getElementById('box1').classList.remove('box1-change');
      document.getElementById('box2').classList.remove('box2-change');
      document.getElementById('box3').classList.remove('box3-change');
      document.getElementById("hamMenu").classList.remove('hamMenu-change');
      this.i++;
    }

  }
  scrollHandler(){


    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("btnColor1").className = "btnColor1";
      document.getElementById("btnColor2").className = "btnColor2";

      document.getElementById("nav-Container").style.backgroundColor="rgb(60, 7, 63)";

    } else {
        document.getElementById("btnColor1").className = "";
      document.getElementById("btnColor2").className = "";
      document.getElementById("nav-Container").style.backgroundColor="transparent";
      }



  }

  hoverEnter() {
        document.getElementById("btnColor1").className = "btnColorHover";
    }

    hoverEnter1(){
      document.getElementById("btnColor2").className = "btnColorHover2";

    }


  hoverExit(){
      document.getElementById("btnColor1").className = "";
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("btnColor1").className = "btnColor1";
    }
    }
  hoverExit1(){
    document.getElementById("btnColor2").className = "";
  }

}
