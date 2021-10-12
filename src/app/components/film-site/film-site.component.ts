import { Component, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/models/Film';
import { SiteService } from 'src/app/services/site.service';
@Component({
  selector: 'app-film-site',
  templateUrl: './film-site.component.html',
  styleUrls: ['./film-site.component.css']
})
export class FilmSiteComponent implements OnInit {
  film!: Film;
  constructor(private filmService: SiteService) { }

  ngOnInit(): void {
    this.filmService.filmE$.subscribe((film) => {
      console.log(film);
      this.film = film;
    });
  }

}
