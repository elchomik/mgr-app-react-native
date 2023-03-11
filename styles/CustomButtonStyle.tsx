import {StyleSheet} from 'react-native';

export const customButtonStyle = StyleSheet.create({
    button: {
        backgroundColor: '#95B1B0',
        width: 140, 
        height: 50,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        textAlign:'center',
        color: '#fff',
        fontSize: 16,
        justifyContent: 'center',
        marginTop: 12,
        paddingTop:2,
}
});