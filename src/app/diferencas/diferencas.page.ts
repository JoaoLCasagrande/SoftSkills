import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diferencas',
  templateUrl: './diferencas.page.html',
  styleUrls: ['./diferencas.page.scss'],
})
export class DiferencasPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
