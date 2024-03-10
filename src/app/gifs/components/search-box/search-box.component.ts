import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="Buscar gif... 👀" (keyup.enter)="searchGifs( txtTagInput.value )" #txtTagInput />
  `
})
export class SearchBoxComponent {
  constructor() { }
  searchGifs(query: string) {
    console.log(query);
  }
}
