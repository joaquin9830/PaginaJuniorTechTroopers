import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      name: 'Frontend',
      items: [
        { name: 'HTML', image: 'assets/images/skills/html.png' },
        { name: 'CSS', image: 'assets/images/skills/css.png' },
        { name: 'JavaScript', image: 'assets/images/skills/javascript.png' },
        { name: 'Angular', image: 'assets/images/skills/angular.png' }
      ]
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', image: 'assets/images/skills/node-js.png' },
        { name: 'Python', image: 'assets/images/skills/python.png' },
        { name: 'Java', image: 'assets/images/skills/java.png' }
      ]
    },
    {
      name: 'DB',
      items: [
        { name: 'MySQL', image: 'assets/images/skills/mysql.png' },
        { name: 'MongoDB', image: 'assets/images/skills/mongo-db.png' },
        { name: 'PostgreSQL', image: 'assets/images/skills/postgres.png' }
      ]
    },
    {
      name: 'Tools',
      items: [
        { name: 'GIT', image: 'assets/images/skills/git.png' },
        { name: 'GitHub', image: 'assets/images/skills/github.png' }
      ]
    },
  ];
}
