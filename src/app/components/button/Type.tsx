import { BaseProps, TouchableProps } from '@components/Type';
import type {Key} from 'react';
import {ReactNode} from 'react';
import {ColorValue, ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps extends TouchableProps {
  discriminator?: 'ButtonProps';
  width?: Key;
  height?: Key;
  borderRadius?: number;
  titleStyle?: TextStyle;
  titleColor?: ColorValue;
  titleDisableColor?: ColorValue;
  titleProps?: any;
  onPress?: () => void;
  loading?: boolean;
  rightIcon?: any;
  leftIcon?: any;
}

export interface ButtonGroupProps extends BaseProps {
  containerStyle?: ViewStyle | TextStyle | ImageStyle;
  label?: string | JSX.Element | JSX.Element[] | ReactNode;
  labelStyle?: ViewStyle | TextStyle;
  labelProps?: any;
  iconFocusColor?: ColorValue;
  labelFocusColor?: ColorValue;
  selectMultiple?: boolean; 
  titleColor?: ColorValue;
  titleFocusColor?: ColorValue;
  titleDisableColor?: ColorValue;
  disableIndexs?: number[]; 
  currentIndexs?: number[]; 
  pressable?: boolean;
}

export interface ButtonViewProps extends ButtonProps {
  isOutline?: boolean;
}
