
import {StyleSheet} from 'react-native';
import {NativeStackNavigationOptions } from '@react-navigation/native-stack';

const headerStyle = {
    // backgroundColor: '#08949F',
    backgroundColor: '#004e64',
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
        paddingLeft: 5,
        backgroundColor: 'teal'
        //backgroundColor: '#c2d6c2'
        // backgroundColor: '#A4c2a5'
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
        marginTop: 30,
        alignContent: 'center'
    },
    incrementButton:{
        width: 56,
        height: 56,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#08949F',
        // backgroundColor:'#00a5cf',
        backgroundColor: '#00c4f5',
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
        width: 56,
        height: 56,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#08949F',
        // backgroundColor:'#00a5cf',
        backgroundColor: '#00c4f5',
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
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 13,
        marginLeft:10,
        marginRight:10,
        height: 65,
        fontSize: 26,
    },
    text:{
        textAlign: 'right',
        paddingRight:11,
        fontSize: 14
    },
    
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },

    secondScreenBtn: {
        // backgroundColor: '#6996A0', 
        backgroundColor:'#ff7f11',
        width: 140, 
        height: 50,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
    },

    secondScreenBtnText: {
        textAlign:'center',
        color: '#fff',
        fontSize: 16,
        justifyContent: 'center',
        marginTop: 12,
        marginLeft: 13
    },

    floatingActionBtnsText: {
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 52,
        alignContent: 'center',
   },

    calculatorText: {
        marginTop: 15,
        paddingLeft:10,
        paddingRight: 10,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    counterText:{
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26,
        marginTop: 18,
    },

    separator: {
        height: 5,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor:'#ff7f11',
    }
});