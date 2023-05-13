import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any,term:string): any[] {


    
    if(term == undefined){

      return movies;
    }

    

    return movies.filter(function(movie:any) {

      if(movie.title ==undefined){
       return movie.name.toLowerCase().includes(term.toLowerCase());

      }
      else{
      return  movie.title.toLowerCase().includes(term.toLowerCase());

      }
      
    }  )

   
  }

}
