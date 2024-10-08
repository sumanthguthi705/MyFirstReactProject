import { useState } from "react"
import { isvalidEmail } from "../utils/emailregex"
import axios from "axios"
import StudentID from "../StudentID"
import { Navigate, useNavigate } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import ExerciseOptions from "./ExerciseOptions"

    function SignIn()
    {
        var[email,setEmail] = useState("")
        var[password,setpassword] = useState("")
        
        var[validEmail,setErrorEmail] = useState("")
        var[validPassword,setErrorPassword] = useState("")
        
        var[apimessage,setapimessage]=useState("")
        const navigate = useNavigate();

        function handleEmail(e)
        {
            setEmail(e.target.value)
        }
         async function submitButton()
        {
            var errors=0;
            if(!isvalidEmail(email))
            {
                setErrorEmail("Invalid Email")   
                errors++
            }
            else{
                setErrorEmail("")
            }

            if(password.length<8)
            {
                errors++
                setErrorPassword("Password doesnot match the requirments")
            }
            else{
                setErrorPassword("")
            }
            if(errors == 0)
            {
                console.log("calling api")
                console.log(email+" "+password)
                var loginDetails={
                    'email':email,
                    'password':password
                }
                try{
                var response = await axios.post("https://api.softwareschool.co/auth/login",loginDetails)
                console.log(response)
                console.log(response.data.message)
                if(response.data.message=="OK")
                {
                    setapimessage("loggedIn Successfully")
                    navigate('/ExerciseOptions');
                    
                }
                else
                {
                    setapimessage("Invalid Credentials")
                }
            }
            catch(ex)
            {
                console.log(ex.message)
            }
                
            }
                
        }
        return(
            <>
            <div className="container mt-3" >
            <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <h3 className="mb-3">Sign In</h3>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=>handleEmail(e)}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        <div className="text-danger"> {validEmail} </div>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={e=>setpassword(e.target.value)}/>
        <div className="text-danger"> {validPassword} </div>
    </div>
        <button type="submit" className="btn btn-primary mb-3" onClick={e=>submitButton()}>Submit</button>
    <a href="login">
        <button type="submit" className="btn btn-primary mb-3 ms-3">Register</button>
    </a>
    <div className="mb-3"><a class="link-offset-2 link-underline link-underline-opacity-0">Forgot Password?</a></div>
    <div className="alert alert-primary">{apimessage}</div>
    </div>
    <div className="col-4"></div>
    </div>
    </div>    
            </>
        )
    }
    export default SignIn