import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import { formatNumber } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trenttingMovie = [];
  trendingTv = [];
  imgPrefx = 'https://image.tmdb.org/t/p/w500/';

  constructor(_MoviesService:MoviesService) { 
    _MoviesService.getTrandingMovies().subscribe((data)=>{
      
      this.trenttingMovie = data.results;
      // console.log(data)

    }, (err)=>{ 
      console.log(err);
    })
    _MoviesService.getTrandingTv().subscribe((data)=>{
      
      this.trendingTv = data.results;
      // console.log(data)

    }, (err)=>{ 
      console.log(err);
    })
  };

  


  ngOnInit(): void {
  }

}
