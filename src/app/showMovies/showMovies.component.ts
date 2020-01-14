import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-data',
  templateUrl: './showMovies.component.html',
  styleUrls: ['./showMovies.component.css']
})
export class MovieDataComponent implements OnInit {

  @Input() movies: string[];

  constructor() { }

  ngOnInit() {
  }

}
