import React from 'react'
import {Text , StyleSheet , View, FlatList} from 'react-native'



const ListScreen = () =>{
const friends =[
		{name:'Friend #1',age:21},
		{name:'Friend #2',age: 22},
		{name:'Friend #3',age: 23},
		{name:'Friend #4',age: 24},
		{name:'Friend #5',age: 25},
	];
	return(
		<FlatList 
			data={friends} 
			keyExtractor ={(friend) => friend.name}
			renderItem={({item})=>{
				return <Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>
			}}
		/>
		);
}

const styles = StyleSheet.create({
	textStyle:{
		marginVertical:50
	}
});

export default ListScreen;