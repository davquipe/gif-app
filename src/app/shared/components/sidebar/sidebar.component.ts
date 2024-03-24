import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // private GifsService: GifsService;
  constructor(private gifsService: GifsService) {
  }
  get tags(): string[] {
    return this.gifsService.tagHistorial;
  }

  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }

}
