import { Component, ElementRef, OnInit } from '@angular/core';

import { NgIf } from '@angular/common';

export interface Skill {
  title: String;
  claimedBy: String | null;
  icon?: String | null;
  index: number | null;
  type: String;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  public myProgrammingLanguages: Skill[] = [
    {
      title: 'Javascript',
      icon: './3dgifmaker08122.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Typescript',
      icon: './typescript.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Python',
      icon: './pylogooutline.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'C#',
      icon: './csharp.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'PHP',
      icon: './php.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Bash',
      icon: './bash.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'AQL',
      icon: './aql.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'SQL',
      icon: './sql2.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
  ];

  public myTechnologies: Skill[] = [
    {
      title: 'Angular',
      icon: './angular.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Docker',
      icon: './docker.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Node',
      icon: './nodejs.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Linux',
      icon: './linux.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'AWS CDK',
      icon: './amazon.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'PostgreSQL',
      icon: './postgresql.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Dotnet',
      icon: './dotnet.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'ArangoDB',
      icon: './aql.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Git',
      icon: 'git.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Postman',
      icon: './postman.gif',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
  ];

  public mySkills: Skill[] = [
    {
      title: 'Frontend Development',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Backend Development',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Software Development',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Scripting',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Web Scraping',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Working in a team',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Minor Devops',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Brainstorming',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Version Control',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Container Application Development',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
    {
      title: 'Serverless development',
      icon: './Angular.png',
      claimedBy: null,
      index: null,
      type: 'technology',
    },
  ];

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}
}
