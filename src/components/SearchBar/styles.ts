import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    searchBarContainer: {
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 32,
        height: 42,
        fontSize: 16,
        paddingHorizontal: 8,
        backgroundColor: 'lightgrey',
    },
    searchIconContainer: {
        height: 40,
        width: 40,
        right: 0,
        position: 'absolute',
        borderRadius: 32,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5cb85c',
    },
    searchIcon: {
        height: 32,
        width: 32,
    },
});
