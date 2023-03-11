import React from 'react';
import { Text, TouchableOpacity} from "react-native";
import { customButtonStyle } from '../styles/CustomButtonStyle';

export interface CustomButtonsProps {
    title: string;
    onPress: () => void;

}

const CustomButton  = (props: CustomButtonsProps) => {
    const {onPress, title} = props;
    return (
        <TouchableOpacity
        style ={ customButtonStyle.button}
        onPress={onPress}
        >
        <Text numberOfLines={1} style = { customButtonStyle.text }>
            {title}
        </Text> 
    </TouchableOpacity>
    );
}; 

export default CustomButton;
