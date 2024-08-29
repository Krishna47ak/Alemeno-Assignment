import { Button, Progress, Rating } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { markCourseComplete } from '../store/actions/courses'

const Dashboard = () => {
    const enrolledCourses = useSelector(state => state?.courses?.enrolledCourses)
    const dispatch = useDispatch();

    return (
        <div className='relative bg-black text-white min-h-screen lg:px-32 py-20 text-center' >
            <Link to="/" className='fixed left-7 top-7 bg-white hover:bg-gray-400 p-2 px-5 text-black rounded-l-full select-none cursor-pointer z-50' >Go Back</Link>
            <div className='text-xl md:text-5xl font-semibold mb-10 mt-5 md:mt-0' >Enrolled Courses:</div>
            {enrolledCourses?.map((course, i) => (
                <div key={course?.id} className='relative bg-gray-800 mb-5 mx-7 md:mx-20 pb-5 rounded-xl overflow-hidden' >
                    <Progress value={30 + i * 20} color="blue" label="Completed" />
                    <img
                        src={course?.thumbnail}
                        alt="ui/ux review check"
                        className='object-cover object-top w-full h-[30vh] md:h-[50vh]'
                    />
                    <div className='absolute right-5 top-6' >
                        <Rating value={Math.trunc(course?.rating)} readonly />
                    </div>
                    <div className='p-5' >
                        <p className='font-semibold' >{course?.name}</p>
                        <p className='font-medium' >{course?.instructor}</p>
                        <div className='font-medium' >Due in: <span className='font-semibold' >{course?.duration}</span></div>
                    </div>
                    <Button onClick={() => (course?.completed ? alert("Course already completed") : dispatch(markCourseComplete(course?.id)))} color={course?.completed ? 'blue' : 'green'} >{course?.completed ? "Completed" : "Mark as completed"}</Button>
                </div>
            ))}
        </div>
    )
}

export default Dashboard