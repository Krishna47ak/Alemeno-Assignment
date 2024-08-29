import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

const CourseAccordion = ({ syllabus }) => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            {syllabus?.map((part, i) => (
                <Accordion key={part?.topic} open={open === i+1} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(i+1)}>{part?.topic}</AccordionHeader>
                    <AccordionBody>
                        {part?.content}
                    </AccordionBody>
                </Accordion>
            ))}
        </>
    );
}

export default CourseAccordion