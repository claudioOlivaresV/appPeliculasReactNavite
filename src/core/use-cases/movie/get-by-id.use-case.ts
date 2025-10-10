import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {ResultOneMovie} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getByIdUseCase = async (
  fectcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    console.log(movieId);
    const movie = await fectcher.get<ResultOneMovie>(`/${movieId}`);
    console.log(movie, 'movie');
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
    return fullMovie;
  } catch {
    console.log('error mFullMoviee');
  }
};
