import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {styles} from './styles';

type Props = {
    onPress: () => void;
    onChangeText: Dispatch<SetStateAction<string>>;
    value: string;
}

export function SearchBar(props: Props) {
    return (
        <View style={styles.searchBarContainer}>
            <TextInput style={styles.searchBar}
                       placeholder='Type in a keyword...'
                       placeholderTextColor='grey'
                       value={props.value}
                       onChangeText={props.onChangeText}
                       autoCorrect={false}/>
            <TouchableOpacity style={styles.searchIconContainer}
                              onPress={props.onPress}>
                <Image source={require('../../assets/images/search-icon.png')} style={styles.searchIcon}/>
            </TouchableOpacity>
        </View>
    );
}
