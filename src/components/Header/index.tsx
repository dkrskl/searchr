import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>
                searchr
            </Text>
        </View>
    );
}
