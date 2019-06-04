import {FETCH_COURSE_FAILURE, FETCH_COURSE_SUCCESS, FETCH_COURSE_BEGIN, SAVE_COURSE} from './courseTypesActions'
import {fetchRandomCourse} from '../../../api/api';

export const getCourses = () => fetch(fetchRandomCourse())
    .then(handleErrors)
    .then((res) => res.json());


export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchCourseBegin());
        return getCourses()
            .then((responseJson) => {
                console.log(responseJson.data);
                dispatch(fetchCourseSuccess(responseJson.data));
                return responseJson.data;
            })
            .catch(error =>
                dispatch(fetchCourseFailure(error))
            );
    };
};

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchCourseSuccess = courses => ({
    type: FETCH_COURSE_SUCCESS,
    payload: {courses}
});

export const fetchCourseFailure = error => ({
    type: FETCH_COURSE_FAILURE,
    payload: {error}
});

export const fetchCourseBegin = () => ({type: FETCH_COURSE_BEGIN});

export const saveCourse = () => ({type: SAVE_COURSE});



