import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FilmsComponent } from './components/films/films.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { Error404Component } from './error404/error404.component';
import { FilmSiteComponent } from './components/film-site/film-site.component';
import { AddFilmComponent } from './components/add-film/add-film.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmsComponent,
    AboutComponent,
    HomeComponent,
    FilmItemComponent,
    Error404Component,
    FilmSiteComponent,
    AddFilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {post204: false, put204: false, delay: 1000}),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
