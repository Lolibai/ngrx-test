import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/film';
@Component({
  selector: 'app-film-selected',
  template: `
    <div *ngIf="film.name">
      <h1>{{ film.name }}</h1>
      <p>{{ film.description }}</p>
      <img src="{{film.img}}" alt="film image" />
    </div>
  `,
  styles: []
})
export class FilmSelectedComponent implements OnInit {
  @Input() film: Film;
  constructor() {}

  ngOnInit() {}
}
