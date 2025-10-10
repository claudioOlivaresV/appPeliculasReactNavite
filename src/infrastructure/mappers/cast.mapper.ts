import {Cast} from '../../core/entities/cast.entity';
import {CastMember} from '../interfaces/movie-db.responses';

export class CastMapper {
  static fromCastDBresultToEntity(cast: CastMember): Cast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? 'No',
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
