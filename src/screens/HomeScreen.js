import React from 'react';
import { Text, StyleSheet , View , Button,TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
          <View>
            <Text 
              style={styles.text}>
              HomeScreen
            </Text>
            <Button onPress={()=> navigation.navigate('Components')} title="Press Me"/>
            <Button onPress={()=> navigation.navigate('List')} title="Go to List"/>
            <Button onPress={()=> navigation.navigate('ImageScreen')} title="Image Screen"/>
            <Button onPress={()=> navigation.navigate('Counter')} title="Count Screen"/>
            <Button onPress={()=> navigation.navigate('Color')} title="Color Screen"/>
            <Button onPress={()=> navigation.navigate('Square')} title="Square Screen"/>
            <Button onPress={()=> navigation.navigate('SquareWithReducer')} title="Square Screen With Reducer"/>
            <Button onPress={()=> navigation.navigate('CounterReducer')} title="Counter With Reducer"/>
            <Button onPress={()=> navigation.navigate('Text')} title="Text Screen"/>
            <Button onPress={()=> navigation.navigate('Box')} title="Box Screen"/>
          </View>
        );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
