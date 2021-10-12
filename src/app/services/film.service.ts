import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/Film';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  filmsUrl = 'api/films';

  filmAdded: EventEmitter<Film> = new EventEmitter<Film>();

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(
      `${this.filmsUrl}`
    );
  }

  putFilm(film: Film): Observable<Film[]> {
    return this.http.put<Film[]> (
      `${this.filmsUrl}/${film.id}`, film, httpOptions
    );
  }

  deleteFilm(film: Film): Observable<Film[]> {
    return this.http.delete<Film[]> (
      `${this.filmsUrl}/${film.id}`, httpOptions
    );
  }

  addFilm(title: string, year: string, genre: string,
           grade: string): Observable<Film> {
    const newFilm: Partial<Film> = {
      title,
      year,
      genre,
      grade
    }

    return this.http.post<Film>(
      this.filmsUrl, newFilm, httpOptions
    )
  }

  
}
