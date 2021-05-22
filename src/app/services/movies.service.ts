import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../movies/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url:string="https://api.themoviedb.org/3"

  params=new HttpParams().set(
     'api_key','c81d95f7379ba6fca9afb83972708a2b')
    //  .set('query','a')

  constructor(private Http:HttpClient) {
  }

  getMovies(query:string,year:number)
  {
    this.params=new HttpParams().set(
      'api_key','c81d95f7379ba6fca9afb83972708a2b').set('query',query)
    if(year!=null)
        this.params=new HttpParams().set(
     'api_key','c81d95f7379ba6fca9afb83972708a2b').set('year',year.toString()).set('query',query)
     return this.Http.get(this.url+ "/search/movie", {params:this.params})
  }
}
