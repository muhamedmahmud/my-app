import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  email = 'john.doe@example.com';
  
  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/johndoe',
      icon: 'fab fa-facebook-f'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/johndoe',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/johndoe',
      icon: 'fab fa-twitter'
    }
  ];
}