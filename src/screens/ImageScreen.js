import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')} 
                score="Image score - 9"
            />
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')}
                score="Image score - 5"
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')}
                score="Image score - 3"
            />
        </View>
    )
}; 

const styles = StyleSheet.create({

})

export default ImageScreen;