import React from 'react'
import {useState ,useEffect} from 'react'
import {Text,View,StyleSheet,Button,FlatList} from 'react-native'

const ColorScreen = () =>{

	const [colors, setColors] = useState([]);

	const randomRGB =()=>{
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);

		return `rgb(${red},${green},${blue})`;
	}

	return(
			<View>
				<Button onPress={()=>setColors([...colors,randomRGB()])} title="Add Colour"/>
				<FlatList 
					data={colors} 
					keyExtractor ={(friend , index) => (friend+index)}
					renderItem={({item})=>{
						return <View style={{height:100 , width:100 , backgroundColor:item}} />
					}}
				/>
			</View>
		);
}

const styles = StyleSheet.create({});

export default ColorScreen;