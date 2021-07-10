
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from "react-native";


const Stack = createStackNavigator();

const tabOptions = (props) => {
  return ({
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerLeft: () => {
      return(
      <TouchableOpacity onPress = {() => props.navigation.openDrawer()} >
        <MaterialCommunityIcons name={'menu'} size={30} />
      </TouchableOpacity>
      );
    },
    gestureEnabled: false,
  });
};

const screenOptions = (props) => {
  return ({
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerLeft: () => {
      return(
      <TouchableOpacity onPress = {() => props.navigation.goBack()} >
        <MaterialCommunityIcons name={'arrow-left'} size={30} />
      </TouchableOpacity>
      );
    },
    gestureEnabled: false,
  });
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={(props) => tabOptions(props)}
      />
    </Stack.Navigator>  
  );
}

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={(props) => tabOptions(props)}
      />
    </Stack.Navigator>  
  );
}

const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search" >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={(props) => tabOptions(props)}
      />
    </Stack.Navigator>  
  );
}

const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={(props) => screenOptions(props)}
      />
    </Stack.Navigator>  
  );
}

export {HomeStack, ProfileStack, SearchStack, SettingsStack};
