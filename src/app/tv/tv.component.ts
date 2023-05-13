import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  allTrending:any = [];

  constructor(private _MovieService:MovieService)
  {

    _MovieService.getTvTrending().subscribe((data)=>{


      this.allTrending = data.results;
      // console.log(this.allTrending);
      

    });
    

      
  }

}
