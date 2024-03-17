import { ImagesAsset } from '../../../assets/images';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const SWITCH_DURATION = 1500;

export const LogoAnimated: React.FC = () => {
    const fade = useRef(new Animated.Value(0)).current;
    const translate = useRef(new Animated.Value(0)).current;
    const zoom = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fade, {
            toValue: 1,
            duration: SWITCH_DURATION,
            useNativeDriver: true,
        }).start();
        Animated.timing(translate, {
            toValue: -(height / 2 - 50),
            duration: SWITCH_DURATION,
            useNativeDriver: true,
        }).start();
        Animated.timing(zoom, {
            toValue: 1,
            duration: SWITCH_DURATION,
            useNativeDriver: true,
        }).start();
    }, [fade, translate, zoom]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.logo,
                    {
                        opacity: fade,
                        transform: [
                            {
                                translateY: translate,
                            },
                            {
                                scale: zoom,
                            },
                        ],
                    },
                ]}>
                <Image source={ImagesAsset.logo_Login} style={styles.logoWelcome} resizeMode="contain" />
            </Animated.View>
        </View>
    );
};

export default LogoAnimated;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: width,
        marginTop: height / 9,
    },
    logo: {
        flex: 1,
        marginTop: height / 2,
    },
    logoWelcome: {
        width: width,
        height: width * 0.7,
        alignSelf: 'center',
    },
    txtWelcome: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 32
    },
});