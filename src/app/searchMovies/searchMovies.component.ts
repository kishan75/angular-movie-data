import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GetMovies } from "../getMovies.service";
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-searchMovies',
  templateUrl: './searchMovies.component.html',
  styleUrls: ['./searchMovies.component.css']
})
export class CategoriesComponent implements OnInit {

  myForm: FormGroup;
  categories: string[] = [];
  controlArray: FormControl[] = [];
  movies: string[] = [];
  nextURL;

  constructor(private getMovies: GetMovies) {
    this.getMovies.getCategories().subscribe(

      category => {
        this.categories = category;
        this.categories.forEach(element =>
          this.controlArray.push(new FormControl(false))
        );
        this.myForm.setControl('filters', new FormArray(this.controlArray));
      }

    );
  }

  fetchMovies(movieName: string) {
    this.getMovies.getMovies(movieName).subscribe((result: any) => {
      this.movies = result.results;
      this.nextURL = result.next;
    });
  }

  onScroll(pageNumber: number) {
    if (this.nextURL) {
      this.getMovies.getMoviesNextPage(this.nextURL).subscribe((result: any) => {
        this.movies.push.apply(this.movies, result.results);
        this.nextURL = result.next;
      });
    }
    else
      console.log('nextURL is not available');
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      movieName: new FormControl(''),
      filters: new FormArray(this.controlArray)
    });

    this.myForm.valueChanges.subscribe(() => {
      this.fetchMovies((this.myForm.get('movieName').value));
    });
  }

}
