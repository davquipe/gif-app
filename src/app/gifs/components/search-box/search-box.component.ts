import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="Buscar gif... 👀" (keyup.enter)="searchGifs()" #txtTagInput />
  `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() { }
  searchGifs() {
    const newTag = this.tagInput.nativeElement.value;
    console.log(newTag);
  }
}
