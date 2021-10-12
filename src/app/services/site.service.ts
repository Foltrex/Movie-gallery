import { EventEmitter, Injectable } from '@angular/core';
import { Film } from '../models/Film';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor() { }
  public filmE$ = new Subject<Film>();
  public changeFilmE(film: Film) {
    this.filmE$.next(film);
  }
}
