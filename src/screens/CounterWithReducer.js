import React,{useReducer} from 'react'
import {Text,View,StyleSheet,SafeAreaView,Button} from 'react-native'

const reducer=(state,action)=>{
	return state.counter+action.payload < 0 ? state : {...state,counter:state.counter+action.payload}
}
const CounterWithReducer=()=>{
	const[state,dispatch] = useReducer(reducer,{counter:0});
	const {counter} = state;
	return(
		<SafeAreaView>
			<View>
				<Text>{counter}</Text>
				<Button onPress={()=>dispatch({payload:1})} title="Increase"/>
				<Button onPress={()=>dispatch({payload:-1*1})} title="Decrease"/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({});

export default CounterWithReducer;