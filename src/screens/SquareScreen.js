import React,{useState} from 'react'
import {View, StyleSheet,Button,FlatList} from 'react-native'
import ColorCounter from '../components/ColorCounter'


const INCREASE_BY = 15;

const SquareScreen =()=>{
	const[red,setRed] = useState(0);
	const[green,setGreen] = useState(0);
	const[blue,setBlue] = useState(0);

	const setColor =(color,change)=>{
		switch(color){
			case 'red':
				red+change > 255 || red+change < 0 ? null : setRed(red+change);
				return;
			case 'green':
				green+change > 255 || green+change < 0 ? null : setGreen(green+change);
				return;
			case 'blue':
				blue+change > 255 || blue+change < 0? null : setBlue(blue+change);
				return;
			default:
				return;
		}
	}
	return (
			<View>
				<ColorCounter 
					onIncrease={()=>setColor('red',INCREASE_BY)} 
					onDecrease={()=>setColor('red',-1*INCREASE_BY)} 
					color="Red"
				/>
				<ColorCounter 
					onIncrease={()=>setColor('green',INCREASE_BY)} 
					onDecrease={()=>setColor('green',-1*INCREASE_BY)} 
					color="Green"
				/>
				<ColorCounter 
					onIncrease={()=>setColor('blue',INCREASE_BY)} 
					onDecrease={()=>setColor('blue',-1*INCREASE_BY)} 
					color="Blue"
				/>
				<View 
					style={{height:150,width:150,background:`rgb(${red},${green},${blue})`}}
				/>
			</View>
		)	
}

const styles = StyleSheet.create({});

export default SquareScreen;