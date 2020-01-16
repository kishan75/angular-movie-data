import { Component, OnInit, Input } from '@angular/core';
import { GetMovies } from "../getMovies.service";

@Component({
  selector: 'app-movie-data',
  templateUrl: './showMovies.component.html',
  styleUrls: ['./showMovies.component.css']
})
export class MovieDataComponent implements OnInit {

  movies: string[];

  constructor(private getMovies: GetMovies) { }

  fetchMovies(movieName: string) {
    this.getMovies.getMovies(movieName).subscribe(function name(movie) {
      console.log("data---", movie);
    });
  }

  ngOnInit() {
    this.fetchMovies('');
  }

}
