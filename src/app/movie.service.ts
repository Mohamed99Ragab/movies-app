import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) { 

     

  }


  getAllTrending(pageNum:number):Observable<any>
  {
    
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=02c5f65ff1e2e34ae863a86cb6dbd06f&page='+pageNum);
    
  }

  getAll():Observable<any>
  {
    
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=02c5f65ff1e2e34ae863a86cb6dbd06f');
    
  }


  getMoviesTrending():Observable<any>
  {
    
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=02c5f65ff1e2e34ae863a86cb6dbd06f');
    
  }

  getTvTrending():Observable<any>
  {
    
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=02c5f65ff1e2e34ae863a86cb6dbd06f');
    
  }

  getPeopleTrending():Observable<any>
  {
    
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/week?api_key=02c5f65ff1e2e34ae863a86cb6dbd06f');
    
  }



}
