
import React, {useState, useEffect} from 'react';
import {View, Text,Image,TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SecondScreen from './SecondScreen';
import FloatingActionButton from './widgets/FloatingActionButton';
import CustomButton  from "./widgets/CustomButton";
import { navigationOptions, styles } from './styles/FirstScreenStyle';

function HomeScreen({navigation}) {
    const [textValue, setTextValue]= useState<string>('');
    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = () => {
        const nextValue: number = counter + 1;
        setCounter(nextValue);
    }

    const decrementCounter = () => {
        const nextValue: number = counter - 1;
        setCounter(nextValue);
    }
 
    const clearTextController = () => {
        setTextValue("");
    };

    return (
        <ScrollView style = {styles.container}>
            <View style={styles.images}>
            <Image 
                style = {styles.image}
                source={require('./assets/react-logo.png')}
                resizeMode="contain"
                />
                <Image
                 style ={styles.image}
                 source ={require('./assets/react-logo.png')}
                 resizeMode= "contain"
                 />
            </View>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setTextValue(text)}
                placeholder= "Type something"
                value={textValue}
                maxLength={255}
            />
            <Text
                style={styles.text}>
                {textValue.length}/255
            </Text>
            <View style={styles.buttons}>
                <CustomButton title='Clear' onPress={clearTextController}/>
                <TouchableOpacity
                    style ={ styles.secondScreenBtn }
                    onPress={() => navigation.navigate('Second Screen')}
                    >
                    <ScrollView horizontal={true}>
                        <Text numberOfLines={1} style = { styles.secondScreenBtnText}>
                            Second Screen
                        </Text>
                    </ScrollView>
                </TouchableOpacity>
            </View>
            <View style={styles.separator}/>
            <View style={styles.floationgActionButtons}>
                    <FloatingActionButton 
                        onPress={decrementCounter}
                        icon = "-"
                        style={styles.decrementButton}
                    />
                    <Text style={ styles.floatingActionBtnsText
                    }>
                        {counter}
                    </Text>
                    <FloatingActionButton
                        onPress={incrementCounter}
                        icon="+"
                        style={styles.incrementButton}
                    />
            </View>
            <Text style={styles.calculatorText}>You have pushed the button this many times</Text>
        </ScrollView>
    );
}


const Stack = createNativeStackNavigator();

function MainApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name='First Screen'
                component={HomeScreen}
                options ={navigationOptions}
                 />
                <Stack.Screen 
                name= 'Second Screen' 
                component={SecondScreen}
                options={navigationOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainApp;