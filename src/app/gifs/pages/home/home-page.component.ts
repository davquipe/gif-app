import { Component } from '@angular/core';
import { Datum, GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) { }

  get gifs(): Datum[] {
    return this.gifsService.gifList;
  }
}
