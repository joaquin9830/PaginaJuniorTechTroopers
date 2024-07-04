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
        { name: 'Node.js', image: 'path/to/nodejs.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'Python', image: 'path/to/python.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'Java', image: 'path/to/java.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'PHP', image: 'path/to/php.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] }
      ]
    },
    {
      name: 'DB',
      items: [
        { name: 'MySQL', image: 'path/to/mysql.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
        { name: 'MongoDB', image: 'path/to/mongodb.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill'] },
        { name: 'PostgreSQL', image: 'path/to/postgresql.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] },
        { name: 'SQLite', image: 'path/to/sqlite.png', levelIcons: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star'] }
      ]
    }
  ];
}
