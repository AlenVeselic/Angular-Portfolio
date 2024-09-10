import { Component } from '@angular/core';
import { BoxWithTextBorderComponent } from './box-with-text-border/box-with-text-border.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [BoxWithTextBorderComponent, MarqueeComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  thingsIMake: string[] = [
    'Full stack applications',

    'Mobile applications',

    'Rock think',
  ];

  techIAmKnowledgableOf: string[] = [
    'Javascript',
    'Python',
    'html',
    'css',
    'scss',
    'angular',
    'react native',
    'node',
    'c#',
    'dotnet',
    'java',
    'arangodb',
    'postgresql',
    'draw.io',
    'figma',
  ];

  personalProjects: string[] = [
    'job scraper',
    'reddit scraper',
    'Diet planning',
    'Recipe scraper',
    'Finance tracking web app',
    'Storage tracking web app',
    'Content scraping and filtering app with multimedia functionality',
    'Recipe browsing web app',
    'Raspberry pi web server',
    'Weather app with solar calculations',
    'Finance tracking mobile app with ocr recipe reading',
  ];

  experience: string[] = ['Talum', 'U-Centrix'];
}
