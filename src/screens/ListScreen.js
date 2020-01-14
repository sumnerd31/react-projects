import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'friend #1', age: 20},
        {name: 'friend #2', age: 21},
        {name: 'friend #3', age: 22},
        {name: 'friend #4', age: 22},
        {name: 'friend #5', age: 24},
        {name: 'friend #6', age: 25},
        {name: 'friend #7', age: 26},
        {name: 'friend #8', age: 27},
        {name: 'friend #9', age: 28}
    ];
    
    return (
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({item}) => {
                return (
                <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
                </Text>
                )
            }} 
        />
    );
};
 
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;