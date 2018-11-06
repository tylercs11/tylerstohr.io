import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any = [];

  constructor() {
    this.skills = [
      {
        title: 'Ohio State',
        color: 'red'
      },
      {
        title: 'Angular 6',
        color: 'blue'
      },
      {
        title: 'HMTL',
        color: 'blue'
      },
      {
        title: 'CSS',
        color: 'blue'
      },
      {
        title: 'Node.js',
        color: 'blue'
      },
      {
        title: 'Java',
        color: 'blue'
      },
      {
        title: 'Swift',
        color: 'blue'
      },
      {
        title: 'Kotlin',
        color: 'blue'
      },
      {
        title: 'JavaScript',
        color: 'blue'
      }
    ];

   }

  ngOnInit() {
  }

}
