import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
 
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageComponent from './Components/ImageComponent';
 
const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRouter'
        ),
      );
    }, 2000);
  }, []);
 
  return (
    <View style={styles.container}>
     
      <ImageComponent
           imagesource={require('../Image/aboutreact.png')}
           style={styles.img}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3DA4A2',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  }, 
  img:{
    width: 150, 
    resizeMode: 'contain', 
    margin: 15
  }
});