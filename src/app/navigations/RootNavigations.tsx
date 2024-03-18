import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from './ScreensRouter';
import { LightColor } from '../commons';
import { fs, ms, vs } from '@utils/ScaleUtils';
import { ImagesAsset } from '@assets';
import { DeviceUtils, navigationRef } from '@utils';
import { Image, Text, View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DATA_TAB_ADMIN = [
  {
    id: '01',
    colorUnTab: LightColor.colorA8A8A8,
    colorTab: LightColor.colorFF8D07,
    width: vs(17),
    height: vs(17),
    type: 'HomeScreen',
    label: 'Home',
    ic: ImagesAsset.home,
    ic_inactive: ImagesAsset.home_inactive,
  },
  {
    id: '05',
    colorUnTab: LightColor.colorA8A8A8,
    colorTab: LightColor.colorFF8D07,
    width: vs(17),
    height: vs(17),
    type: 'MoreScreen',
    label: 'More',
    ic: ImagesAsset.home,
    ic_inactive: ImagesAsset.home_inactive,
  },
];

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME_SCREEN.name}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SCREENS.HOME_SCREEN.name}
        component={SCREENS.HOME_SCREEN.component}
      />
    </Stack.Navigator>
  );
};

const MoreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MORE_SCREEN.name}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SCREENS.MORE_SCREEN.name}
        component={SCREENS.MORE_SCREEN.component}
      />
    </Stack.Navigator>
  );
};

const BOTTOM_NAVIGATOR_ADMIN = () => {

  const [isShowBottomTab, setIsShowBottomTab] = React.useState(true);

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME_SCREEN.name}
      screenOptions={({route, navigation}) => ({
        headerTintColor: '#fff',
        tabBarStyle: {
          paddingBottom: vs(
            DeviceUtils.isIphoneWithNotch()
              ? 15
              : 5,
          ),
          height: vs(DeviceUtils.isIphoneWithNotch() ? 70 : 60),
          transform: [{translateY: isShowBottomTab ? 0 : 100}],
        },
        tabBarVisibilityAnimationConfig: {
          show: {
            animation: 'timing',
            config: {
              duration: 300,
            },
          },
        },
        headerShown: false,
        gestureEnabled: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconTemp =
            DATA_TAB_ADMIN[
              DATA_TAB_ADMIN.findIndex(x => x.type == route.name)
            ];
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: ms(100),
              }}>
              <Image
                source={focused ? iconTemp.ic : iconTemp.ic_inactive}
                style={{
                  width: vs(iconTemp.width),
                  height: vs(iconTemp.height),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: fs(13),
                  fontWeight: '500',
                  color: focused ? '#FF8D07' : '#A8A8A8',
                  marginTop: vs(5),
                  textAlign: 'center',
                }}
                numberOfLines={1}>
                {iconTemp.label}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name={SCREENS.HOME_SCREEN.name} component={HomeStack} />
      <Tab.Screen
        name={SCREENS.MORE_SCREEN.name}
        component={MoreStack}
      />
    </Tab.Navigator>
  );
};

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
        <Stack.Screen
          name="BottomTabAdmin"
          component={BOTTOM_NAVIGATOR_ADMIN}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
