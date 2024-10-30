import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        marginLeft: 26,
        marginRight: 17,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      touchableMessageIcon: {
        padding: 14,
        backgroundColor: '#F9FAFB',
        borderRadius: '50%',
        marginBottom: 3,
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 6},
      },
      messageCount: {
        backgroundColor: '#F35BAC',
        width: 12,
        height: 12,
        zIndex:1,
        borderRadius: '50%',
        position: 'absolute',
        top: 10,
        right: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      touchableMessageIconBg: {
        backgroundColor: '#CACDDE',
        width: 10,
        height: 7,
        borderRadius: 3,
        position: 'absolute',
        top: 21,
        right: 18,
      },
      storyView: {
        marginLeft: 28,
        marginRight: 27,
        marginTop: 12,
        // borderWidth: 1
    },
})

export default style;