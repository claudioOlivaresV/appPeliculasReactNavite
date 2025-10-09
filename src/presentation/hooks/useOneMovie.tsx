import React, {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {getByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {FullMovie} from '../../core/entities/movie.entity';

export const useOneMovie = (movieId: number) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setLoading(true);
    console.log(movieId);
    
    const fullMovie = await getByIdUseCase(movieDBFetcher, movieId);
    console.log(fullMovie, 'respuestaaa');
    
    setMovie(fullMovie);
    setLoading(false);
    console.log(fullMovie);
    
  };

  return {
    movie,
    loading,
  };
};
