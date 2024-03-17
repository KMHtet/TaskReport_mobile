import React, { isValidElement } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image,
  Text,
} from 'react-native';
import { ImagesAsset } from '@assets';
import { ColorType, LightColor } from 'src/app/commons';
import { vs } from '@utils/ScaleUtils';
export const Button = (props: any) => {
  if (props.isHide) {
    return null;
  }
  const {
    disabled,
    style,
    width = 0,
    height = 0,
    color,
    borderRadius = 0,
    titleStyle,
    titleProps,
    titleColor,
    titleDisableColor,
    onPress,
    loading,
    rightIcon,
    leftIcon
  } = props;
  const stylesProps = StyleSheet.flatten<ViewStyle>(
    style as StyleProp<ViewStyle>,
  );
  const textColor = disabled ? titleDisableColor : titleColor;
  const colors = LightColor as ColorType;
  const styleButton = () => {
    return {
      ...stylesProps,
      width: width ? width : stylesProps?.width,
      height: height ? height : stylesProps?.height,
      borderRadius: borderRadius ? borderRadius : stylesProps?.borderRadius,
      backgroundColor: disabled
        ? "#f2a580"
        : color
          ? color
          : stylesProps?.backgroundColor,
      borderColor: disabled
        ? colors.colorCBD5E1
        : color
          ? color
          : stylesProps?.borderColor,
      alignItems: 'center',
    } as ViewStyle;
    // }
  };

  const titlePropsValue = () => {
    if (titleProps && titleProps?.style) {
      if (titleStyle) {
        return {
          ...titleProps,
          style: {
            ...(titleProps?.style as TextStyle),
            ...(titleStyle as TextStyle),
          },
        };
      } else {
        return titleProps;
      }
    } else {
      return { style: titleStyle };
    }
  };
  if (isValidElement(props.children)) {
    return (
      <TouchableOpacity style={styleButton()} onPress={onPress}>
        {props.children}
      </TouchableOpacity>
    );
  } else {
    if (typeof props.children === 'string') {
      return (
        <TouchableOpacity
          style={styleButton()}
          activeOpacity={disabled ? 1 : 0}
          onPress={disabled ? undefined : onPress}>
          {(loading && <ActivityIndicator color={textColor} />) || (

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {rightIcon ? (
                <Image source={rightIcon} style={{ height: vs(20), width: vs(20), resizeMode: 'contain', marginRight: vs(10) }} />
              ) : null}
              <Text
                {...titlePropsValue()}
                color={disabled ? colors.white : textColor}>
                {props.children}
              </Text>
              {leftIcon ? (
                <Image source={ImagesAsset.submit} style={{ height: vs(20), width: vs(20), resizeMode: 'contain', marginLeft: vs(10) }} />
              ) : null}
            </View>
          )}
        </TouchableOpacity>
      );
    } else {
      return <>{props.children}</>;
    }
  }
};
