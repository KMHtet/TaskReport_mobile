import React from "react";
import { ColorValue, ImageSourcePropType, KeyboardTypeOptions, ReturnKeyTypeOptions, TextInput } from "react-native";

export interface InputFieldProps {
    id: string;
    inputRef?: React.createRef<TextInput>;
    label?: string;
    placeholder?: string;
    value?: string;
    maxLength?: number;
  
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    returnKeyType?: ReturnKeyTypeOptions;
    styleComponent?: any;
    styleLabel?: any;
    styleInput?: any;
    placeholderTextColor?: any;
    styleErrorMessage?: any;
  
    iconLeft?: ImageSourcePropType;
    iconLeftSize?: number;
    iconLeftColor?: ColorValue;
    iconLeftStyle?: any;
    iconLeftRoundStyle?: any;
    onLeftPress?: () => void;
  
    iconRight?: string;
    iconRightSize?: number;
    iconRightColor?: ColorValue;
    iconRightStyle?: any;
  
    error?: boolean;
    multiline?: boolean;
    errorMessage?: string;
    touched?: boolean;
    editable?: boolean;
    require?: boolean;
    textRight?: string;
    styleTextRight?: any;

    autoFocus?: boolean;
  
    onChangeText?: (text: string) => void;
    onBlur?: () => void;
    onSubmitEditing?: () => void;
    onRightPress?: () => void;
    onFocus?: () => void;
  }