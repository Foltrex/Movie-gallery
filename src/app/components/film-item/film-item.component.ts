import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/models/Film';
import { SiteService } from 'src/app/services/site.service';
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input()
  film!: Film;

  @Output() onDeleteFilm: EventEmitter<Film> = new EventEmitter();
  @Output() onGotoSiteFilm: EventEmitter<Film> = new EventEmitter();
  constructor(private filmService: SiteService) { }

  ngOnInit(): void {
  }

  onGotoSite(film: Film) {
    this.filmService.changeFilmE(film);
  }

  onDelete(film: Film): void {
    console.log('flim-item was deleted');
    this.onDeleteFilm.emit(film);
  }
}
