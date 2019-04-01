import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  projectObj:{title:string, description:string}[] = [];
  constructor() {
    this.projectObj = [
      {
        title:"The Best Productivity Apps on Market",
        description: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        //bg:`url("../assets/projects/first.jpg")`
      },{
      title:"The Sculpture Where Details Matter",
        description:"Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
       // bg:`url("../assets/projects/second.jpg")`
      },{
      title:"0 to 100.000 Customers in 6 months",
        description: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
       // bg:`url("../assets/projects/third.jpg")`
      }
    ]
  }

  ngOnInit() {
  }

}
