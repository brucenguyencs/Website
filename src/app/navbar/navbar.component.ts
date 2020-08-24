import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    updateNav();
  }

  navToggle() {
    var nav = document.querySelector('.nav-mobile');
    var links = document.querySelector('.nav-links');
    nav.classList.toggle('nav-active');
    links.classList.toggle('nav-active');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    updateNav();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    updateNav();
  }

}

function updateNav() {
  var header = document.querySelector('#navbar') as HTMLElement;
  var uparrow = document.querySelector('.arrow-up') as HTMLElement;
  if (window.pageYOffset > 31) {
    if (window.innerWidth >= 960) {
      header.style.backgroundColor = 'rgba(0,0,0,' + Math.min((window.pageYOffset - 31)/200, 0.9) + ')';
      header.classList.add("sticky");
    }
    uparrow.style.opacity = '1';
    uparrow.style.pointerEvents = 'auto';
  } else {
    header.style.backgroundColor = 'rgba(0,0,0,0)';
    header.classList.remove("sticky");
    uparrow.style.opacity = '0';
    uparrow.style.pointerEvents = 'none';
  }
}
