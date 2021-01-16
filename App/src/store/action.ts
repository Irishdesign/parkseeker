import { ParkData, eventData, UPDATE_ROWDATA, DataActionTypes, UPDATE_DETAIL } from "./types";

export function updateRowData(newData: ParkData[]): DataActionTypes {
    return {
        type: UPDATE_ROWDATA,
        payload: newData,
    };
}

export function setDetailData(data: ParkData[], events: eventData[]): DataActionTypes {
    return {
        type: UPDATE_DETAIL,
        payload: { data, events },
    };
}
