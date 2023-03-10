import React from 'react';
import { Text, TouchableOpacity} from "react-native";

export interface CustomButtonsProps {
    title: string;
    onPress: () => void;

}

const CustomButton  = (props: CustomButtonsProps) => {
    const {onPress, title} = props;
    return (
        <TouchableOpacity
        style ={{
            // backgroundColor: '#286471',
            // backgroundColor:'#00a5cf',
            backgroundColor: '#00c4f5',
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
        }}
        onPress={onPress}
        >
        <Text numberOfLines={1} style = {{
                textAlign:'center',
                color: '#fff',
                fontSize: 16,
                justifyContent: 'center',
                marginTop: 12
        }}>
            {title}
        </Text> 
    </TouchableOpacity>
    );
}; 

export default CustomButton;
