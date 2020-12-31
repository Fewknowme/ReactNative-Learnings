import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const HomeScreen = ({navigation}) => {
    return (
    <View> 

        <Text style = { styles.text } > Hello World! </Text>
        <Button 
        title="Go To Components Demo"
        onPress={()=> navigation.navigate('Components')}
        />
        <Button onPress={()=> navigation.navigate('List')}
         title="Go To List Demo"
         />   
    </View>
    )
    ;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;