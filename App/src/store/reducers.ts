import { DataState, DataActionTypes, UPDATE_ROWDATA, UPDATE_DETAIL } from "./types";

const initialState: DataState = {
    rowData: [],
    detailData: [],
    eventData: [],
};

export function dataReducer(state = initialState, action: DataActionTypes): DataState {
    switch (action.type) {
        case UPDATE_ROWDATA:
            return {
                ...state,
                rowData: action.payload,
            };
        case UPDATE_DETAIL:
            return {
                ...state,
                detailData: action.payload.data,
                eventData: action.payload.events,
            };
        default:
            return state;
    }
}
