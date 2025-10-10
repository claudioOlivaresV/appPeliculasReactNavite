import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {CastResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper';
import {Cast} from '../../entities/cast.entity';

export const getMovieCastUseCase = async (
  fectcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    console.log(movieId);
    const {cast} = await fectcher.get<CastResponse>(`/${movieId}/credits`);
    const actors = cast.map(CastMapper.fromCastDBresultToEntity);
    return actors;
  } catch {
    console.log('error cast');
  }
};
