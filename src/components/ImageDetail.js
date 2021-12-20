import React from 'react'
import {Text , View , StyleSheet , FlatList, Image} from'react-native'


const ImageDetail = (props) =>{
	return(
			<View style={styles.div}>
				<Image source={props.image} style={{width: 50, height: 50}}/>
				<Text style={styles.product}>{props.title}</Text>
				<Text style={styles.product}>{props.score}</Text>
			</View>
		);
}

const styles = StyleSheet.create({
	div:{
		// padding:4,
		marginVertical:4,
		backgroundColor:'#427c956e',
		borderRadius:5,

	},
	product:{
		paddingLeft:8,
		paddingTop:4,
		paddingBottom:4,
		fontSize:20,

	}
});

export default ImageDetail;