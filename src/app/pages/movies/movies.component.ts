import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.queryMovies(1);
  }

  queryMovies(pageNumber: number) {
    this.moviesService.searchMovies(pageNumber).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    const { page } = event;
    this.queryMovies(page + 1);
  }
}
