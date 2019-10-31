import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  @ViewChild('routerOutlet') private routerOutlet: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('hi')
  }
  ngAfterViewChecked() {
    this.routerOutlet.nativeElement.scrollIntoView();
  }
}
