import React,{useReducer} from 'react'
import {View, StyleSheet,Button,FlatList} from 'react-native'
import ColorCounterWithReducer from '../components/ColorCounterWithReducer'


const INCREASE_BY = 15;

const reducer =(state,action)=>{
	console.log(action)
	console.log(state)
	switch(action.type){
		case "change_red":
			return state.red+action.payload > 255 || state.red+action.payload < 0 
				? state 
				: {...state,red:state.red+action.payload}
		case "change_green":
			return state.green+action.payload > 255 || state.green+action.payload < 0 
				? state 
				: {...state,green:state.green+action.payload}
		case "change_blue":
			return state.blue+action.payload > 255 || state.blue+action.payload < 0 
				? state 
				: {...state,blue:state.blue+action.payload}
		default:
			return state;
	}
}

const SquareScreenWithReducer =()=>{

	const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
	const{red,green,blue} =state;
	return (
			<View>
				<ColorCounterWithReducer 
					onIncrease={()=> dispatch({type:'change_red',payload:INCREASE_BY})} 
					onDecrease={()=> dispatch({type:'change_red',payload:(-1*INCREASE_BY)})} 
					color="Red"
				/>
				<ColorCounterWithReducer 
					onIncrease={()=> dispatch({type:'change_green',payload:INCREASE_BY})} 
					onDecrease={()=> dispatch({type:'change_green',payload:(-1*INCREASE_BY)})} 
					color="Green"
				/>
				<ColorCounterWithReducer 
					onIncrease={()=> dispatch({type:'change_blue',payload:INCREASE_BY})} 
					onDecrease={()=> dispatch({type:'change_blue',payload:(-1*INCREASE_BY)})} 
					color="Blue"
				/>
				<View 
					style={{height:150,width:150,background:`rgb(${red},${green},${blue})`}}
				/>
			</View>
		)	
}

const styles = StyleSheet.create({});

export default SquareScreenWithReducer;