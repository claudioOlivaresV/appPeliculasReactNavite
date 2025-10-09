import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const popularUseCase = async (
  fectcher: HttpAdapter,
  options?: any,
): Promise<Movie[]> => {
  try {
    const popular = await fectcher.get<PopularResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });
    console.log(popular);
    return popular.results.map(resutl =>
      MovieMapper.fromMovieDBresultToEntity(resutl),
    );
  } catch {
    console.log('error popular');
  }
};
