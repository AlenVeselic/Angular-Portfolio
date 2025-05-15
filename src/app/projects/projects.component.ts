import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const TAGS = {
  JavaScript: 'JavaScript',
  HTML: 'HTML',
  CSS: 'CSS',
  TypeScript: 'TypeScript',
  CSharp: 'C#',
  Python: 'Python',
  Java: 'Java',
  PHP: 'PHP',
  Kotlin: 'Kotlin',
  Deluge: 'ZOHO Deluge',

  Angular: 'Angular',
  Vue: 'Vue',
  Tailwind: 'Tailwind',
  Wordpress: 'Wordpress',
  WordpressPlugins: 'Wordpress Plugins',

  ReactNative: 'React Native',
  AngularPWA: 'Angular PWA',

  PyQt: 'PyQt',
  Tkinter: 'tkinter',
  TtkBootstrap: 'ttkbootstrap',
  Sass: 'Sass/Scss',
  Bootstrap: 'Bootstrap',

  NodeJS: 'NodeJS',
  ArangoDB: 'ArangoDB',
  dotNet: '.NET',
  Laravel: 'Laravel',

  PostgreSQL: 'PostgreSQL',
  SQLite: 'SQLite',
  AQL: 'AQL',
  Shelve: 'shelve',

  RaspberryPI: 'Raspberry PI',

  Docker: 'Docker',
  AWS: 'AWS',
  Ubuntu: 'Ubuntu',
  WebRTC: 'WebRTC',
  ACF: 'ACF',
  ECommerce: 'E-Commerce',
  ERacuni: 'E-Računi',
  ChatGPT: 'ChatGPT',
  SheetsAPI: 'Google Sheets API',
  DriveAPI: 'Google Drive API',

  Keycloak: 'Keycloak',
  AWSCognito: 'AWS Cognito',

  BeautifulSoup: 'BeautifulSoup',
  JSDom: 'jsdom',

  TMForumOpenAPIStandard: 'TMForum Open API Standard',
  Velzon: 'Velzon',

  WebScraping: 'Web Scraping',
  ServerSetupAndMaintenance: 'Server Setup and maintenance',
  OCR: 'OCR',
  Automation: 'Automation',
  ZOHO: 'ZOHO',
};
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
  imports: [ProjectComponent, CommonModule, FormsModule],

  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public showSummary = true;
  public projectArray: Project[] = [
    {
      title: 'Solar Calculator website',
      summary:
        "A website that calculates solar calculations based on the user's location and changes the background animation based on the user's time of day. Different vibes for sunset, sunrise, daytime and nighttime. Keeps track of local weather and available bike rentals and displays appropriate warnings for them. Can also generate a solar calculation table for the next 30 days.",
      tags: [TAGS.Vue, TAGS.Tailwind, TAGS.JavaScript],
      personal: true,
    },
    {
      title: 'Recipe browser',
      summary: `A full stack app that uses a python script to scrape a third party API for recipes. Populates them in a database. Has a CRUD api made in Laravel and consumes that api to display the saved data on an Angular Frontend. The api also provides in depth search functionality(eg. filtering by ingredient, difficulty, duration, etc.). Here I tried out Laravel as well as hosting a website on a Raspberry PI using docker compose for the first time.`,
      tags: [
        TAGS.Laravel,
        TAGS.PostgreSQL,
        TAGS.Python,
        TAGS.Angular,
        TAGS.RaspberryPI,
        TAGS.Docker,
        TAGS.PHP,
        TAGS.TypeScript,
        TAGS.WebScraping,
        TAGS.Sass,
      ],
      personal: true,
    },
    {
      title: 'Content scraping and filtering software',
      summary: `Multi purpose PyQT program: One half of the app is a configurable web scraper that can scrape a booru site(from the tags the user sets) or a personal reddit feed or both. The other half is an integrated gallery and media viewer that allows the user to sort and filter the media they downloaded during the scraping process.`,
      tags: [TAGS.PyQt, TAGS.Python, TAGS.BeautifulSoup, TAGS.WebScraping],
      personal: true,
    },
    {
      title: 'Coffee Counter',
      summary:
        'App that allows the user to count their daily coffee consumption. Also informs user with average daily coffee intake.',
      tags: [TAGS.ReactNative, TAGS.SQLite, TAGS.TypeScript],
      personal: true,
    },
    {
      title: 'Finance tracking mobile app',
      summary: 'Allows users to put in daily expenses in simple list format.',
      tags: [TAGS.ReactNative, TAGS.SQLite, TAGS.TypeScript],
      personal: true,
    },
    {
      title: 'Booking Platform',
      summary:
        'Platform that provides a storefront page for customers to make bookings as well as provide the website owner the option to prepare marketing material for their offers and import offer data from external systems like Unitur, Traffics and Phobs.',
      tags: [
        TAGS.ArangoDB,
        TAGS.AQL,
        TAGS.Sass,
        TAGS.Bootstrap,
        TAGS.NodeJS,
        TAGS.Angular,
        TAGS.Wordpress,
        TAGS.WordpressPlugins,
        TAGS.AWS,
        TAGS.Java,
        TAGS.PHP,
        TAGS.ServerSetupAndMaintenance,
        TAGS.Ubuntu,
      ],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title:
        'Remote video call damage assessment platform for insurance companies',
      summary:
        "A platform that allows agents from insurance companies to manage reports, accept video calls from customers and assess damages remotely/on the field. The platform also provides a way to generate reports and send them to an agent's email, download it or export to a third party system like ZOHO.",
      tags: [
        TAGS.NodeJS,
        TAGS.Angular,
        TAGS.AngularPWA,
        TAGS.Bootstrap,
        TAGS.Sass,
        TAGS.TypeScript,
        TAGS.AWS,
        TAGS.AWSCognito,
        TAGS.Keycloak,
        TAGS.WebRTC,
      ],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'Meal plan generator',
      summary:
        "An app that generates meal plans based on the user's favorite foods and daily time constraints.",
      tags: [TAGS.Python, TAGS.Tkinter, TAGS.Shelve, TAGS.TtkBootstrap],
      personal: true,
    },
    {
      title: 'Job board Web Scraper API',
      summary:
        "Practice NodeJS API that scrapes the Moje Delo website and Slotech's job page for job listings and returns them in a JSON format divided by site. ",
      tags: [TAGS.NodeJS, TAGS.TypeScript, TAGS.JSDom],
      personal: true,
    },
    {
      title: 'Finance tracking website',
      summary:
        'A website made using vanilla JS, that allows the user to track their daily finances and categorize them. The app also provides the ability to check a calendar view where days are painted by the dominant spending category of that day. Storage handled with LocalStorage.',
      tags: [TAGS.JavaScript, TAGS.HTML, TAGS.CSS],
      personal: true,
    },
    {
      title: 'E-Računi Stock Management Wordpress Plugin',
      summary:
        'A plugin that ties together the E-Računi API with a Wordpress website. Using the data provided from the API it sets up custom fields in ACF and creates articles in E-Commerce, then updates existing articles with their new stock values.',
      tags: [
        TAGS.ACF,
        TAGS.ECommerce,
        TAGS.PHP,
        TAGS.WordpressPlugins,
        TAGS.Wordpress,
        TAGS.ERacuni,
      ],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'Logistics Company Cargo delivery management system',
      summary:
        'A system that allows supervisors to manage the delivery of cargo, assign drivers to delivery routes and track the progress of delivery routes. This app also included a mobile app that allowed the drivers to see their assigned points for pick up and delivery and update the status of their current route.',
      tags: [
        TAGS.NodeJS,
        TAGS.TypeScript,
        TAGS.Angular,
        TAGS.PostgreSQL,
        TAGS.Keycloak,
      ],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'Insurance Damage Assessment AI analysis API',
      summary:
        'An application that uses documents and photos from an agent or client to generate an analysis for the damages. The application was built in a way that the AI models could easily be swapped out, should there be a need for it.',
      tags: [TAGS.CSharp, TAGS.dotNet, TAGS.ChatGPT],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title:
        'Mobile app for video game players to match up, chat and bet who will win',
      summary:
        'An app that allowed users to match up with other players, chat with them and bet on who will win the match. The app also provided making friends, chatting outside of matches and a way to check player stats. There was also an Angular website tied to it that allowed users to see their stats and matches. The users would submit their match results through the mobile app and the results would be judged using OCR.',
      tags: [TAGS.ReactNative, TAGS.Angular, TAGS.Kotlin, TAGS.OCR],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title:
        'Python script that generates a Google Sheet along with spreadsheets',
      summary:
        'A script that generates a Google Sheet from a programmed template. This was more of a practice project to further cement my knowledge of Google\'s Google Drive and Google Sheets APIs learned from the book "Automate the basic stuff with Python".',
      tags: [TAGS.Python, TAGS.SheetsAPI, TAGS.DriveAPI],
      personal: true,
    },
    {
      title: 'Automate the Boring Stuff - Exercises and Projects',
      summary:
        'Going through the book "Automate the Boring Stuff with Python" and doing the exercises and projects from the book. This book helped me reinvigorate my love for programming and helped me learn a lot of new things including Python.',
      tags: [TAGS.Python, TAGS.Automation, TAGS.WebScraping],
      personal: true,
    },
    {
      title: '.NET Application with Keycloak authentication',
      summary:
        'A .NET application that uses Keycloak for authentication. The application was implemented as a demonstration of what Keycloak is and how to use it with .NET applications.',
      tags: [
        TAGS.CSharp,
        TAGS.dotNet,
        TAGS.Keycloak,
        TAGS.Angular,
        TAGS.TypeScript,
      ],
      personal: true,
    },
    {
      title: 'Stock Management API',
      summary:
        "An API that works as a wrapper for another system's API. The API provides a way to get and edit stock data from the other system. Implemented using the TMForum Open API standard.",
      tags: [TAGS.CSharp, TAGS.dotNet, TAGS.TMForumOpenAPIStandard],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'Resource Pool Management API',
      summary:
        "An API that works as a wrapper for another system's API. The API provides a way to get and edit resource pool data for the other system. Implemented using the TMForum Open API standard.",
      tags: [TAGS.CSharp, TAGS.dotNet, TAGS.TMForumOpenAPIStandard],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: "NuGet package that allows a C# API to OAuth with Keycloak's API",
      summary:
        "The package provides a way to configure a .NET API to authenticate using an instance of Keycloak. Main purpose of the package was to be able to unmap the roles from Keycloak's JWT and get them from the Userinfo endpoint then map them onto C#'s identity object to use them in the application in case tokens wouldn't be able to support all the role data.",
      tags: [TAGS.CSharp, TAGS.dotNet, TAGS.Keycloak],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'Retailer store location assignment and check in CRM Upgrade',
      summary:
        'CRM solution that allows managers to assign/reassign retail workers to locations that they can operate from. Retail workers are then prmopted with their assigned locations upon logging into the system and can chose where they are currently working from. This system also allows managers to set promotional bussiness logic for their locations.',
      tags: [
        TAGS.CSharp,
        TAGS.dotNet,
        TAGS.Angular,
        TAGS.TypeScript,
        TAGS.Velzon,
        TAGS.Bootstrap,
      ],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'Dashboard navigation management CRM upgrade - API',
      summary:
        "Administrator facing - a dynamic system for creation and altering dashborad navigation on the main CRM, essentially enabling the ability to link embedded applications to it with new routes and  setting authorisation rights for said routes. Regular user facing - dynamic menu system, that based on the user's permissions generates a navigation strictly for them.",
      tags: [TAGS.CSharp, TAGS.dotNet],
      personal: false,
      company: 'U-Centrix',
    },
    {
      title: 'DORA Report system and export',
      summary:
        'Application that provides a more clear view of the necessary data needed for a DORA Report. This included the implementation of validation the input data as well as collecting it all in an export function and exporting it in the standard zip format.',
      tags: [TAGS.ZOHO, TAGS.Deluge],
      personal: false,
      company: 'U-Centrix',
    },
  ];

  filteredProjects = this.projectArray;

  allTags = new Set(this.projectArray.map((project) => project.tags).flat(1));
  selectedTags: any[] = [];

  filterProjects(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.filteredProjects = this.projectArray.filter((project) => {
      const matchesAllTags = this.selectedTags.every((tag) =>
        project.tags.includes(tag)
      );
      if (this.selectedTags.length === 0) {
        return true;
      }
      if (matchesAllTags) {
        return true;
      }
      return false;
    });
  }
}
