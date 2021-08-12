export type FlickrGetByKeywordModel = {
    keyword: string;
    page: number;
}

interface FlickrResponseModel {
    stat: string;
}

export interface FlickrGetByKeywordResponseModel extends FlickrResponseModel {
    photos: {
        page: number;
        pages: number;
        perpage: number;
        total: number;
        photo: PhotoType[];
    }
}

export type PhotoType = {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
}
