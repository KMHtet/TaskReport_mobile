import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from './ScreensRouter';
import { navigationRef } from './Helper';


const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SCREENS.LOGIN_SCREEN.name}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREENS.LOGIN_SCREEN.name}
          component={SCREENS.LOGIN_SCREEN.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
