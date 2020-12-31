import React from 'react';
import { View, Text, StyleSheet ,FlatList } from 'react-native';

const ListScreen = () => {   

    const friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
        {name: 'Friend #8'},
        {name: 'Friend #9'},
    ];
//remove horizontal if u wanna scroll vertically
    return(
        <View>
          <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(friend) => friend.name }
            data={friends} 
            renderItem={({item})=>{
                return <Text style={styles.textStyle}> {item.name} </Text>
          }} />
        </View>

    );
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 40
    }
}); 

export default ListScreen;