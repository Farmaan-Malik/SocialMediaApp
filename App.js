/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { getFontFamily } from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: 300,flexDirection:'column'}}>
        <Text style={{fontSize: 90, fontFamily: getFontFamily('Tiny5')}}>
          Hello World 3
        </Text>
        <Text style={{fontFamily: 'Tiny5-Regular', fontSize: 50}}>
          Hello World Tiny
        </Text>
        <Text style={{fontSize: 50}}>Hello World 2</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;
