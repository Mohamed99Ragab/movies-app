import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  allTrending = [];  
  term:any;

  p:number = 1;
  total:number = 0;

  


  constructor(private _MovieService:MovieService)
  {

    

      
  }

  displayAllMovies(){
    this._MovieService.getAllTrending(this.p).subscribe((data)=>{


      this.allTrending = data.results;
      this.total = data.total_results;

    
    });
    
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.displayAllMovies();
}




ngOnInit() {

  this.displayAllMovies();

}


}
