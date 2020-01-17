import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-data',
  templateUrl: './showMovies.component.html',
  styleUrls: ['./showMovies.component.css']
})
export class MovieDataComponent implements OnInit {

  @Input() movies: string[];
  @Output() pageChange = new EventEmitter<number>();
  page: number = 0;

  onScroll() {
    this.pageChange.emit(++this.page);
  }

  constructor() { }

  ngOnInit() {
  }

}
