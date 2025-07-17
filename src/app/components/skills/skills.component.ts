import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 90, color: 'bg-danger' },
    { name: 'TypeScript', level: 85, color: 'bg-primary' },
    { name: 'JavaScript', level: 88, color: 'bg-warning' },
    { name: 'Node.js', level: 80, color: 'bg-success' },
    { name: 'HTML/CSS', level: 95, color: 'bg-info' },
    { name: 'React', level: 75, color: 'bg-primary' },
    { name: 'MongoDB', level: 70, color: 'bg-success' },
    { name: 'Git', level: 85, color: 'bg-dark' }
  ];
}