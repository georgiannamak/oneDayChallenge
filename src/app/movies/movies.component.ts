import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  searchForm: FormGroup
  data:any;
  showModal:boolean

  constructor(private dataService:MoviesService,private builder:FormBuilder) {
      this.searchForm=new FormGroup({});
      this.showModal=false
  }

  ngOnInit(): void {
    this.searchForm= this.builder.group({
      query:['',[Validators.required]],
      year:['',[Validators.minLength(4),Validators.min(1990),Validators.max(2025)]]
    }
    )
  }

  getMoviesFromService()
  {
      this.dataService.getMovies().subscribe(
        (resp:any)=>{this.data=resp}
      )
  }

  buttonClicked()
  {
      this.showModal=true;
  }

}
