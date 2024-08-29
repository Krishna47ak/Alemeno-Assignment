import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
    Chip,
    Rating,
} from "@material-tailwind/react";
import CourseAccordion from '../components/CourseAccordion';
import { enrollCourse } from '../store/actions/courses';


const CourseDetail = () => {
    const { id } = useParams();


    const dispatch = useDispatch();
    const courses = useSelector(state => state?.courses?.courses)

    const [course, setCourse] = useState([])

    const selectedCourse = courses?.find((course) => course?.id === id)

    useEffect(() => {
        if (selectedCourse) {
            setCourse(selectedCourse)
        }
    }, [courses])

    return (
        <div className=' relative flex justify-center p-5 pt-20 pb-10 lg:p-20 bg-black text-white min-h-screen' >
            <Link to="/" className='fixed left-7 top-7 bg-white hover:bg-gray-400 p-2 px-5 text-black rounded-l-full select-none cursor-pointer z-50' >Go Back</Link>
            <Card className="w-[90%] h-fit pb-3 md:pb-7 max-w-full overflow-hidden">
                <img
                    src={course?.thumbnail}
                    alt="course image"
                    className='object-cover object-top h-[30vh] md:h-[50vh]'
                />
                {course?.rating && (

                    <div className='absolute right-5 md:right-10 top-5' >
                        <Rating value={Math.trunc(course?.rating)} readonly />
                    </div>
                )}
                <CardBody className='md:p-10' >
                    <Typography variant="h4" color="blue-gray">
                        {course?.name || ''}
                    </Typography>
                    <Typography variant="h5" color="current" className="mt-1">
                        {course?.instructor || ''}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 text-base md:text-base font-normal">
                        {course?.description || ''}
                    </Typography>
                </CardBody>
                <CardFooter className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-0 px-5 md:p-10">
                    <div className="flex scale-90 md:scale-100 items-center space-x-3 mb-5 lg:mb-0">
                        <Tooltip content={course?.duration} >
                            <Button>Duration</Button>
                        </Tooltip>
                        <Tooltip content={course?.location} >
                            <Button>Location</Button>
                        </Tooltip>
                        <Chip className='p-3 px-5' color={course?.enrollmentStatus === "open" ? "green" : course?.enrollmentStatus === "closed" ? "red" : "yellow"} value={course?.enrollmentStatus || ''} />
                    </div>
                    <div className='flex lg:ml-5' >
                        <div className="font-semibold md:mr-5">Schedule: <p className='font-normal' >{course?.schedule}</p></div>
                        <div className="font-semibold mt-2 md:mt-0">Prerequisites:
                            {course?.prerequisites?.map((e, i) => (
                                <p key={e} className='font-normal' >{i + 1}: {e}</p>
                            ))}
                        </div>
                    </div>
                </CardFooter>
                <div className='m-5 md:m-10 p-5 md:px-10 md:pb-8 border border-black rounded-xl' >
                    <CourseAccordion syllabus={course?.syllabus} />
                </div>
                {course?.enrollmentStatus != "closed" && (
                    <Button onClick={() => dispatch(enrollCourse(course))} className='w-fit mx-auto' size='lg' >Enroll Now</Button>
                )}
            </Card>
        </div>
    )
}

export default CourseDetail
