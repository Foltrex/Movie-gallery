import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FilmSiteComponent } from './components/film-site/film-site.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import {Error404Component} from './error404/error404.component'
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'film', component: FilmSiteComponent},
  { path: '**', component: Error404Component }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
