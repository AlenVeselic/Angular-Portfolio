import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule, NgFor } from '@angular/common';

interface Project{
  title: string,
  summary: string,
  tags: string[],
  personal: boolean,
  company?: string
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [ProjectComponent, NgFor, CommonModule],

  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projectArray: Project[] = [
    {
      title: 'web scraper',
      summary: 'A script that scrapes the web for information',
      tags: ['C#', 'Python', 'Bash'],
      personal: true,
    },
    {
      title: 'Recipe browser',
      summary: `An app that scrapes the web for recipes. Aggregates them in a database. Has CRUD api made in Laravel.
    Uses that api to display that data on an Angular Frontend`,
      tags: ['Laravel', 'Python', 'Angular'],
      personal: true,
    },
    {
      title: 'Content scraping and filtering software',
      summary: `PyQT app that can scrape booru sites and reddit feeds, allowing
      the user to also choose a destination folder on their device.
      This software then allows the user to filter the content, by providing the ability
      to view the content as well as choosing a destination for content that has been accepted or
      delete it.`,
      tags: ['PyQT', 'Python', 'BeautifulSoup'],
      personal: true,
    },
    {
      title: 'Coffee Counter',
      summary: 'Simple react native app that allows the user to track their daily coffee consumption and average.',
      tags: ['React Native', "SQLite"],
      personal: true
    },
    {
      title: 'Booking Platform',
      summary: "Platform that provides a storefront page for customers to make bookings as well as provide the website owner the opportunity to prepare marketing material for the offers and import offer data from external systems like Unitur, Traffics and Phobs.",
      tags: ['ArangoDB', 'NodeJs', 'Angular', 'Wordpress', 'AWS', 'Java'],
      personal: false,
      company: "U-Centrix"

    },
    {
      title: 'Insurance damage assessment platform',
      summary: "A platform that allows agents to manage reports, accept video calls from customers and take pictures of the damage. The platform also provides a way to generate reports and send them to the agent's email, download it or export to a third party system.",
      tags: ['NodeJs', 'Angular', 'AWS', 'PWA'],
      personal: false,
      company: "U-Centrix"
    },
    {
      title: 'Meal plan generator',
    summary: 'An app that generates meal plans based on the user\'s favorite foods and daily time constraints',
    tags: ['Python', 'TKInter', 'Shelf'],
    personal: true
    }
  ];
}
