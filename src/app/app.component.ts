import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { HeaderComponent } from './header/header.component';
import { slideInAnimation } from '../animations';
import { DOCUMENT } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    UnderConstructionComponent,
    HeaderComponent,
  ],
  templateUrl: './app2.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  title = "Alen's WWW";

  constructor(
    private contexts: ChildrenOutletContexts,
    private renderer: Renderer2,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .subscribe((event) => {
        this.updateBodyClass(event['bodyClass']);
        this.updateCVLinkClass(event['CVLinkClass']);
      });
  }

  getRouteAnimationData() {
    console.log(
      this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
    );
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  private updateBodyClass(customBodyClass?: string) {
    this.renderer.setAttribute(this.document?.body, 'class', '');
    if (customBodyClass) {
      this.renderer.addClass(this.document?.body, customBodyClass);
    }
  }

  private updateCVLinkClass(customCVLinkClass?: string) {
    this.renderer.setAttribute(
      this.document?.getElementsByClassName('cv-link')[0],
      'class',
      'cv-link nav-link'
    );
    if (customCVLinkClass) {
      this.renderer.addClass(
        this.document?.getElementsByClassName('cv-link')[0],
        customCVLinkClass
      );
    }
  }
}
