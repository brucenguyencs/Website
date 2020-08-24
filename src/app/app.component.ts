import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, animate, style, transition, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        group([
          query(':enter', [style({ opacity: 0 }), animate('500ms ease-out', style({ opacity: 1 }))], { optional: true }),
          query(':leave', [style({ opacity: 1 }), animate('500ms ease-out', style({ opacity: 0 }))], { optional: true })
        ])
      ])
    ])
  ]
})

export class AppComponent {
  title = 'Bruce Nguyen';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}