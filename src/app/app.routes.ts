import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'portfolio', component: PortfolioComponent },
  //{ path: 'cv' },
];
