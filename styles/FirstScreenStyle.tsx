
import {StyleSheet} from 'react-native';
import {NativeStackNavigationOptions } from '@react-navigation/native-stack';

const headerStyle = {
    backgroundColor: '#324B4B',
    height: 120,
};

 export const navigationOptions: NativeStackNavigationOptions = {
    headerStyle: {...headerStyle},
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle:{
    fontSize: 24,
    fontWeight: 'bold',
},
};

export const styles = StyleSheet.create({
    container: {
        paddingLeft: 2,
        paddingRight:2,
        backgroundColor: '#008080'
    },
    images: {
        paddingTop: 20,
        paddingLeft:20,
        paddingRight:20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    floationgActionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        alignContent: 'center'
    },

    incrementButton:{
        marginTop: 10,
        width: 56,
        height: 56,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#95B1B0',
        elevation: 8,
        marginRight: 50,
        shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
    },

    decrementButton: {
        marginTop: 10,
        width: 56,
        height: 56,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#95B1B0',
        elevation: 8,
        marginLeft: 50,
        shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
    },

    image:{
        width: 140,
        height: 140,
    },

    textInput:{
        marginTop:40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft:10,
        marginRight:10,
        height: 65,
        fontSize: 26,
        color: 'white'
    },
    text:{
        textAlign: 'right',
        paddingRight:11,
        fontSize: 14,
        marginTop: 2,
        color: 'white'
    },
    
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },

    secondScreenBtn: {
        backgroundColor:'#9C654C',
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

    secondScreenBtnText: {
        textAlign:'center',
        color: '#fff',
        fontSize: 16,
        justifyContent: 'center',
        marginTop: 12,
        marginLeft: 10,
        paddingTop: 2,
    },

    floatingActionBtnsText: {
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 56,
        color: 'white',
        //alignContent: 'center',
   },

    calculatorText: {
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'white'
    },

    separator: {
        height: 5,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#9C654C'
    }
});