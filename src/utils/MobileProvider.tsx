import React, { Fragment } from 'react';
import { StatusBar, View } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import DeviceUtils from './DeviceUtils';

export const MobileProvider = (props: any) => {
  const { children, i18next, theme, backgroundColor = 'green' } = props;
  if (!children) {
    return null;
  }
  return (
        <SafeAreaProvider
          style={{ backgroundColor: backgroundColor }}
          initialMetrics={initialWindowMetrics}
        >
          <StatusBar translucent backgroundColor={'transparent'} />
          <View
            style={{ flexGrow: 1 }}
            onStartShouldSetResponder={DeviceUtils.dismissKeyboard}
          >
            <Fragment>{children}</Fragment>
          </View>
        </SafeAreaProvider>
  );
};

export default MobileProvider;
