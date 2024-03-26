import React, { useRef } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, InputField, LogoAnimated } from '@components';
import { Formik } from 'formik';
import { ImagesAsset } from '@assets/images';
import { fs, ms, vs } from '@utils/ScaleUtils';
import { ColorType, LightColor } from 'src/app/commons';
import { DeviceUtils } from '@utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { navigateToRootAdmin } from '@navigations/ScreenNavigation';
import LoginVM from './LoginVM';

const LoginScreen = () => {

    const formRef = useRef(null);
    const phoneRef = useRef(null);
    const passwordRef = useRef(null);

    const [isSee, setSee] = React.useState<boolean>(false);

    const loginVM = LoginVM();

    const handleCheckAcc = (values: any) => {
        loginVM.login(values.phone, values?.pin, (data: any) => {
            onLoginSuccess(data);
        });
        
    };

    const onLoginSuccess = (data: any) => {
        if(data){
            navigateToRootAdmin();
        } else Alert.alert('fail');
    }

    const onSeePassword = () => {
        setSee(!isSee);
    };

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                flex: 1,
            }}>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={20}
                enableOnAndroid={true}
                scrollEnabled={false}
            >
                <LogoAnimated />
                <Formik
                    innerRef={formRef}
                    initialValues={{ phone: '', pin: '' }}
                    onSubmit={handleCheckAcc}
                    validateOnBlur
                    validateOnChange
                    validate={values => {
                        const errors: any = {};
                        if (values.phone.length <= 3) {
                            errors.phone = 'require phone';
                        }
                        console.log('kmh', 'have input errors', errors);
                        return errors;
                    }}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <>
                            <View />
                            <View style={styles.inputFieldContainer}>
                                <InputField
                                    id={'phone'}
                                    inputRef={phoneRef}
                                    placeholder={'Enter your mail'}
                                    onBlur={handleBlur('phone')}
                                    value={values.phone}
                                    maxLength={50}
                                    keyboardType={'phone-pad'}
                                    returnKeyType={'next'}
                                    secureTextEntry={false}
                                    styleComponent={styles.styleComponent}
                                    onChangeText={handleChange('phone')}
                                    styleInput={styles.input}
                                    iconLeft={ImagesAsset.phone_white}
                                    iconLeftRoundStyle={styles.iconLeftRound}
                                    errorMessage={errors.phone}
                                    error={errors.phone ? true : false}
                                    touched={errors.phone ? true : false}
                                    multiline={false}
                                />
                                <View style={{ height: vs(10) }} />
                                <InputField
                                    id={'pin'}
                                    inputRef={passwordRef}
                                    placeholder={'Enter your password'}
                                    maxLength={50}
                                    // keyboardType={'default'}
                                    returnKeyType={'done'}
                                    secureTextEntry={!isSee}
                                    styleInput={styles.input}
                                    iconLeft={ImagesAsset.lock_white}
                                    iconLeftRoundStyle={styles.iconLeftRound}
                                    styleComponent={styles.styleComponent}
                                    iconRight={isSee ? ImagesAsset.eye : ImagesAsset.close_eye}
                                    onRightPress={onSeePassword}
                                    onChangeText={handleChange('pin')}
                                    onBlur={handleBlur('pin')}
                                    value={values.pin}
                                    errorMessage={errors.pin}
                                    error={errors.pin ? true : false}
                                    touched={touched.pin ? true : false}
                                    multiline={false}
                                    // onFocus={handleText1Press}
                                    onSubmitEditing={
                                        errors?.pin || !values.pin ? null : handleSubmit
                                    }
                                />
                            </View>
                            <View style={{ height: vs(15) }} />
                            <View
                                style={{ paddingBottom: vs(20), paddingHorizontal: vs(20) }}>
                                <Button
                                    children={'Login'}
                                    onPress={handleSubmit}
                                    style={styles.button}
                                    titleColor={'white'}
                                    height={vs(50)}
                                    titleStyle={styles.textButton}
                                    rightIcon={ImagesAsset.login_white}
                                    disabled={errors?.phone || !values.phone}
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
        </View>
    );
};

const colors = LightColor as ColorType;

const styles = StyleSheet.create({
    textButton: {
        fontSize: fs(16),
        fontWeight: '600',
        lineHeight: vs(25)
    },
    button: {
        height: vs(50),
        borderRadius: vs(25),
        backgroundColor: colors.colorButtonActive,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.color3A3A3C,
        borderWidth: vs(0.2)
    },
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

export default LoginScreen;

