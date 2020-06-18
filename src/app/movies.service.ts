import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) { }

  getTrandingMovies():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=bbfa26ff5247034dcdfbea1d7b94f062');
  }
  getTrandingTv():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=bbfa26ff5247034dcdfbea1d7b94f062');
  }
  getMovieD(id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bbfa26ff5247034dcdfbea1d7b94f062&language=en-US`);
  }
}
