import { useNavigate } from "react-router-dom";
function CoursePage() {
    const courseList = [
        {id:1,name:"react"},
        {id:2,name:"JS"},
        {id:3,name:"Hypertext markup language"},
        {id:4,name:"CSS"},
        {id:5,name:"Vue"},
    ]
    const navigate = useNavigate();
    return (
        <div>
            <h1>Your Courses</h1>
            <p>Here you can view the courses you are enrolled in, along with your grades and other important information related to your courses.</p>
            {
                courseList.map((course) => {
                    return (
                        <div key={course.id}>
                        <h1>{course.name}</h1>
                        <button onClick={() => {navigate(`/courses/${course.id}`)}}>Enroll</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CoursePage;