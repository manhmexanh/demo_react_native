/* @flow */
const BASE_URL = 'https://api-dot-e-course.appspot.com';

export const fetchRandomCourse = () => `${BASE_URL}/api?action=getRandomCourses`;

export const fetchCourses =(courseIds) => `${BASE_URL}/api?action=getCourses&ids=${courseIds}`;

export const fetchTopic =(topicIds)=> `${BASE_URL}/api?action=getTopics&ids=${topicIds}`;

export const fetchCard=(cardIds)=> `${BASE_URL}/api?action=getCards&ids=${cardIds}`;

