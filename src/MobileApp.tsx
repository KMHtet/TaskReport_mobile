import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MobileProvider } from './utils';

interface MobileAppProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const MobileApp = React.memo<MobileAppProps>(props => {
  const { children } = props;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MobileProvider
        backgroundColor="white">
        {children}
      </MobileProvider>
    </GestureHandlerRootView>
  );
});

MobileApp.displayName = 'MobileApp';
