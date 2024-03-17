import { DeviceUtils } from "@utils";
import { fs, ms, vs } from "@utils/ScaleUtils";
import { StyleSheet } from "react-native";
import { ColorType, LightColor } from "src/app/commons";

export const createStyles = (theme: any) => {

    const colors = LightColor as ColorType;

    const styles = StyleSheet.create({
        flex1: {
            flex: 1,
        },
        inputFieldContainer: {
            marginTop: DeviceUtils.getDeviceHeight() / 1.7,
            paddingHorizontal: vs(17),
        },
        btnLogin: {
            backgroundColor: colors.gold
        },
        styleComponent: {
            width: DeviceUtils.getDeviceWidth() - vs(40),
            backgroundColor: colors.white,
            flexDirection: 'row',
            height: vs(50),
            borderRadius: vs(25),
            marginVertical: vs(8),
            alignItems: 'center',
            borderColor: colors.white,
            borderWidth: ms(1)
        },
        iconLeftRound: {
            backgroundColor: colors.colorPrimary,
            marginLeft: vs(3),
            marginRight: vs(10),
            height: vs(44),
            width: vs(44),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: vs(22)
        },
        input: {
            color: colors.black,
            padding: vs(0),
            height: vs(30),
            flex: 1,
            fontSize: fs(20)
        },
    });

    return styles;
}