import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie, MovieDTO } from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', numOfMovies: number = 12) {
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, numOfMovies));
      })
    );
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  searchMovies(pageNumber: number) {
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${pageNumber}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }
}
