import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      year: '2018-2022',
      description: 'Specialized in Software Engineering and Web Development'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      year: '2022',
      description: 'Intensive program covering modern web technologies'
    }
  ];

  experiences = [
    {
      position: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading development of enterprise web applications using Angular, Node.js, and cloud technologies.'
    },
    {
      position: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description: 'Developed responsive web applications and collaborated with design teams to create user-friendly interfaces.'
    },
    {
      position: 'Junior Developer',
      company: 'StartUp Co.',
      period: '2021 - 2022',
      description: 'Built and maintained web applications while learning modern development practices and agile methodologies.'
    }
  ];

  downloadCV() {
    // In a real application, this would download an actual CV file
    alert('CV download functionality would be implemented here');
  }
}