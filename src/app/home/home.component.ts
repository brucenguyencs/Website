import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    parallax();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    parallax();
  }

}

function parallax() {
  var obj = document.getElementsByClassName('parallax');
  if (window.outerWidth >= 960) {
    for (var i = 0; i < obj.length; i++) {
      var elem:HTMLElement = obj[i] as HTMLElement;
      if (elem.dataset.speed != undefined) {
        var offset = window.pageYOffset * parseFloat(elem.dataset.speed);
        elem.style.transform = 'translate3d(0px, ' + offset + 'px, 0px)';
      }
    }
  } else {
    for (var i = 0; i < obj.length; i++) {
      var elem:HTMLElement = obj[i] as HTMLElement;
      elem.style.transform = 'translate3d(0px, 0px, 0px)';
    }
  }
}