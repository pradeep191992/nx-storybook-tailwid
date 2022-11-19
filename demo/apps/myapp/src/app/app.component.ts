import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myapp';
  cards = [
    {
      title: 'Nx',
      para: 'Nx is a smart, fast and extensible build system with first class monorepo support and powerful integrations.',
      link: 'https://nx.dev'
    },
    {
      title: 'Angular',
      para: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
      link: 'https://angular.io'
    },
    {
      title: 'Tailwind CSS',
      para: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
      link: 'https://tailwindcss.com'
    }
  ]
}
