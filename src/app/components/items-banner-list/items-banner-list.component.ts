import { Component, Input } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'items-banner-list',
  templateUrl: './items-banner-list.component.html',
  styleUrls: ['./items-banner-list.component.scss']
})
export class ItemsBannerListComponent {
  @Input() items: Movie[] = [];
  @Input() title = '';
}
