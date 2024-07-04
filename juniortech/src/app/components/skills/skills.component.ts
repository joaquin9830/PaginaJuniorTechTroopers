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
        { name: 'HTML', image: 'assets/images/skills/html.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'CSS', image: 'assets/images/skills/css.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'JavaScript', image: 'assets/images/skills/javascript.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'Angular', image: 'assets/images/skills/angular.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] }
      ]
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', image: 'assets/images/skills/node-js.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'Python', image: 'assets/images/skills/python.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'Java', image: 'assets/images/skills/java.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        
      ]
    },
    {
      name: 'DB',
      items: [
        { name: 'MySQL', image: 'assets/images/skills/mysql.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
        { name: 'MongoDB', image: 'assets/images/skills/mongo-db.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill'] },
        { name: 'PostgreSQL', image: 'assets/images/skills/postgres.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        
      ]
    },
    {
      name: 'Tools',
      items: [
        { name: 'GIT', image: 'assets/images/skills/git.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
        { name: 'GitHub', image: 'assets/images/skills/github.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill'] },
        
        
      ]
    },
  ];
}
