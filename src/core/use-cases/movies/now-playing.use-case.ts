import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const mpviesNewPlayingUseCase = async (
  fectcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fectcher.get<NowPlayingResponse>('/now_playing');
    console.log(nowPlaying);
    return nowPlaying.results.map(resutl =>
      MovieMapper.fromMovieDBresultToEntity(resutl),
    );
  } catch {
    console.log('error mpviesNewPlayingUseCase');
  }
};
