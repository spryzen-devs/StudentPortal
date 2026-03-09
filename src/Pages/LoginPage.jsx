import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage({setrole}) {
    const [selectedRole, setSelectedRole] = useState("");
    const navigate = useNavigate();
    const handelLogin = () => {
        setrole(selectedRole);
        if(selectedRole === "Student"){
            navigate("/home");
        }else if(selectedRole === "Admin"){
            navigate("/admin");
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <select onChange={(e)=>{setSelectedRole(e.target.value)}}>
                <option value="">Select a user type</option>
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
            </select>
            <br></br>
            <button onClick={() => {handelLogin()}}>
                Login
            </button>
        </div>
    )
}

export default LoginPage;