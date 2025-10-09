import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import {mpviesNewPlayingUseCase} from '../../core/use-cases/movies/now-playing.use-case';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {popularUseCase} from '../../core/use-cases/movies/popular.use-case';
import {topRatedUseCase} from '../../core/use-cases/movies/top-rated.use-case';
import {upcomingUseCase} from '../../core/use-cases/movies/upcoming.use-case';

let popularPageNumber = 1;

export const useMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initalLoad();
  }, []);

  const initalLoad = async () => {
    const nowPlayingMoviesPromise = mpviesNewPlayingUseCase(movieDBFetcher);
    const popularPromise = popularUseCase(movieDBFetcher);
    const topRatedPromise = topRatedUseCase(movieDBFetcher);
    const upcomingPromise = upcomingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingMoviesPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);
    setnowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await popularUseCase(movieDBFetcher, {
        page: popularPageNumber,
      });

      setPopular(prev => [...prev, ...popularMovies]);
    },
  };
};
