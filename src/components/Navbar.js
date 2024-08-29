import {
    Navbar,
    Typography,
    Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavbarHeader = ({ value, onChange }) => {
    return (
        <Navbar
            variant="gradient"
            color="blue-gray"
            className="mx-auto max-w-full from-blue-gray-900 to-blue-gray-800 p-4 rounded-sm"
        >
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                >
                    ALEMENO
                </Typography>
                <div className="ml-auto md:mr-4">
                    <Link to="/dashboard" className="text-lg select-none hover:bg-blue-gray-600 p-[0.4rem] px-3 rounded-md cursor-pointer" >Dashboard</Link>
                </div>
                <div className="relative flex w-full mr-3 gap-2 md:w-max">
                    <Input
                        type="search"
                        color="white"
                        label="Search - Course, Instructor..."
                        className="pr-24"
                        containerProps={{
                            className: "min-w-[288px]",
                        }}
                        value={value}
                        onChange={e => onChange(e.target.value)}
                    />
                    {/* <Button
                        size="sm"
                        color="white"
                        className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button> */}
                </div>
            </div>
        </Navbar>
    )
}

export default NavbarHeader