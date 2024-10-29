import {StyleSheet} from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  StoryContainer: {
    marginLeft: 20,
  },
  StoryText:{
    fontSize: 14,
    fontFamily:getFontFamily('Inter', '500'),
    fontWeight:500,
    textAlign:'center',
  },
});
export default style;
