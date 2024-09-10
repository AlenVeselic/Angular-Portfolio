import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  public myProgrammingLanguages: string[] = [
    'Javascript',
    'Python',
    'C#',
    'PHP',
    'Bash',
    'AQL',
    'SQL',
  ];

  public myTechnologies: string[] = [
    'Angular',
    'Dotnet',
    'Docker',
    'Node',
    'Linux',
    'PostgreSQL',
    'ArangoDB',
    'Git',
    'Postman',
  ];

  public mySkills: string[] = [
    'Frontend Development',
    'Backend Development',
    'Software Development',
    'Scripting',
    'Web Scraping',
    'Working in a team',
    'Minor Devops',
    'Brainstorming',
    'Version Control',
    'Container Application Development',
  ];
}
