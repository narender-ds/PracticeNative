import React from 'react';
import {View, Text, Alert, StyleSheet, LogBox} from 'react-native';
 
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
 
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageComponent from '../Components/ImageComponent';
 
const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        {/* <View style={stylesSidebar.profileHeaderPicCircle}> */}
        <View>

{/* <ImageComponent 
   imagesource={require('../assets/image/download.png')}
style={styles.profileHeaderPicCircle} /> */}

</View>
          {/* <Text style={{fontSize: 40, color: '#3DA4A2'}}>
            {'About App'.charAt(0)}
          </Text> */}
        {/* </View> */}
        <Text style={stylesSidebar.profileHeaderText}>
        About App
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
 
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
            <Text style={{color: 'White' , fontSize: 18}}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};
 
export default CustomSidebarMenu;
 
const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3DA4A2',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#3DA4A2',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize:15
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});
