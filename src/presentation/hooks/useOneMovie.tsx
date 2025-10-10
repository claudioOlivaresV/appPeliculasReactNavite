import React, {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {getByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {FullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';
import {getMovieCastUseCase} from '../../core/use-cases/movie/get-cast.use-case';

export const useOneMovie = (movieId: number) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setLoading(true);
    console.log(movieId);
    const fullMoviePromise = await getByIdUseCase(movieDBFetcher, movieId);
    const castPromise = await getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovie, castMovies] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);
    setMovie(fullMovie);
    setCast(castMovies);
    setLoading(false);
    console.log(fullMovie);
    console.log(castMovies);
  };

  return {
    movie,
    loading,
    cast,
  };
};
