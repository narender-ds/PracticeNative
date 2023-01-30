import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './DrawerScreens/HomeScreen';
import SearchIndex from './DrawerScreens/SearchIndex';
import ListScreen from './DrawerScreens/ListScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import { StyleSheet } from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SearchIndexStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SearchIndex"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        fontWeight: 'bold',
      }}>
      <Stack.Screen
        name="SearchIndex"
        component={SearchIndex}
        options={{
          title: 'SearchIndex',
        }}
      />
    </Stack.Navigator>
  );
};

const ListScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ListScreen">
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          title: 'List',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const DrawerNavigationRouter = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'white',
        color: 'white',
        itemStyle: { marginVertical: 5, color: 'white' },
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{ drawerLabel: 'Home Screen' }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="SearchIndexStack"
        options={{ drawerLabel: 'SearchIndex' }}
        component={SearchIndexStack}
      />
        <Drawer.Screen
        name="ListScreenStack"
        options={{ drawerLabel: 'List Screen' }}
        component={ListScreenStack}
      />
    </Drawer.Navigator>
  );
};
const Styles = StyleSheet.create({
  
textt:{
  fontsize:20,
}
})
export default DrawerNavigationRouter;
