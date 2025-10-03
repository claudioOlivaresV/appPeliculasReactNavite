import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const upcomingUseCase = async (
  fectcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fectcher.get<PopularResponse>('/upcoming');
    console.log(upcoming);
    return upcoming.results.map(resutl =>
      MovieMapper.fromMovieDBresultToEntity(resutl),
    );
  } catch {
    console.log('error upcoming');
  }
};
