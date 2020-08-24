import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
  if (window.innerWidth >= 960) {
    var obj = document.getElementsByClassName('parallax');
    for (var i = 0; i < obj.length; i++) {
      (obj[i] as HTMLElement).style.backgroundPosition = 'center ' + (window.pageYOffset-getOffset(obj[i] as HTMLElement))*0.5 + 'px';
    }
  }
}

function getOffset(elem: HTMLElement) {
  var offset = 0;
  do {
    if (!isNaN(elem.offsetTop)) {
      offset += elem.offsetTop;
    }
  } while (elem = (elem.offsetParent as HTMLElement));
  return offset;
}