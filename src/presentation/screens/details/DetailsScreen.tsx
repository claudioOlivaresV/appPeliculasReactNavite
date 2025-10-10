import {Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import {useOneMovie} from '../../hooks/useOneMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  // const {movieId} = useRoute().params;
  const {movieId} = route.params;
  console.log(movieId);

  const {loading, movie, cast} = useOneMovie(movieId);

  if (loading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie?.originalTitle!}
        title={movie?.title!}
        poster={movie?.poster!}
      />
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
