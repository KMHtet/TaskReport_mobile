import {HeaderProps} from '@components/header/Type';
import {ReactNode} from 'react';
import {ColorValue, StatusBarStyle, ViewStyle} from 'react-native';

export * from '../touchable/Type';
export * from '../header/Type';
export * from '../iconView/Type';
export * from '../svg/Type';
export * from '../textView/Type';

export interface BaseScreenProps extends HeaderProps {
  isBackHide?: boolean;
  isUnScroll?: boolean;
  isHeaderHide?: boolean;
  bodyStyle?: ViewStyle;
  backgroundColor?: ColorValue;
  customHeader?: JSX.Element | JSX.Element[] | ReactNode;
  useView?: boolean;
  barStyle?: StatusBarStyle | null;
  scrollViewProps?: any;
  paddingBottom?: number | null;
  paddingTop?: number | null;
  title?: string;
  isImageHeaderLarge?: boolean;
}
