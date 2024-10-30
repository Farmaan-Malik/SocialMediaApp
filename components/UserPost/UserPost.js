import React from 'react';
import {View, Text, Image} from 'react-native';
import UserProfile from '../UserProfile/UserProfile';
import style from './style';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={style.postContainer}>
      <View style={style.postHeader}>
        <View style={[style.userDetails]}>
        <UserProfile photo={props.profileImage} dimensions={48} />
        <View style={style.postDetail}>
          <Text style={style.userName}>
            {props.firstName} {props.lastName}
          </Text>
          <Text style={style.location}>{props.location}</Text>
        </View>
        </View>
        <FontAwesomeIcon icon={faEllipsis} color='#79869F' size={22}/>
      </View>
      <Image style={style.postImage} source={props.post}/>
      <View style={style.stats}>
        <FontAwesomeIcon style={style.icons} size={18} icon={faHeart} color='#79869F'/>
        <Text style={style.statText}>{props.likes}</Text>
        <FontAwesomeIcon style={style.icons} size={18} icon={faComment} color='#79869F'/>
        <Text style={style.statText}>{props.comments}</Text>
        <FontAwesomeIcon style={style.icons} size={18} icon={faBookmark} color='#79869F'/>
        <Text style={style.statText}>{props.bookmarks}</Text>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
  location: PropTypes.string,
  post: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
