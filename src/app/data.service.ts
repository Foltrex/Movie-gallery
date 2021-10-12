import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
    constructor() {}

    createDb() {
        return {
            films: [
                {
                  id: 1,
                  title: 'Avengers',
                  year: 2012,
                  genre: 'Thriller',
                  grade: 5
                },
                {
                    id: 2,
                    title: 'Spider-man',
                    year: 2002,
                    genre: 'Thriller',
                    grade: 5
                },
                {
                    id: 3,
                    title: 'X-Men',
                    year: 2003,
                    genre: 'Thriller',
                    grade: 5
                }
            ]
        }
    }
}