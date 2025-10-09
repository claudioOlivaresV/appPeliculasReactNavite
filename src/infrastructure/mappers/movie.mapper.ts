import {FullMovie, Movie} from '../../core/entities/movie.entity';
import {Result, ResultOneMovie} from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDBresultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      relaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }
  static fromMovieDBToEntity(result: ResultOneMovie): FullMovie {
    console.log(result, 'entity');
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      relaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      generes: result.genres.map(gen => gen.name),
      duration: result.runtime,
      budget: result.budget,
      originalTitle: result.original_title,
      productionCompanies: result.production_companies.map(com => com.name),
    };
  }
}
