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
  categories: string[];

  checkCategories(categoryName: string) {
    let index = this.filterCategories.indexOf(categoryName);
    if (index == -1)
      this.filterCategories.push(categoryName);
    else
      this.filterCategories.splice(index, 1);
  }

  searchMovies(): void {
    this.getMovies.getMovies().subscribe(
      movie => this.movies = movie
    );
  }

  getCategories(): void {
    this.getMovies.getCategories().subscribe(
      category => this.categories = category
    );
  }

  title = 'Movie search tool';

  constructor(private getMovies: GetMovies) { }

  ngOnInit() {
    this.getCategories();
  }
}
