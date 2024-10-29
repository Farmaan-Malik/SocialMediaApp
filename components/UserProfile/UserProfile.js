import PropTypes from 'prop-types';
import React from 'react';
import { View, Image } from 'react-native';
import style from './style';

const UserProfile = props => {
    return(
        <View style={[style.ImageContainer,{borderRadius:props.dimensions}]}>
            <Image style={{width: props.dimensions,height:props.dimensions}} source={props.photo} />
        </View>
    );
};

UserProfile.propTypes = {
    photo: PropTypes.any.isRequired,
    dimensions: PropTypes.number.isRequired,
};
export default UserProfile;
