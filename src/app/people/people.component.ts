import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  allTrending:any = [];

  constructor(private _MovieService:MovieService)
  {

    _MovieService.getPeopleTrending().subscribe((data)=>{


      this.allTrending = data.results;
      // console.log(this.allTrending);
      

    });
    

      
  }

}
