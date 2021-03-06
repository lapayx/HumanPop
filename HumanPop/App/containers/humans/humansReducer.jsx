import {
    GET_HUMANS_START,
    GET_HUMANS_SUCCESS,
    GET_HUMANS_ERROR,
    DELETE_HUMAN_START,
    DELETE_HUMAN_SUCCESS,
    DELETE_HUMAN_ERROR
} from './humansConstants.jsx';

const initialState = {
    data: {
        currentPage: 0,
        totalPages: 0,
        pageSizes: 0,
        countRecords: 0,
        records: []
    },
    isDeleted: false,
    error: '',
}

export default function humans(state = initialState, action) {
    switch (action.type) {
        case GET_HUMANS_START:
            return { ...state, data: { currentPage: 0, totalPages: 0, pageSizes: 0, countRecords: 0, records: [] }, error: '' }

        case GET_HUMANS_SUCCESS:
            return { ...state, data: action.payload, error: '' }

        case GET_HUMANS_ERROR:
            return { ...state, error: action.payload }

        case DELETE_HUMAN_START:
            return { ...state, isDeleted: false, error: '' }

        case DELETE_HUMAN_SUCCESS:
            return { ...state, isDeleted: true }

        case DELETE_HUMAN_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
}