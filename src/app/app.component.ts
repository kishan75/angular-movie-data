import { Component } from '@angular/core';
import { GetMovies } from './getMovies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filterCategories: string[];
  movies: string[];

  title = 'Movie search tool';

  constructor() { }

  ngOnInit() {
    
  }
}
