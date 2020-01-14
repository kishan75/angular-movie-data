import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GetMovies } from "../getMovies.service";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchMovies',
  templateUrl: './searchMovies.component.html',
  styleUrls: ['./searchMovies.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private getMovies: GetMovies) { }

  @Output() checkCategories = new EventEmitter<string>();
  @Output() movieName = new EventEmitter<string>();
  @Input() categories: string[];

  private fb: FormGroup = new FormGroup()

  checkCategoriesList(value: string) {
    this.checkCategories.emit(value);
  }

  searchMovies(movieName: string) {
    this.movieName.emit(movieName);
  }

  ngOnInit() {
  }

}
