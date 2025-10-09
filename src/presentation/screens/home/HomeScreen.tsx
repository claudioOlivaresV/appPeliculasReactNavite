import {Text, View} from 'react-native';
import React from 'react';
import {useMovie} from '../../hooks/useMovie';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} = useMovie();

  if (isLoading) {
    return <Text>cargando...</Text>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel
          movies={popular}
          title={'Populares'}
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel movies={topRated} title={'Mejor Calificadas'} />
        <HorizontalCarousel movies={upcoming} title={'Proximamente'} />
      </View>
    </ScrollView>
  );
};
