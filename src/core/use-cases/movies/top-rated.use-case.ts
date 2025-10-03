import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const topRatedUseCase = async (
  fectcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fectcher.get<PopularResponse>('/top_rated');
    console.log(topRated);
    return topRated.results.map(resutl =>
      MovieMapper.fromMovieDBresultToEntity(resutl),
    );
  } catch {
    console.log('error topRated');
  }
};
