import { Key, ReactNode } from "react";
import { ColorValue, Falsy, ImageStyle, PressableProps, TextStyle, ViewStyle } from "react-native";

export type BaseProps = {
    isHide?: boolean;
    id?: BaseObject;
    data?: BaseObject;
    onPress?: (data?: TransferData) => void | Promise<void> | RegExp | Falsy;
    children?: JSX.Element | JSX.Element[] | ReactNode;
    color?: ColorValue;
    focusColor?: ColorValue;
    disableColor?: ColorValue;
    style?:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | (ViewStyle | TextStyle | ImageStyle)[];
    disableStyle?:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | (ViewStyle | TextStyle | ImageStyle)[];
    focusStyle?:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | (ViewStyle | TextStyle | ImageStyle)[];
};

export type BaseObject =
    | Key
    | Record<Key | symbol, ResourceKey>
    | ColorValue
    | object
    | [];

export interface ResourceKey {
    [key: Key | symbol]: BaseObject;
}

export interface TransferData<I = unknown, D = unknown> extends BaseData<I, D> {
    index?: string | number;
    routeName?: string | object;
    preRouteName?: string | object;
    isReload?: boolean;
}

export interface BaseData<I = unknown, D = unknown> {
    id?: BaseObject | I;
    data?: BaseObject | boolean | D;
}

export interface TouchableProps
  extends Omit<PressableProps, 'children' | 'onPress' | 'style'>,
    BaseProps {
  waitTime?: number;
  disabledStyle?: ViewStyle;
  pressableStyle?: ViewStyle;
}