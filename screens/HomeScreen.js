import React from 'react';
import {Text} from 'react-native';
import DefaultLayout from '../layouts/DefaultLayout';

export default function HomeScreen({navigation}) {
  console.log(navigation.getCurrentRoute);
  return (
    <DefaultLayout>
      <Text>Home screen</Text>
    </DefaultLayout>
  );
}
