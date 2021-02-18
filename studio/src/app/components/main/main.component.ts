import {Component, ViewChild} from '@angular/core';
import { SlickCarouselComponent } from "ngx-slick-carousel";

import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('slickModalImg', {static: false}) slickCarouselImg!: SlickCarouselComponent;
  @ViewChild('slickModalText', {static: false}) slickCarouselText!: SlickCarouselComponent;
  @ViewChild('slickModalCounter', {static: false}) slickCarouselCounter!: SlickCarouselComponent;

  //classes for nav menu
  navActiveMenu:boolean = false;
  navActive: boolean = false;
  classes = {};

  //icons
  telegram = faTelegram;
  instagram = faInstagram;
  facebook = faFacebook;

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "swipe": true, arrows: false};
  slideConfigCounter = {"slidesToShow": 2, "slidesToScroll": 1, "vertical": true, swipe: false, arrows: false}
  slideConfigText = {"slidesToShow": 1, "slidesToScroll": 1, "swipe": false, arrows: false};
  slides = [
    {img: "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", imgText: 'portrait'},
    {img: "https://images.unsplash.com/photo-1575897368738-aa5401c4af7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80", imgText: 'faces'},
    {img: "https://images.unsplash.com/photo-1575240567173-2099ab8ebef2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", imgText: 'loves'}
  ];

  constructor() {
    //nav menu
    this.classes = {
      navActiveMenu: 'nav-menu-active',
      navActive: 'nav-active'
    }
  }

  current_slide_index!: number;


  //nav menu events
  nav_event(){
    this.navActiveMenu = !this.navActiveMenu;
    this.navActive = !this.navActive;
  }

  close_nav(){
    this.navActiveMenu = false;
    this.navActive = false;
  }

  //slides events
  slide_pre(){
    this.slickCarouselImg.slickPrev();
  }
  slide_next(){
    this.slickCarouselImg.slickNext()
  }
  slick_init(event: any){
    this.current_slide_index = event.currentSlide;
    this.slickCarouselText.slickGoTo(this.current_slide_index);
    this.slickCarouselCounter.slickGoTo(this.current_slide_index);
  }

}
