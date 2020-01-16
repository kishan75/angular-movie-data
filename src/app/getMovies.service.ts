import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetMovies {
  private categoriesURL = 'https://movie-search-project.herokuapp.com';

  getMovies(movieName: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.categoriesURL}/movie/?q=${movieName}`).pipe(pluck('results'));
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.categoriesURL).pipe(pluck('categories'));
  }

  constructor(private http: HttpClient) { }
}
