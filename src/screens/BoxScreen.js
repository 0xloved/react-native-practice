import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const BoxScreen=()=>{
	return(
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>hello 1</Text>
			<Text style={styles.textStyle}>hello 2</Text>
			<Text style={styles.textStyle}>hello 3</Text>
		</View>
		)
}

const styles=StyleSheet.create({
	viewStyle:{
		borderWidth:3,
		borderColor:'black',
		// alignItems:'center'
		flexDirection:'row',
		justifyContent:'center'
	},
	textStyle:{
		borderWidth:1,
		borderColor:'red',
		margin:20
	}
});

export default BoxScreen;