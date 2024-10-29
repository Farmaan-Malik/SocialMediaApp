import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import UserProfile from '../UserProfile/UserProfile';

const StoryView = props => {
  return (
    <View style={style.StoryContainer}>
        <UserProfile photo={props.photo} dimensions={65}/>
      <Text style={style.StoryText}>{props.firstName}</Text>
    </View>
  );
};

StoryView.propType = {
  firstName: PropTypes.string.isRequired,
  photo: PropTypes.any.isRequired,
};

export default StoryView;
