import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {


  allTrending:any = [];

  constructor(private _MovieService:MovieService)
  {

    _MovieService.getMoviesTrending().subscribe((data)=>{


      this.allTrending = data.results;
      // console.log(this.allTrending);
      

    });
    

      
  }


}
