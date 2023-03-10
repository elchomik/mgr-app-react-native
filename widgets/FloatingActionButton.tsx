import React from 'react';
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native';


const floatingButtonStyle = StyleSheet.create({
    icon: {
        fontSize: 30,
        color: 'white',
    },
});

const FloatingActionButton = ({onPress, icon, style}) => {
    return (
            <TouchableOpacity 
                style={style} 
                onPress ={onPress}
                >
                    <Text style={floatingButtonStyle.icon}>{icon}</Text>
                </TouchableOpacity>
    );
};

export default FloatingActionButton;

