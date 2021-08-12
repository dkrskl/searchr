import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F5F6',
    },
    topSectionContainer: {
        marginBottom: 32,
    },
    photoListContainer: {
        paddingHorizontal: 16,
        alignItems: 'center',
        marginBottom: 50,
    },
    busyImage: {
        width: 48,
        height: 48,
    },
    foregroundImageContainer: {
        width: '100%',
        height: '100%',
    },
    foregroundImage: {
        width: '100%',
        height: '100%',
    },
    foregroundImageText: {
        fontSize: 24,
        textAlign: 'center',
    },
    paginationContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
});
