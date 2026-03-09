import { useParams } from "react-router-dom";
function CourseDetails() {
    const courseList = [
  {
    id: 1,
    name: "React",
    description: "Learn the fundamentals of React including components, hooks, and state management.",
    instructor: "John Doe",
    duration: "6 weeks",
    level: "Beginner"
  },
  {
    id: 2,
    name: "JavaScript",
    description: "Understand JavaScript concepts like closures, promises, async/await, and DOM manipulation.",
    instructor: "Sarah Smith",
    duration: "8 weeks",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Hypertext Markup Language",
    description: "Learn how to structure web pages using HTML elements and semantic tags.",
    instructor: "David Lee",
    duration: "4 weeks",
    level: "Beginner"
  },
  {
    id: 4,
    name: "CSS",
    description: "Master styling techniques including flexbox, grid, responsive design, and animations.",
    instructor: "Emma Brown",
    duration: "5 weeks",
    level: "Beginner"
  },
  {
    id: 5,
    name: "Vue",
    description: "Build modern web applications using the Vue framework and its reactive system.",
    instructor: "Michael Chen",
    duration: "6 weeks",
    level: "Intermediate"
  }
];
    const {id} = useParams();
    return (
        <div>
            <h1>Course Details</h1>
            <p>This page will display detailed information about a specific course, including the syllabus, schedule, and instructor information.</p>
            {
                courseList.map((course) => {
                    if(course.id == id){
                        return (
                            <div key={course.id}>
                                <h1>{course.name}</h1>
                                <p>{course.description}</p>
                                <p>Instructor: {course.instructor}</p>
                                <p>Duration: {course.duration}</p>
                                <p>Level: {course.level}</p>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default CourseDetails;