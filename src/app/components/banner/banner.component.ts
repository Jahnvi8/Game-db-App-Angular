import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers:[NgbCarouselConfig]
})
export class BannerComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval=6000;
    config.wrap=true;
    config.keyboard=false;
    config.pauseOnHover=false;
    config.showNavigationArrows=true;
    config.showNavigationIndicators=true;
  
   }


  ngOnInit(): void {
  }

}
