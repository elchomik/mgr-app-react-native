
import * as React from 'react';
import { useState } from 'react';
import {View, Text,Image, FlatList} from 'react-native';
import { styles } from './styles/FirstScreenStyle';
import { listStyles } from './styles/SecondScreenStyle';
import CustomButton from './widgets/CustomButton';


interface DataItem {
    title: string;
}

function SecondScreen(): JSX.Element {

    const data: DataItem[] = Array.from(Array(1000).keys()).map((index) => ({
        title: index.toString()
    }));

    const [currentData, setCurrentData] = useState<DataItem[]>(data);

    const defaultSort = () => {
        setCurrentData(data.sort((a,b) => a.title.localeCompare(b.title)));
    };

    const reverseSort = () => {
        setCurrentData(data.sort((a,b) => b.title.localeCompare(a.title)));
    };

    const renderItem = ({item}) => (
        <View style={listStyles.item}>
            <Image
                 style ={listStyles.image}
                 source ={require('./assets/react-logo.png')}
                 resizeMode= "contain"
                 />
                 <Text style={listStyles.title}>{"Item " +item.title}</Text>
        </View>
    );

    const renderSeparator = () => <View style={listStyles.separator}/>;

   
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <CustomButton title='Sort' onPress={defaultSort}/>
                <CustomButton title='Reverse' onPress={reverseSort}/>
            </View>
            <FlatList
            style={listStyles.listContainer}
            data={currentData}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
            />
       </View>
    );

}

export default SecondScreen;