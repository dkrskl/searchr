import React, {useCallback, useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text, Image, Alert, TouchableOpacity,
} from 'react-native';
import {Header} from './components/Header';
import {styles} from './style';
import {SearchBar} from './components/SearchBar';
import {PhotoList} from './components/PhotoList';
import {FlickrService} from './api/services/flickr.service';
import {PhotoType} from './api/services/model';
import {SimpleButton} from './components/SimpleButton';

export const App = () => {
        const [foregroundImage, setForegroundImage] = useState<{ uri: string; title: string; }>({uri: '', title: ''}); // todo create new type for this
        const [photoList, setPhotoList] = useState<PhotoType[]>([]);
        const [searchText, setSearchText] = useState('');
        const [currentPage, setCurrentPage] = useState(0);
        const [pageCount, setPageCount] = useState(0);
        const [totalPhotoCount, setTotalPhotoCount] = useState(0);
        const [busy, setBusy] = useState(false);

        const search = useCallback((enforcePage?: number) => {
            setBusy(true);
            FlickrService.getByKeyword({
                keyword: searchText,
                page: enforcePage ? enforcePage : currentPage,
            })
                .then((response) => {
                    const photos = response.photos.photo;
                    if (photos.length < 1) {
                        setPhotoList([]);
                        return Alert.alert('Not enough images to be shown.');
                    }

                    setPhotoList(response.photos.photo);
                    setPageCount(response.photos.pages);
                    setTotalPhotoCount(response.photos.total);
                })
                .catch((e) => console.log({e}))
                .finally(() => setBusy(false));
        }, [currentPage, searchText]);

        const onSearchPress = useCallback(() => {
            setCurrentPage(0);
            search(0);
        }, [search]);

        const onPageChangePress = useCallback((value: number) => {
            const newPage = currentPage + value;
            if (newPage < 0 || newPage > pageCount) {
                return;
            }

            setCurrentPage(newPage);
        }, [currentPage, pageCount]);

        useEffect(() => {
            if (photoList.length < 1) {
                return;
            }

            search();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currentPage]);

        return (
            <SafeAreaView style={styles.container}>
                {
                    foregroundImage.uri !== '' &&
                    (
                        <TouchableOpacity activeOpacity={0} onPress={() => setForegroundImage({uri: '', title: ''})}
                                          style={styles.foregroundImageContainer}>
                            <Text style={styles.foregroundImageText}>{foregroundImage.title}</Text>
                            <Image source={{uri: foregroundImage.uri}}
                                   style={styles.foregroundImage}
                                   resizeMode='contain'/>
                        </TouchableOpacity>
                    )
                }
                <ScrollView
                    contentInsetAdjustmentBehavior='automatic'>
                    <View style={styles.topSectionContainer}>
                        <Header/>
                        <SearchBar onPress={onSearchPress} value={searchText} onChangeText={setSearchText}/>
                    </View>
                    <View style={styles.photoListContainer}>
                        {
                            busy ?
                                <Text>loading...</Text> :
                                (
                                    photoList.length > 0 &&
                                    <>
                                        <Text>Found {totalPhotoCount} images in {pageCount} pages.</Text>
                                        <PhotoList photoList={photoList}
                                                   onForegroundImageChange={setForegroundImage}/>
                                    </>
                                )
                        }
                    </View>
                    {
                        photoList.length > 0 &&
                        (
                            <View style={styles.paginationContainer}>
                                <SimpleButton onPress={() => onPageChangePress(-1)} title='< Prev'
                                              disabled={currentPage - 1 < 0}/>
                                <SimpleButton onPress={() => onPageChangePress(1)} title='Next >'
                                              disabled={currentPage + 1 > pageCount}/>
                            </View>
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
;
