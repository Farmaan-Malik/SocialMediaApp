import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: 24,
    fontFamily: getFontFamily('Inter', '600'),
    fontWeight: '600',
    textShadowColor: 'grey',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 3,
  },
});
export default style;
