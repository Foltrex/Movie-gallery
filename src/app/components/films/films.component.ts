import { Component, Input, OnInit, Output } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  constructor(private filmService: FilmService) { }

  mode: boolean = true;
  ngOnInit(): void {
    this.filmService.getFilms().subscribe(films => {
      this.films = films;
    });

    this.filmService.filmAdded.subscribe(film => {
      this.films.push(film);
    });
  }

  
  onDeleteFilm(film: Film): void {
    // update client
    console.log("deleting films");
    this.films = this.films.filter(element => element.id !== film.id);

    // update on server
    this.filmService.deleteFilm(film).subscribe( (data) => console.log(data))
  }

  changeMode() {
    this.mode = !this.mode;
  }

  
}
