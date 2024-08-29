import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import NavbarHeader from "../components/Navbar"
import CourseCard from "../components/CourseCard"
import { Spinner } from "@material-tailwind/react"


const Home = () => {
    const { courses, loading } = useSelector(state => state?.courses)
    const [searchText, setSearchtext] = useState("")
    const [searchData, setSearchData] = useState(courses)

    const search = (courses, searchText) => {
        const filteredData = courses.filter((course) => (
            (course?.name?.toLocaleLowerCase()?.includes(searchText.toLocaleLowerCase()) || course?.instructor?.toLocaleLowerCase()?.includes(searchText.toLocaleLowerCase()))
        ))
        return filteredData
    }

    useEffect(() => {
        if (searchText) {
            const filteredData = search(courses, searchText)
            setSearchData(filteredData)
        } else {
            setSearchData(courses)
        }
    }, [searchText, courses])


    return (
        <div className='bg-black text-white min-h-screen' >
            <NavbarHeader value={searchText} onChange={setSearchtext} />
            {loading ? (
                <div className="flex h-[85vh] justify-center items-center" >
                    <Spinner className="h-20 w-20" color="blue" />
                </div>
            ) :
                <div className="grid lg:grid-cols-2 gap-y-7 lg:gap-7 p-10 md:p-16" >
                    {searchData?.map((course) => (
                        <CourseCard key={course?.id} id={course?.id} img={course?.thumbnail} name={course?.name} description={course?.description} />
                    ))}
                </div>}
        </div>
    )
}

export default Home