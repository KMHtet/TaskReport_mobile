import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { HeaderProps } from './Type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ColorType, LightColor } from 'src/app/commons';
import { fs, vs } from '@utils/ScaleUtils';

const colors = LightColor as ColorType;

export const HeaderView = (props: HeaderProps) => {
  if (props.isHide) {
    return null;
  }
  const {
    isIconLeft = true,
    iconLeftStyle,
    iconLeftProps,
    // iconLeft = IconSvg.back,
    onPressIconLeft,
    iconRight,
    iconRightProps,
    iconRightStyle,
    onPressIconRight,
    children,
    title,
    titleStyle,
    titleProps,
    containerStyle,
    containerProps,
    centerStyle,
    leftElement,
    topElement,
    centerElement,
    rightElement,
    bottomElement,
  } = props;
  const insets = useSafeAreaInsets();
  const centerView = useMemo(() => {
    if (centerElement) {
      return centerElement;
    }

    return (
      <View
        style={{
          ...styles.titleContainer,
          marginLeft: isIconLeft ? 0 : vs(22),
          marginRight: iconRight ? 0 : vs(28),
        }}>
        <Text
          color={titleStyle?.color || 'white'}
          size={vs(20)}
          {...titleProps}
          style={{ ...styles.titleStyle, ...titleStyle }}>
          {title}
        </Text>
      </View>
    );
  }, [centerElement, titleProps, titleStyle, title]);

  return (
    <LinearGradient
      locations={[0, 0.5, 0.8]}
      colors={['transparent', 'transparent', 'transparent']}
      {...containerProps}
      style={{
        ...styles.container,
        ...containerStyle,
        paddingTop: insets.top,
      }}>
      {children ? (
        children
      ) : (
        <>
          {topElement}
          <View style={{ ...styles.headerStyle, ...centerStyle }}>
            <TouchableOpacity onPress={onPressIconLeft} style={{ justifyContent: 'center' , width: vs(50)}}>
              <Text>Back</Text>
            </TouchableOpacity>
            {leftElement}
            {centerView}
            {rightElement}
          </View>
          {bottomElement}
        </>
      )}
    </LinearGradient>
  );
};

export default HeaderView;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gold,
    minHeight: vs(60),
    overflow: 'hidden',
  },
  headerStyle: {
    overflow: 'hidden',
    flexDirection: 'row',
    paddingRight: vs(16),
    // alignSelf: 'baseline',
    // flex: 1,
    // marginTop: vs(16),
    // marginBottom: vs(14),
  },
  iconStyle: {
    alignSelf: 'center',
    width: vs(16),
    minHeight: vs(16),
    resizeMode: 'stretch',
    // backgroundColor: '#a35',
  },
  titleContainer: {
    flex: 1,
    minHeight: vs(60),
    // backgroundColor: '#a345',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
    lineHeight: vs(24),
    fontSize: fs(20),
    letterSpacing: -vs(0.41),
    color: 'white',
    // backgroundColor: '#456',
  },
  iconLeft: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    marginLeft: vs(22),
  },
  iconRight: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
    alignSelf: 'center',
    marginRight: vs(22),
  },
});
