import {Text, View} from 'react-native';
import React from 'react';
import {useMovie} from '../../hooks/useMovie';

export const HomeScreen = () => {
  const data = useMovie();
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
