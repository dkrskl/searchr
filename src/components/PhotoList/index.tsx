import {Photo} from '../Photo';
import React, {Dispatch, SetStateAction, useCallback} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {PhotoType} from '../../api/services/model'; // todo dont get this from api

type Props = {
    photoList: PhotoType[];
    onForegroundImageChange: Dispatch<SetStateAction<{ uri: string; title: string; }>>;
}

export function PhotoList(props: Props) {
    const onImagePress = useCallback((uri: string, title: string) => {
        props.onForegroundImageChange({uri, title});
    }, [props]);

    return (
        <View style={styles.container}>
            {
                props.photoList?.map((p) =>
                    <Photo imageURI={`https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
                           title={p.title}
                           key={p.id}
                           onImagePress={onImagePress}/>,
                )
            }
        </View>
    );
}
