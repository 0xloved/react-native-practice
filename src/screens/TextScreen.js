import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput} from 'react-native'

const TextScreen = () =>{
	const [name,setName] = useState('');

	// function setNameValue=()=>{

	// }
	return(
		<View style={styles.container}>
			<TextInput 
				style={styles.text}
				autoCorrect={false}
				autoCapitalize="none"
				value={name}
				onChangeText={newValue => setName(newValue)}
			/>
			<Text>My name is {name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		margin:5
	},
	text:{
		borderColor:'black',
		borderWidth:1,
	}
});

export default TextScreen;