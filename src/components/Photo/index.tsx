import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import React from 'react';

type Props = {
    imageURI: string;
    title: string;
    onImagePress: (uri: string, title: string) => void;
}

export function Photo(props: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onImagePress(props.imageURI, props.title)}>
            <Image source={{uri: props.imageURI}} style={styles.photo}/>
            <Text numberOfLines={1}>{props.title}</Text>
        </TouchableOpacity>
    );
}
