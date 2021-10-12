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
                  grade: 91
                },
                {
                    id: 2,
                    title: 'Avengers',
                    year: 2012,
                    genre: 'Thriller',
                    grade: 91
                },
                {
                    id: 3,
                    title: 'Avengers',
                    year: 2012,
                    genre: 'Thriller',
                    grade: 91
                }
            ]
        }
    }
}