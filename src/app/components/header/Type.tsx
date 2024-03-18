import { BaseProps, TransferData } from '@components/Type';
import {ReactNode} from 'react';
import {TextProps, TextStyle, ViewStyle} from 'react-native';
import {LinearGradientProps} from 'react-native-linear-gradient';

export type ElementType = JSX.Element | JSX.Element[] | ReactNode;

export interface HeaderSimpleProps extends BaseProps {
  isIconLeft?: boolean;
  iconLeft?: string;
  iconLeftStyle?: ViewStyle;
  iconLeftProps?: any;
  onPressIconLeft?: (data?: TransferData) => void | Promise<void>;
  title?: string;
  titleStyle?: TextStyle;
  titleProps?: TextProps;
  containerStyle?: ViewStyle;
  centerStyle?: ViewStyle;
  containerProps?: LinearGradientProps;
  iconRight?: string;
  iconRightStyle?: ViewStyle;
  iconRightProps?: any;
  onPressIconRight?: (data?: TransferData) => void | Promise<void>;
}
export interface HeaderProps extends HeaderSimpleProps {
  leftElement?: ElementType;
  topElement?: ElementType;
  centerElement?: ElementType;
  rightElement?: ElementType;
  bottomElement?: ElementType;
}

export interface CustomHeaderProps {
  title?: string;
}
