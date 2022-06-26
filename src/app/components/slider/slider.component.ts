import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    // @angular/animations
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]), // From showing to hiding
      transition('* => void', [animate('1s')]) // From hiding to showing
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner = false;
  currentSlideIndex = 0;

  ngOnInit() {
    if (!this.isBanner) {
      setInterval(() => {
        // making sure we always get back a number in the range of the array length
        // if the counter keeps counting over the array length no image will show
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
