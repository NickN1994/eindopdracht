import "./Leeromgeving.css"
import CoursesArray from "../../Compenents/CoursesArray.js";
import LeeromgevingBox from "./LeeromgevingBox.jsx";


function Leeromgeving() {


    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h1>Leeromgeving</h1>
                <div className="parent-activity-box">
                    {CoursesArray.map((course) => (
                        <LeeromgevingBox
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            info={course.info}
                            url={course.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Leeromgeving;
