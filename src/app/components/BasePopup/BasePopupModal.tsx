import React, {
  forwardRef,
  memo,
  Ref,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import Modal from 'react-native-modal';
import { BasePopupModalRef, BasePopupModalType } from './Type';
import { ColorType, LightColor } from 'src/app/commons';
import { DeviceUtils } from '@utils';
import { vs } from '@utils/ScaleUtils';

const { height, width } = Dimensions.get('window');
export const BasePopupView = memo(
  forwardRef((props: BasePopupModalType, ref: Ref<BasePopupModalRef>) => {
    const color = LightColor as ColorType;
    const modalRef = useRef<Modal>(null);
    const propRef = useRef<BasePopupModalType>(props);
    const [isVisible, setVisible] = useState<boolean>();
    const dataProps = useRef<BasePopupModalType>();
    const heightModal = height + DeviceUtils.getStatusBarHeight();
    const show = useCallback((newProps?: BasePopupModalType) => {
      dataProps.current = newProps;
      setVisible(true);
    }, []);

    const close = useCallback(() => {
      setVisible(false);
    }, []);

    useImperativeHandle(
      ref,
      useCallback(() => ({ show, close }), [show, close]),
    );

    return (
      <Modal
        isVisible={isVisible}
        ref={modalRef}
        onBackdropPress={dataProps.current?.overLayClose ? close : undefined}
        // animationIn={'bounceIn'}
        // animationOut={'bounceOut'}
        {...propRef.current}
        statusBarTranslucent
        useNativeDriverForBackdrop
        backdropOpacity={0.8}
        deviceHeight={heightModal}
        coverScreen={false}>
        <View
          style={{
            ...styles.container,
            ...dataProps.current?.styleModel,
          }}>
          {dataProps.current?.absIcon ? (
            <View style={[styles.absContainer, {backgroundColor: dataProps.current?.absBackgroundColor}]}>
              <Image
                source={dataProps.current?.absIcon}
                style={{ width: vs(25), height: vs(25), }}
                resizeMode="contain"
              />
            </View>
          ) : (
          <></>
          )}
          <View style={styles.titleContainer}>
            {dataProps.current?.title ? (
              <Text style={[styles.title, dataProps.current?.titleStyle]}>
                {dataProps.current?.title}
              </Text>
            ) : (
              <></>
            )}
            {dataProps.current?.closeModal ? (
              <Text>X</Text>
              // <IconView
              //   xml={IconSvg.home}
              //   width={s(25)}
              //   height={s(25)}
              //   color={dataProps.current.colorClose ?? color.black}
              //   onPress={close}
              // />
            ) : (
              <></>
            )}
          </View>
          {typeof dataProps.current?.children === 'string' ? (
            <Text style={[styles.content, dataProps.current?.contentStyle]}>
              {dataProps.current?.children}
            </Text>
          ) : dataProps.current?.isCustom ? (
            <>{dataProps.current?.children}</>
          ) : dataProps.current?.isScroll ? (
            <ScrollView>{dataProps.current?.children}</ScrollView>
          ) : (
            <View>{dataProps.current?.children}</View>
          )}
          <View style={styles.buttonContainer}>
            {dataProps.current?.subButtonTitle ? (
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: color.colorPrimary,
                    marginRight: vs(12),
                  },
                  dataProps.current?.subButtonStyle,
                ]}
                onPress={dataProps.current?.onSubPress || close}>
                <Text
                  style={[
                    styles.btTitStyle,
                    dataProps.current?.subButtonStyle,
                    dataProps.current?.textButtonStyle,
                  ]}>
                  {dataProps.current?.subButtonTitle}
                </Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {dataProps.current?.mainButtonTitle ? (
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: color.colorPrimary },
                  dataProps.current?.mainButtonStyle,
                ]}
                onPress={dataProps.current?.onPress}>
                <Text
                  style={[
                    styles.btTitStyle,
                    dataProps.current?.mainButtonStyle,
                    dataProps.current?.textButtonStyle,
                  ]}>
                  {dataProps.current?.mainButtonTitle}
                </Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </View>
      </Modal>
    );
  }),
);

const color = LightColor as ColorType;
  const styles = StyleSheet.create({
    absContainer: {
      position: 'absolute',
      alignSelf: 'center',
      marginTop: -vs(32),
      height: vs(62),
      width: vs(62),
      borderRadius: vs(62),
      backgroundColor: '#FF8D07',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: color.white,
      minWidth: width - vs(50),
      // minHeight: height / 4,
      paddingHorizontal: vs(12),
      paddingTop: vs(23),
      // paddingBottom: vs(9),
      borderRadius: vs(13),
      alignSelf: 'center',
    },
    title: {
      fontSize: vs(18),
      fontWeight: '500',
      flex: 1,
      color: color.black,
      textAlign: 'center',
    },
    distance: {
      width: vs(13),
    },
    dummyView: {
      width: vs(20),
      height: vs(20),
    },
    button: {
      flex: 1,
      height: vs(39),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: vs(16),
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: vs(15)
    },
    radioButton: {
      flexDirection: 'row',
    },
    btTitStyle: {
      color: color.white,
      fontSize: vs(18),
      fontWeight: '400',
    },
    content: {
      color: color.black,
      fontSize: vs(14),
      fontWeight: '300',
      marginTop: vs(15),
      marginBottom: vs(23),
      textAlign: 'center',
      // flex: 1,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: vs(16),
    },
  });
BasePopupView.displayName = 'BasePopupView';
export declare type BasePopupView = BasePopupModalRef & BasePopupModalType;
