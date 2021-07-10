import { StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStack, ProfileStack, SearchStack} from "./AppStack";

const AppTabs = (props) => {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "home";
                    
                    if(route.name === 'Home') {
                    }
                    else if (route.name === 'Profile') {
                        iconName = 'contacts';
                    } else if (route.name === 'Search') {
                        iconName = "search-web";
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
                }
            })} >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
            <Tab.Screen name="Search" component={SearchStack} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AppTabs;
