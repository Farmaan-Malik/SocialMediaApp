import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    postContainer:{
        flexDirection:'column',
        marginHorizontal:24,
        marginTop:40,
    },
    postHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
    },
    postDetail:{
        marginLeft:10,
    },
    userName:{
        fontSize:16,
        fontFamily: getFontFamily('Inter', '600'),
        fontWeight:'medium',
    },
    location:{
        color:'#79869F',
        fontSize:12,
    },
    userDetails:{
        flexDirection:'row',
        alignItems:'center',

    },
    postImage:{
        marginTop:16,
        alignSelf:'center',
    },
    stats:{
        flexDirection:'row',
        marginVertical:20,
    },
    statText:{
        fontSize:14,
        color:'#79869F',
        marginLeft:4,
    },
    icons:{
        marginLeft:20
    }

});

export default style;
