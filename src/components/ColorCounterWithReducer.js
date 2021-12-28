import React from 'react'
import {Text , View , StyleSheet , FlatList, Image, Button} from'react-native'


const ColorCounterWithReducer = ({color,onIncrease,onDecrease}) =>{
	return(
			<View>
				<Text>{color}</Text>
				<Button onPress={()=>onIncrease()} title={`Increase ${color}`}/>
				<Button onPress={()=>onDecrease()} title={`Decrease ${color}`}/>
			</View>
		);
}

const styles = StyleSheet.create({});

export default ColorCounterWithReducer;