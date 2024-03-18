import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type BasePopupModalType = {
  isShow?: boolean;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  absIcon?: any;
  absBackgroundColor?: any;
  mainButtonTitle?: string;
  subButtonTitle?: string;
  mainButtonStyle?: StyleProp<TextStyle>;
  subButtonStyle?: StyleProp<TextStyle>;
  textButtonStyle?: StyleProp<TextStyle>;
  children?: string | React.ReactNode;
  contentStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  closeModal?: boolean;
  backModal?: boolean;
  handelBack?: () => void;
  colorClose?: string;
  hideHeader?: boolean;
  styleModel?: ViewStyle | TextStyle | ImageStyle;
  isScroll?: boolean;
  overLayClose?: boolean;
  onSubPress?: () => void;
  isCustom?: boolean;
  isCountdown?: boolean;
};
export type BasePopupModalRef = {
  show: (props?: BasePopupModalType) => void;
  close: () => void;
};
