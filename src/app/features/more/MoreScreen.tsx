import React, { useRef } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ColorType, LightColor } from 'src/app/commons';

const MoreScreen = () => {

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                flex: 1,
            }}>
                <Text>MoreScreen</Text>
        </View>
    );
};

const colors = LightColor as ColorType;

const styles = StyleSheet.create({
    
});

export default MoreScreen;

