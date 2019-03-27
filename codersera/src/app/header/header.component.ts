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
    this.parentObj.push({name:'Iron Man',description:'Flies around new York',link:"https://images-na.ssl-images-amazon.com/images/I/515wjJQt2nL._SY445_.jpg"});

    this.parentObj.push({name:'Hulk',description:'Sun tan',link:"https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png"});

    this.parentObj.push({name:'Black Widow',description:'The Girl Next Door',link:
        "https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/01/black-widow-movie-marvel-scarlett-johannson.jpg?itok=bGeughHk"});

    this.parentObj.push({name:'Thor',description:'The God Of Lightning',link:"https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_marvel_thor_asgardian-512.png"});

    this.parentObj.push({name:'Vision',description:'Carries an Infinity Stone',link:"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/2f/Vision_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212532"});

    this.parentObj.push({name:'Groot',description:'I am Groot',link:"https://lumiere-a.akamaihd.net/v1/images/file_a0c51083.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8"});
  }


}
