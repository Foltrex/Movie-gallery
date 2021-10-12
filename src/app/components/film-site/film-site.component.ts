import { Component, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/models/Film';
@Component({
  selector: 'app-film-site',
  templateUrl: './film-site.component.html',
  styleUrls: ['./film-site.component.css']
})
export class FilmSiteComponent implements OnInit {
  film!: Film;
  constructor() { }

  ngOnInit(): void {

  }
  
  onGotoSiteFilm(film_: Film) {
    this.film = film_;
    if (this.film == null) {
      console.log('null!!!');
    } else {
      console.log(this.film);
    }
  }

}
