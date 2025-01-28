import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [ProjectComponent, NgFor, CommonModule],

  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projectArray = [
    {
      title: 'web scraper',
      summary: 'A script that scrapes the web for information',
      tags: ['C#', 'Python', 'Bash'],
    },
    {
      title: 'Recipe browser',
      summary: `An app that scrapes the web for recipes. Aggregates them in a database. Has CRUD api made in Laravel. 
    Uses that api to display that data on an Angular Frontend`,
      tags: ['Laravel', 'Python', 'Angular'],
    },
    {
      title: 'Content scraping and filtering software',
      summary: `PyQT app that can scrape booru sites and reddit feeds, allowing
      the user to also choose a destination folder on their device. 
      This software then allows the user to filter the content, by providing the ability
      to view the content as well as choosing a destination for content that has been accepted or
      delete it.`,
      tags: ['PyQT', 'Python', 'BeautifulSoup'],
    },
  ];
}
