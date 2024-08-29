import { COURSE_COMPLETE, ENROLL_COURSE, FETCH_COURSES, FETCH_ERROR } from "../types"

const initialState = {
    loading: true,
    courses: [],
    enrolledCourses: []
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_COURSES:
            return {
                ...state,
                loading: false,
                courses: payload
            }
        case ENROLL_COURSE:
            if (state.enrolledCourses.find((course) => course.id == action.payload.id)) {
                return state
            }
            return {
                ...state,
                loading: false,
                enrolledCourses: [...state.enrolledCourses, { ...action.payload, completed: false }]
            }
        case COURSE_COMPLETE:
            return {
                ...state,
                loading: false,
                enrolledCourses: state.enrolledCourses?.map((course) => course.id === action.payload ? { ...course, completed: true } : course)
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                courses: []
            }
        default:
            return state
    }
}