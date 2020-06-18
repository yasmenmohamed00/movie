import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss']
})
export class MoviesdetailsComponent implements OnInit {
 
  id:any;
  movieD:any;
  TopTenMovie:any =[];
  imgPrefx = 'https://image.tmdb.org/t/p/w500/';
  
  constructor(public _ActivatedRoute:ActivatedRoute, public _MoviesService:MoviesService) {
     this.id = _ActivatedRoute.snapshot.paramMap.get('m');

     _MoviesService.getMovieD(this.id).subscribe(Data=>{
       this.movieD = Data;
     })

     _MoviesService.getTrandingMovies().subscribe(topTen=>{
       for (let i = 0; i < 10; i++) {
         this.TopTenMovie.push(topTen.results[i]);
        //  console.log(this.TopTenMovie);
       }
     })
   }

  ngOnInit(): void {
  }

}
