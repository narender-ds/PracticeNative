import { useNavigation } from '@react-navigation/native';
import react, { useState, createRef } from 'react';
import {
   View, StyleSheet, Text, Image, ScrollView, Button, TextInput, Keyboard,
   TouchableOpacity, Alert,
} from 'react-native';
import ImageComponent from './Components/ImageComponent';
import TouchableOpacityComponent from './Components/TouchableOpacityComponent';
import TextComponent from './Components/TextComponent';
import TextInputComponent from './Components/TextInputComponent';

const Register = () => {
   const Navigation = useNavigation();
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [password, setPassword] = useState('')
   const [confirm_password, setConfirm_Password] = useState('')
   const [errortext, setErrortext] = useState('');

   // const [validEmail,setvalidEmail] = useState('false')
   const nameRef = createRef();
   const emailRef = createRef();
   const phoneRef = createRef();
   const passwordRef = createRef();
   const Confirm_passwordRef = createRef();
   const validate = () => {
      // console.log(text);
      setErrortext('');
      if (!name.trim()) {
         Alert.alert("Register", 'Please Enter Your Name',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return;
      }

      if (!email.trim()) {
         Alert.alert("Register", 'Please Enter Your Email',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return;
      }

      if (!phone.trim()) {
         Alert.alert("Register", 'Please Enter Your Phone No.',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return;
      }

      if (!password.trim()) {
         Alert.alert("Register", 'Please Enter Your Password',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return;
      }

      if (!confirm_password.trim()) {
         Alert.alert("Register", 'Please Enter Confirm Password',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return;
      } {
         // alert('Empty fields are not allowed');


      } if (password !== confirm_password) {
         Alert.alert("Register", 'Password and Confirm Password Must Be same',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]);
         setName('')
         setEmail('')
         setPhone('')
         setPassword('')
         setConfirm_Password('')
      }

      let nameReg = /^[a-zA-Z ]{2,30}$/;
      let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      let phoneReg = /^[0]?[789]\d{9}$/;

      if (nameReg.test(name) === false) {
         Alert.alert("Register", 'Name is Not Valid',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return false;
      }

      if (emailReg.test(email) === false) {
         Alert.alert("Register", 'Email is Not Valid',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return false;
      }


      if (phoneReg.test(phone) === false) {
         Alert.alert("Register", 'Phone NO. is Not Valid',
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => console.log("Cancel Pressed") }
            ]); return false;
      }


      else {
         submit();
      }

   }
   const submit = () => {

      Alert.alert("Register", " Name:" + name + "Email:" + email + "\n" + "Phone:" + phone + "password:" + password + "\n" + "Confirm Password:" + confirm_password,
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            { text: "OK", onPress: () => { Navigation.navigate('Login', { email: email, }) } }
         ]);
      setName('')
      setEmail('')
      setPhone('')
      setPassword('')
      setConfirm_Password('')
   };

   // props.navigate("Login");



   return (
      <View style={{ flex: 1, backgroundColor: '#3DA4A2' }}>
         <ScrollView >

            <View style={styles.container}>
               <TextComponent 
               textbody={styles.txtbody} 
               Text={'Register'} />
               <View>

                  <ImageComponent imagesource={require('../assets/image/logo.png')} 
                        style={styles.imgstyle}
                  />

               </View>

               <View>
                  <Text style={styles.textlabel}>Name</Text>
               </View>

               <TextInputComponent
                  input={styles.inputStyle}
                  placeholder={'Name'}
                  value={name}
                  onChangeText={(name) => setName(name)}
               />

               <View>
                  <Text style={styles.email}>Email</Text>
               </View>
               <TextInputComponent
                  input={styles.inputStyle}
                  placeholder={'Email'}
                  value={email}
                  onChangeText={(email) => setEmail(email)}
               />

               <View>
                  <Text style={styles.textlabel}>Phone</Text>
               </View>
               <TextInputComponent
                  input={styles.inputStyle}
                  placeholder={'Phone'}
                  value={phone}
                  onChangeText={(phone) => setPhone(phone)}
               />

               <View>
                  <Text style={styles.Pass}>Password</Text>
               </View>
               <TextInputComponent
                  input={styles.inputStyle}
                  placeholder={'Password'}
                  value={password}
                  onChangeText={(password) => setPassword(password)}
                  secureTextEntry={true}

               />
               <View>
                  <Text style={styles.confirmPass}>Confirm_Password</Text>
               </View>

               <TextInputComponent
                  input={styles.inputStyle}
                  placeholder={'Confirm password'}
                  value={confirm_password}
                  onChangeText={(confirm_password) => setConfirm_Password(confirm_password)}
                  secureTextEntry={true}
               />

               {errortext != '' ? (
                  <Text style={styles.errorTextStyle}>
                     {errortext}
                  </Text>
               ) : null}
               <TouchableOpacityComponent
                  onPress={validate}
                  title={'Register'}
                  button={styles.registerButtonStyle}

               />

            </View>


         </ScrollView>
      </View>

   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

   },
   txtbody:{
      fontFamily:'foundation',
      fontSize:30,
      color:'orange'
   },
   inputStyle: {
      width: 250,
      height: 50,
      padding: 10,
      marginTop: 27,
      marginBottom: 10,
      backgroundColor: '#e8e8e8',
      fontWeight: 'bold',
      borderRadius:15,
     

   },
   textTitle: {
      fontFamily: 'foundation',
      fontSize: 40,
      marginVerticle: 10,
      //   color:'#DCE775'
   },
   textbody: {
      fontFamily: 'foundation',
      fontSize: 16
   },
   input: {
      width: 250,
      height: 60,
      padding: 10,
      marginTop: 25,
      marginBottom: 5,
      backgroundColor: '#e8e8e8',
      color: 'black',
      // borderRadius:20,
      borderWidth: '2px',
      marginVertical:'3px',
      marginBottom:'10px',
      paddingLeft:'65px',
      paddingRight:'55px',
      fontSize:'16px',



   },
   
   textlabel: {
      fontFamily: 'bold',
      fontSize: 20,
      position: 'absolute', right: 65,
      color: 'black',


   },
   email: {
      fontFamily: 'bold',
      fontSize: 20,
      position: 'absolute', right: 70,
      color: 'black',


   },
   confirmPass: {
      fontFamily: 'bold',
      fontSize: 20,
      position: 'absolute', right: -44,
      color: 'black',

   },
   Pass: {
      fontFamily: 'bold',
      fontSize: 20,
      position: 'absolute', right: 35,
      color: 'black',

   },
   registerButtonStyle: {
      backgroundColor: '#8A13F4',
      justifyContent: 'center',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#DE824E',
      width: 100,
      height: 40,
      alignItems: 'center',
      borderRadius: 5,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
   },
     imgstyle:{
      width:120,
      height:120,
      borderRadius:90,


   }

});
export default Register;