import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, SafeAreaView,StyleSheet } from 'react-native';
import TextComponent from '../Components/TextComponent';
import { useEffect } from 'react/cjs/react.production.min';




const HomeScreen = () => {
  // const [useremail,setuseremail] = useState('')
  // useEffect={props.navigation.navigate('useremail')}
  const route = useRoute();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
       <TextComponent  textbody={styles.text} Text={'Welcome'} />

            {'\n\n'}

          </Text>
        </View>
        {/* <ClickComponent title={"login"} shubham={styles.pataka}/>
        <ClickComponent title={"register"} shubham={styles. nar} /> */}
        {/* <ImageComponent path={require('../Image/login.png')}/> */}
   
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>

        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.nsr.com
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  text: {
    fontFamily: 'foundation',
    fontSize: 40,
    marginVerticle: 10,
    color:'lightblue'
 },
})
export default HomeScreen;