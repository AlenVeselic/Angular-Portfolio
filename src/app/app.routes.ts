import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IntroComponent } from './intro/intro.component';
import { CvZoneComponent } from './cv-zone/cv-zone.component';
import { MeComponent } from './me/me.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
    data: {
      animation: '',
      bodyClass: 'blue-gradient',
      CVLinkClass: 'expose',
    },
  },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   data: { animation: 'AboutPage' },
  // },
  {
    path: 'cv',
    component: CvZoneComponent,
    data: { animation: '', bodyClass: 'greenish-yellow' },
  },
  // { path: 'me', component: MeComponent, data: { animation: 'MePage' } },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animation: '', bodyClass: 'skills' },
  },
];
