import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {Bounce} from 'react-native-animated-spinkit';
import Modal from 'react-native-modal';
import {LoadingProps, LoadingRef} from './Type';
import { vs } from '@utils/ScaleUtils';
import { ColorType, LightColor } from 'src/app/commons';

export const LoaddingView = forwardRef<LoadingRef, LoadingProps>(
  (props, ref) => {
    const {isShow} = props;

    const [visible, setVisible] = useState(false);

    const propRef = useRef<LoadingProps>(props);
    const {height} = Dimensions.get('window');
    const heightModal = height + 20;
    const dataProps = useRef<LoadingProps>();
    const colors = LightColor as ColorType;

    useEffect(() => {
      if (isShow !== null && isShow !== undefined) {
        setVisible(isShow);
      }
    }, [isShow]);

    const show = (newProps?: LoadingProps) => {
      dataProps.current = newProps;
      setVisible(true);
    };

    const close = () => {
      setVisible(false);
    };

    useImperativeHandle(ref, () => ({show, close}));

    return (
      <Modal
        isVisible={visible}
        {...propRef.current}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        statusBarTranslucent
        useNativeDriverForBackdrop
        backdropOpacity={0.6}
        coverScreen
        deviceHeight={heightModal}>
        <View style={styles.stContainLogo}>
          <Bounce
            size={vs(44)}
            color={colors.colorPrimary as string}
            style={styles.bounce}
          />
        </View>
      </Modal>
    );
  },
);

const colors = LightColor as ColorType;

const styles = StyleSheet.create({
  stContainLogo: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bounce: {position: 'absolute'},
});

export declare type LoaddingView = LoadingRef & LoadingProps;
