import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTabs  from './AppTabs';
import {ProfileStack, SettingsStack}  from './AppStack';

const Drawer = createDrawerNavigator();

// todo: tabs header as nam arameter, insert drawer button there
const AppDrawer = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home" >
				<Drawer.Screen name="Home" component={AppTabs} />		
				<Drawer.Screen name="Profile" component={ProfileStack} />
				<Drawer.Screen name="Settings" component={SettingsStack} />
			</Drawer.Navigator>
		</NavigationContainer>

	);
}
export default AppDrawer;