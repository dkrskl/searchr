import {TouchableOpacity, Text} from 'react-native';
import {styles} from './style';
import React from 'react';

type Props = {
    onPress: () => void;
    title: string;
    disabled: boolean;
}

export function SimpleButton(props: Props) {
    return (
        <TouchableOpacity style={[styles.button, props.disabled ? styles.passive : styles.active]}
                          onPress={props.onPress}
                          disabled={props.disabled}>
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}
