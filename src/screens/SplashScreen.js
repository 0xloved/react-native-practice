import React from 'react'
import {Text,View,StyleSheet,SafeAreaView } from 'react-native'

const SplashScreen=({navigation})=>{
	
	setTimeout(()=>{
		navigation.navigate("Home");
	},1000);

	return(
			<SafeAreaView>
				<View>
					<Text>Spalsh Screen</Text>
				</View>
			</SafeAreaView>
		)
}

const styles = StyleSheet.create({});

export default SplashScreen;