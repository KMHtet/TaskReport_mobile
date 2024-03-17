import React, { useRef } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputFieldProps } from "./Types";
import { fs, ms, vs } from "@utils/ScaleUtils";
import { DeviceUtils } from "@utils";
import { ColorType, LightColor } from "src/app/commons";

export const InputField = (props: InputFieldProps) => {
    const {
        id,
        label,
        placeholder,
        value,
        maxLength,
        secureTextEntry,
        keyboardType,
        returnKeyType,
        styleComponent,
        styleErrorMessage,
        styleInput,
        placeholderTextColor,
        styleLabel,
        iconLeft,
        onLeftPress,
        iconLeftSize = 0,
        iconLeftRoundStyle,
        iconLeftColor,
        multiline = false,
        iconRight,
        iconRightSize = 0,
        iconRightColor,
        iconRightStyle,
        error,
        errorMessage,
        touched,
        onChangeText,
        onBlur,
        onSubmitEditing,
        onFocus,
        inputRef,
        onRightPress,
        editable = true,
        autoFocus = false,
        require = false,
        textRight,
        styleTextRight,
    } = props;

    const colors = LightColor as ColorType;

    const textInputRef = useRef(null);

    return (
        <>
            <View style={styleComponent || styles.background}>
                {iconLeft && (
                    <TouchableOpacity style={iconLeftRoundStyle || null} onPress={onLeftPress}>
                        <Image
                            source={iconLeft}
                            style={[styles.iconLeft]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
                <TextInput
                    ref={inputRef}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : colors.color979797}
                    style={styleInput}
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={maxLength}
                    returnKeyType={returnKeyType}
                    keyboardType={keyboardType}
                    value={value}
                    autoFocus={autoFocus}
                    onFocus={onFocus}
                    secureTextEntry={secureTextEntry}
                    onBlur={onBlur}
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={false}
                    editable={editable}
                    numberOfLines={1}
                    multiline={multiline}
                />
                {require && (
                    <Text style={{ color: 'red', fontSize: fs(25), paddingRight: iconRight ? vs(0) : vs(20) }}>*</Text>
                )}
                {iconRight && (
                    <TouchableOpacity onPress={onRightPress}>
                        <Image
                            source={iconRight}
                            style={[styles.iconRight, iconRightStyle]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
};

const colors = LightColor as ColorType;
const styles = StyleSheet.create({
    iconRight: {
        width: vs(18),
        height: vs(18),
        marginHorizontal: vs(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        width: DeviceUtils.getDeviceWidth() - vs(40),
        backgroundColor: colors.white,
        flexDirection: 'row',
        height: vs(45),
        borderRadius: vs(16),
        marginVertical: vs(8),
        alignItems: 'center',
        borderColor: colors.colorCBCBCB,
        borderWidth: ms(1)
    },
    errorMessage: {
        lineHeight: vs(16),
        color: colors.red,
    },
    iconLeft: {
        width: vs(18),
        height: vs(18),
        marginHorizontal: vs(10),
        justifyContent: 'center',
    },
});