import {FlickrGetByKeywordModel, FlickrGetByKeywordResponseModel} from './model';
// @ts-ignore todo
import {FLICKR_API_KEY} from 'react-native-dotenv';

export class FlickrService {
    static getByKeyword(flickrGetByKeywordModel: FlickrGetByKeywordModel): Promise<FlickrGetByKeywordResponseModel> {
        const {page, keyword} = flickrGetByKeywordModel;
        return fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=?&tags=${keyword}&api_key=${FLICKR_API_KEY}&per_page=36&page=${page}`)
            .then((response) => response.json());
    }
}
