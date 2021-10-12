import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  isNotError = false;

  router; 
  title = 'gallery';
  constructor(private _router: Router ) {
    this.router = this._router;
  }
  ngOnInit() {
    this.check();
  }

  

  check() { // This method is called many times
    console.log(this.router.url); // This prints a loot of routes on console
    for (let ur of routes) {
      if (this.router.url === ('/' + ur.path))
      {
        this.isNotError = true;
      }
    }
  }
  
  getUrl()
  {

  }
}

