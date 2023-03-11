import {StyleSheet} from 'react-native';

export const listStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 50,
        paddingTop: 30,

    },

    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },

    image: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 10,
    },

    title: {
        marginLeft: 16,
        fontSize: 24,
        fontFamily: 'Roboto',
        color: 'white'
    },

    listContainer: {
        marginTop: 20
    },
    separator: {
        height: 3,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor:'#9C654C'
    }
    
});