import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[] = [];
  private apiKey: string = 'H1mfKBWL6iIP39EOVu823eI6PHFZsg8c'
  private url: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) { }

  get tagHistorial() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(t => t !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams().set('api_key', this.apiKey).set('q',
      tag).set('limit', '10');

    this.http.get(`${this.url}/search`, { params })
      .subscribe(response => {
        console.log(response);
      }
      );

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   });
    console.log(this._tagHistory);

  }
}
