import {
    FETCH_COURSE_BEGIN,
    FETCH_COURSE_FAILURE,
    FETCH_COURSE_SUCCESS,
    SAVE_COURSE
} from '../../actions/course/courseTypesActions'

const initialState = {
    items: [],
    isLoading: true,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case FETCH_COURSE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload.courses
            };
        case FETCH_COURSE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state
    }
}