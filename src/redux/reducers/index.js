import { combineReducers } from 'redux';
import courses from './course/courseReducer'
console.log(courses);
export default combineReducers({
    courses
});