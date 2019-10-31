import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss']
})
export class LandingSectionComponent implements OnInit {

  @ViewChild('overlay') private overlay: ElementRef;
  @ViewChild('landingSection') private landingSection: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.overlay.nativeElement.style.width = "100%";
    this.overlay.nativeElement.classList.add("padding20");
    this.landingSection.nativeElement.classList.remove("overflow-x-hidden");
    this.landingSection.nativeElement.classList.add("overflow-hidden");
  }

  closeMenu() {
    this.overlay.nativeElement.style.width = "0";
    this.overlay.nativeElement.classList.remove("padding20");
    this.landingSection.nativeElement.classList.remove("overflow-hidden");
    this.landingSection.nativeElement.classList.add("overflow-x-hidden");
  }
}
