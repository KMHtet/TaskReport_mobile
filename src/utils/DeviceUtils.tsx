import {
    Dimensions,
    Keyboard,
    LayoutAnimation,
    NativeModules,
    Platform,
    StatusBar,
  } from 'react-native';
  import DeviceInfo from 'react-native-device-info';

  const { StatusBarManager, AndroidSoftInputMode } = NativeModules;

  const iphonesWithNotch = [
    'iPhone10,3',
    'iPhone11,2',
    'iPhone11,4',
    'iPhone11,6',
    'iPhone11,8',
    'iPhone12,1',
    'iPhone12,3',
    'iPhone12,5',
    'iPhone12,8',
    'iPhone13,1',
    'iPhone13,2',
    'iPhone13,3',
    'iPhone13,4',
    'iPhone14,2',
    'iPhone14,3',
    'iPhone14,4',
    'iPhone14,5',
    'iPhone14,6',
    'iPhone14,7',
    'iPhone14,8',
    'iPhone15,2',
    'iPhone15,3'
  ];

  type AndroidSoftInputModeType = 'resize' | 'pan';

  export const DeviceUtils = {
    getDeviceDimension: () => {
      return Dimensions.get('window');
    },
    getDeviceHeight: () => {
      return Dimensions.get('window').height;
    },
    getDeviceWidth: () => {
      return Dimensions.get('window').width;
    },
    getStatusBarHeight: () => {
      return StatusBarManager.HEIGHT || StatusBar.currentHeight;
    },
    getAndroidAssetUrl: () => {
      return 'file:///android_asset/';
    },
    isIOS: () => {
      return Platform.OS === 'ios';
    },
    isAndroid: () => {
      return Platform.OS === 'android';
    },
    isTablet: () => {
      return DeviceInfo.isTablet();
    },
    isLandscape: (): boolean => {
      return DeviceInfo.isLandscapeSync();
    },
    dismissKeyboard: () => {
      Keyboard.dismiss();
      return false;
    },
    runWithLayoutAnimation: (callback: () => void) => {
      LayoutAnimation.configureNext(
        {
          duration: 200,
          create: {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
          },
          update: {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
          },
          delete: {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
          },
        },
        () => callback()
      );
    },
    setAndroidInputMode: (type?: AndroidSoftInputModeType) => {
      Platform.OS === 'android' && AndroidSoftInputMode.set(type);
    },
    isIphoneWithNotch: () => {
      return iphonesWithNotch.includes(DeviceInfo.getDeviceId())
    }
  };

  export default DeviceUtils;
