import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';

export const HomeScreen = () => {
  const data = useMovies();
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
