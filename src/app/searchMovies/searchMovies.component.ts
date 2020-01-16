import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GetMovies } from "../getMovies.service";
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { MovieDataComponent } from "../showMovies/showMovies.component";

@Component({
  selector: 'app-searchMovies',
  templateUrl: './searchMovies.component.html',
  styleUrls: ['./searchMovies.component.css']
})
export class CategoriesComponent implements OnInit {

  myForm: FormGroup;
  categories: string[] = [];
  controlArray: FormControl[] = [];
  let showMovies = new MovieDataComponent();

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

ngOnInit() {
  this.myForm = new FormGroup({
    movieName: new FormControl(''),
    filters: new FormArray(this.controlArray)
  });

  this.myForm.valueChanges.subscribe(() => {
    this.showMovies.fetchMovies((this.myForm.get('movieName').value));
    console.log(this.myForm.get('filters').value);
  });
}

}
