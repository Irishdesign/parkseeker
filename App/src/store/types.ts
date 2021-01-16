export const UPDATE_ROWDATA = "UPDATE_ROWDATA";
export const UPDATE_CURRENT_DATA = "UPDATE_CURRENT_DATA";
export const UPDATE_DETAIL = "UPDATE_DETAIL";

export enum fetchtype {
    stateCode = "stateCode",
    parkCode = "parkCode",
}

// Define data types
export interface DataState {
    rowData: ParkData[];
    //  currentData: ParkData[]
    detailData: ParkData[];
    eventData: eventData[];
}

export interface ParkData {
    id: string;
    parkCode: string;
    activities: {
        name: string;
    }[];
    addresses: {
        city: string;
        postalCode: string;
        stateCode: string;
    }[];
    topics: {
        name: string;
    }[];
    description: string;
    directionsUrl: string;
    images: imgInfo[];
    fullName: string;
    states: string;
    entranceFees: {
        cost: string;
        description: string;
        title: string;
    }[];
    operatingHours: {
        description: string;
        name: string;
        standardHours: weekdays;
    }[];
    contacts: contacts;
    latitude: string;
    longitude: string;
}

export interface newsData {
    title: string;
    url: string;
    publishedAt: string;
}
export interface contacts {
    phoneNumbers: {
        description: string;
        extension: string;
        phoneNumber: string;
        type: string;
    }[];
    emailAddresses: {
        description: string;
        emailAddress: string;
    }[];
}

export interface weekdays {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
}

export interface imgInfo {
    altText: string;
    title: string;
    url: string;
}

export interface eventData {
    title: string;
    date: string;
    dateend: string;
}

// define Action type and paylaod type

interface UpadteDataAction {
    type: typeof UPDATE_ROWDATA;
    payload: ParkData[];
}
// interface setCurrentDataAction {
//     type: typeof UPDATE_CURRENT_DATA;
//     payload: {
//         page: number;
//     };
// }

interface setDetailData {
    type: typeof UPDATE_DETAIL;
    payload: {
        data: ParkData[];
        events: eventData[];
    };
}

export type DataActionTypes = UpadteDataAction | setDetailData;
