import React from 'react'
import {useState ,useEffect} from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'

const Counter = () =>{

	const [count, setCount] = useState(1);

	const increase =()=>{
		// console.log(count)
		// let nowCount = count;
		setCount(count + 1);
	}
	const decrease =()=>{
		// console.log(count)
		if(count>1){
				// let nowCount = count;
				setCount(count - 1	);
		}else{
			console.log('stop');
		}
	}

	return(
			<View>
				<Text>{count}</Text>
				<Button onPress={()=>increase()} title=" + Increase"/>
				<Button onPress={()=>decrease()} title=" - Decrease"/>
			</View>
		);
}

const styles = StyleSheet.create({

});

export default Counter;