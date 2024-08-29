import alemenoApi from '../../api/alemenoApi'
import { COURSE_COMPLETE, ENROLL_COURSE, FETCH_COURSES, FETCH_ERROR } from '../types'

export const fetchCourses = () => async dispatch => {
    try {
        const response = await alemenoApi.get('/')
        dispatch({ type: FETCH_COURSES, payload: response?.data })
    } catch (err) {
        dispatch({ type: FETCH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}

export const enrollCourse = (course) => async dispatch => {
    try {
        dispatch({ type: ENROLL_COURSE, payload: course })
        alert(`You have been enrolled for "${course?.name}"`)
    } catch (err) {
        dispatch({ type: FETCH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}

export const markCourseComplete = (id) => async dispatch => {
    try {
        dispatch({ type: COURSE_COMPLETE, payload: id })
    } catch (err) {
        dispatch({ type: FETCH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}