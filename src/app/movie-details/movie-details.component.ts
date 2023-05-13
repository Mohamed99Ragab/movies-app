import { MovieService } from './../movie.service';
import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  ind:any;
  movieDetails:any = {};
 
  constructor(private _MovieService:MovieService,private _ActivatedRoute:ActivatedRoute){

    this.ind = _ActivatedRoute.snapshot.paramMap.get('id');

     _MovieService.getAll().subscribe((data)=>{

        this.movieDetails = data.results[this.ind]

        console.log(this.movieDetails);
    });

  }


}
