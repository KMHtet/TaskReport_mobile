import React from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import type { BaseScreenProps } from './Type';
import { DeviceUtils, goBack } from '@utils';
import { vs } from '@utils/ScaleUtils';
import { HeaderView } from '@components/header';

export const BaseScreen: React.FC<BaseScreenProps> = props => {
  const {
    isBackHide,
    style,
    isHeaderHide,
    backgroundColor,
    children,
    onPressIconLeft,
    isUnScroll,
    customHeader,
    bodyStyle,
    useView,
    paddingBottom,
    paddingTop,
    scrollViewProps,
    title,
    iconRight,
    iconRightProps,
    iconRightStyle,
    onPressIconRight,
    isImageHeaderLarge,
  } = props;
  const insets = useSafeAreaInsets();

  const handlePressIconLeft = () => {
    if (onPressIconLeft) {
      onPressIconLeft();
      return;
    }
    goBack();
  };

  return (
    <SafeAreaProvider
      style={[
        {
          ...styles.container,
          ...style,
          backgroundColor,
          paddingBottom: paddingBottom ?? insets.bottom,
        },
        isHeaderHide && { paddingTop: paddingTop ?? insets.top },
      ]}
      initialMetrics={initialWindowMetrics}>
        <StatusBar
          translucent={true}
          {...props}
          backgroundColor={'transparent'}
        />

        <View style={{ width: DeviceUtils.getDeviceWidth() }}>
          <HeaderView
            isHide={isHeaderHide}
            isIconLeft={!isBackHide}
            iconRight={iconRight}
            onPressIconRight={onPressIconRight}
            iconRightStyle={iconRightStyle}
            iconRightProps={iconRightProps}
            {...props}
            children={customHeader}
            onPressIconLeft={handlePressIconLeft}
            title={title}
          />
        </View>

        {useView ? (
          <View
            style={{
              ...styles.bodyStyle,
              ...bodyStyle,
            }}>
            {children}
          </View>
        ) : (
          <KeyboardAwareScrollView
            scrollEnabled={!isUnScroll}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}
            contentContainerStyle={{
              ...styles.bodyStyle,
              ...bodyStyle,
            }}
            extraHeight={vs(0)}
            enableOnAndroid={true}
            keyboardOpeningTime={100}
            {...scrollViewProps}>
            {children}
          </KeyboardAwareScrollView>
        )}
    </SafeAreaProvider>
  );
};

export default BaseScreen;

const styles = StyleSheet.create({
  container: {},
  bodyStyle: {
    flexGrow: 1,
  },
});
