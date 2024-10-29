/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from './components/title/title';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: 300,flexDirection:'column'}}>
        <Title title="Let's Explore"/>
      </View>
    </SafeAreaView>
  );
};
export default App;
