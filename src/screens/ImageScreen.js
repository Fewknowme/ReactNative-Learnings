import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import ImageDetail from './../Components/ImageDetail';

const ImageScreen = () => {

    return(
    <View>
        <ImageDetail 
        title={"forest"} 
        ImageSource={require('./../../assets/forest.jpg')}
        imgScore = {"7"}
        />
        <ImageDetail 
        title={"beach"} 
        ImageSource={require('./../../assets/beach.jpg')}
        imgScore = {"9"}
        />
        <ImageDetail 
        title={"fountain"} 
        ImageSource={require('./../../assets/mountain.jpg')}
        imgScore = {"4"}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ImageScreen;