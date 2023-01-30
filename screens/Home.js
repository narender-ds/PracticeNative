import { useNavigation } from '@react-navigation/native';

import react, { useState } from 'react';
import {View, StyleSheet,Text ,Image ,ScrollView, Button,Dimensions, TextInput, Alert} from 'react-native';

const Show = () => {
 
    const Navigation=useNavigation();

    return (
        <ScrollView>
        <View>
<Text>Welcome</Text>

 <View style={{marginTop:20}}></View> 

<Image 

source={require('../assets/image/home.png')}  

style={{width: 100, height: 100, position: 'relative', left:146}} 

/>

     
      <Button  
      onPress={()=>Navigation.navigate("Register")}
       title="Go To Register"
       color="#2196F3" style={styles.buttonText} >
 
  </Button>
  </View>
  </ScrollView>
  );  
   
  };
  
  const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
      }
    
  });
  
  export default Show;
  