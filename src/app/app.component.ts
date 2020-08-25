import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, animate, style, transition, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('.5s ease-in-out', style({ opacity: 1 })),
      ])
    ])
  ]
})

export class AppComponent {
  title = 'Bruce Nguyen';

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state'] || null;
  }
}