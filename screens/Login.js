import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import react, { useState, createRef } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Keyboard, TouchableOpacity, Button, TextInput, Alert, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageComponent from './Components/ImageComponent';
import TextInputComponent from './Components/TextInputComponent';
import TouchableOpacityComponent from './Components/TouchableOpacityComponent';
import TextComponent from './Components/TextComponent';

//login function and states are sets here
const Login = (props) => {

   const route = useRoute();
   const Navigation = useNavigation();
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [errortext, setErrortext] = useState('');

   //validation function starts
   const validate = () => {
      setErrortext('');
      if (!email.trim()) {
         Alert.alert("Login ", 'Please Enter Your Email',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("OK Pressed") }
            ]); return;
      }

      if (!password.trim()) {
         Alert.alert("Login", 'Please Enter Your Password',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return;
      }
      //regex for validations
      let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (emailReg.test(email) === false) {
         Alert.alert("Login", 'Email is Not Valid',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return false;
      }

      //all validate conditions are fullfilled then else part will execute
      else {
         loginSubmit();
      }
   }
   //loginsubmit function for login
   const loginSubmit = () => {
      AsyncStorage.setItem('user', email);
      Alert.alert(
         "Login",
         "Email:" + email + " \n" + "Password:" + password,
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            { text: "OK", onPress: () => { Navigation.replace("DrawerNavigationRouter",) } }
         ]

      );
      setEmail('')
      setPassword('')

   }

   return (
      <View style={{ flex: 1, backgroundColor: '#3DA4A2' }}>
         <ScrollView >
            <View style={styles.container}>
               <View style={styles.textTitle}>
                 
               </View>
                     {/* <TextComponent  textbody={styles.txtbody} Text={'Login Here'} /> */}
               <View>

                  <ImageComponent 
                  imagesource={require('../assets/image/login.png')}
                  style={styles.imgstyle} />

               </View>
<View style={styles.Viewcss}>
               <TextInputComponent
                  input={styles.inputStyle}
                  placeholder={'email'}
                  value={email}
                  onChangeText={(email) => setEmail(email)}

               />

               <TextInputComponent
                  input={styles.inputStyle}
                  placeholder={'password'}
                  value={password}
                  onChangeText={(password) => setPassword(password)}
                  secureTextEntry={true}

               />

               {errortext != '' ? (
                  <Text style={styles.errorTextStyle}>
                     {errortext}
                  </Text>
               ) : null}
               <TouchableOpacityComponent
                  onPress={validate}
                  button={styles.LoginButtonStyle}
                  title={'LOGIN'}
                 

               />



               <Text
                  style={styles.registerTextStyle}
                  onPress={() => Navigation.navigate('Register')}>
                  New Here ? Register
               </Text>
               <Text
                  style={styles.registerTextStyle}
                  onPress={() => Navigation.navigate('practice')}>
                  For  ? Practice
               </Text>
</View>
            </View>






         </ScrollView>
      </View>
   );
};
//styles and css for  login page content
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundcolor: 'red'
   },

   txtbody: {
      fontFamily: 'foundation',
      fontSize: 25,
      color:'black'
   },

   LoginButtonStyle: {
      backgroundColor: '#8A13F4',
      justifyContent: 'center',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#DE824E',
      width: 100,
      height: 40,
      alignItems: 'center',
      borderRadius: 5,
      marginLeft: 75,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
   },
   registerTextStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'center',
      padding: 10,
   },
   errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
   },
   inputStyle: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8',
      fontWeight: 'bold'
   },
   button: {
      height: 50,
      width: 2,
      margin: 20,
      borderColor: 'black',
      
      alignItems: 'center'
   },
   imgstyle:{
      width:120,
      height:120,
      borderRadius:30,
      marginTop:60


   },
   Viewcss:{
      marginTop:80,

   }
});
export default Login;