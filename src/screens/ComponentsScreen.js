import React from "react";  
import {Text , StyleSheet , View} from 'react-native';


const Component = () =>{
     const name = "Lovedeep";
   return <View>
        <Text style={styles.Heading}>Getting started with React Native</Text>
        <Text style={styles.Heading2}>My name is {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    Heading :{
        fontSize:45
    },
    Heading2:{
        fontSize:20
    }

})
export default Component;