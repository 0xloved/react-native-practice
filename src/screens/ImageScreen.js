import React from 'react'
import {Text , View , StyleSheet , FlatList} from'react-native'
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () =>{
	return(
			<View style={styles.div}>
				<ImageDetail 
					title="Beach"
				   	image={require("../../assets/beach.jpg")}
				   	score='1'
			   	/>
				<ImageDetail 
					title="Forest" 
					image={require("../../assets/forest.jpg")}
				   	score='2'
				/>
				<ImageDetail 
					title="Mountain" 
					image={require("../../assets/mountain.jpg")}
				   	score='3'
				/>
			</View>
		);
}

const styles = StyleSheet.create({
	div:{
		margin:10,
		background:'#fff',
	},
});

export default ImageScreen;