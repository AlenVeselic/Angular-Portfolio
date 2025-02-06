import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule, NgFor } from '@angular/common';

interface Project {
  title: string;
  summary: string;
  tags: string[];
  personal: boolean;
  company?: string;
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
      title: 'Solar Calculator website',
      summary:
        "A website that calculates the solar calculations based on the user's location and changes how the background animation works based on the time of day.",
      tags: ['Vue', 'Tailwind'],
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
      summary:
        'Simple react native app that allows the user to track their daily coffee consumption and average.',
      tags: ['React Native', 'SQLite'],
      personal: true,
    },
    {
      title: 'Finance tracking mobile app',
      summary: 'Simple finance tracking app.',
      tags: ['React Native', 'SQLite'],
      personal: true,
    },
    {
      title: 'Booking Platform',
      summary:
        'Platform that provides a storefront page for customers to make bookings as well as provide the website owner the opportunity to prepare marketing material for the offers and import offer data from external systems like Unitur, Traffics and Phobs.',
      tags: ['ArangoDB', 'NodeJs', 'Angular', 'Wordpress', 'AWS', 'Java'],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'Insurance damage assessment platform',
      summary:
        "A platform that allows agents to manage reports, accept video calls from customers and take pictures of the damage. The platform also provides a way to generate reports and send them to the agent's email, download it or export to a third party system.",
      tags: ['NodeJs', 'Angular', 'AWS', 'PWA'],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'Meal plan generator',
      summary:
        "An app that generates meal plans based on the user's favorite foods and daily time constraints",
      tags: ['Python', 'TKInter', 'Shelf'],
      personal: true,
    },
    {
      title: 'Moje Delo NodeJS Web Scraper',
      summary:
        'Practice project that received query information from the website Moje Delo and returned key information from the backend as a response.',
      tags: ['Python', 'BeautifulSoup', 'NodeJS'],
      personal: true,
    },
    {
      title: 'Finance tracking website',
      summary:
        'A website made using vanilla JS, that allows the user to track their daily finances and categorize them. The app also provided the ability to check a calendar view where days were painted by the dominant spending category of that day. Storage handled with LocalStorage.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      personal: true,
    },
    {
      title: 'E-Računi Stock Management Wordpress Plugin',
      summary:
        'A plugin that ties together the E-Računi API with a Wordpress website. Using the data provided from the API it sets up custom fields in ACF and creates articles in E-Commerce, then updates existing articles with their new stock values.',
      tags: ['ACF', 'E-Commerce', 'PHP', 'Wordpress Plugins', 'E-Računi'],
      personal: false,
      company: 'U-Centrix',
    }
    ,
    {
      title: 'Logistics Company Cargo delivery tracking system',
      summary: 'A system that allows managers to track the delivery of cargo, assign drivers to deliveries and track the progress of the delivery. This app also included a mobile app that allowed the drivers to see their assigned deliveries and update the status of the delivery.',
      tags: ['NodeJs', 'Angular', 'Potgres'],
      personal: false,
      company: "U-Centrix"
    }
  ];
}
