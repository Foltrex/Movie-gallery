import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  title: string = '';
  year: string = '';
  genre: string = '';
  grade: string = '';
  grades: number[] = [ 1, 2, 3, 4, 5 ]
  years: number[] = [ 
    1990, 1991, 1992, 1993, 1994,
    1995, 1996, 1997, 1998, 1999,
    2000, 2001, 2002, 2003, 2004,
    2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019,
    2020, 2021
  ]
  genres: string[] = [
    "Action",
    "Western film",
    "Detective",
    "Drama",
    "Historical film",
    "Comedy",
    "Melodrama"
  ]

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.title != '' && this.year != '' &&
        this.genre != '' && this.grade != '') {
              this.filmService.addFilm (this.title, this.year,
                                        this.genre, this.grade).subscribe
                                                                (film => {
                                                                console.log(film);
                                                                this.filmService.filmAdded.emit(film);
                                                                });
    }    
  }
}
