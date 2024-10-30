/* eslint-disable react-native/no-inline-styles */
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {getFontFamily} from '../assets/fonts/helper';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from '../screens/HomeScreen/style';

const TouchableMessage = () => {
  return (
    <TouchableOpacity style={style.touchableMessageIcon}>
      <View style={style.messageCount}>
        <Text
          style={{
            fontFamily: getFontFamily('Inter', '900'),
            color: 'white',
            fontWeight:'900',
            fontSize: 6,
          }}>
          2
        </Text>
      </View>
      <View style={style.touchableMessageIconBg} />
      <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
    </TouchableOpacity>
  );
};
export default TouchableMessage;
