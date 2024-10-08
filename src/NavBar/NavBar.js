import { useState } from "react"
import { isvalidEmail } from "../utils/emailregex"
import axios from "axios"
import StudentID from "../StudentID"
import { useNavigate } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import ExerciseOptions from "../Fitness/ExerciseOptions"

function NavBar()
{
    const navigate = useNavigate()
    function onClickFitness()
        {
            return navigate('/FitnessTab')
        }
    function onClickHome()
    {
        return navigate('/ExerciseOptions')
    }
    function onClickLogout()
    {
        return navigate('/signin')
    }
    return(
        <>
        <div className="container mt-3 shadow p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo and Left Links */}
          <a className="navbar-brand btn" href="/ExerciseOptions" onClick={()=>onClickHome()} >Logo</a>
          <div className="navbar-nav me-auto">
          <a className="nav-link" href="/ExerciseOptions" onClick={()=>onClickHome()}>Home</a>
            <a className="nav-link" href="/Fitnesstab" onClick={(e)=>onClickFitness()}>Fitness</a>
            <a className="nav-link" href="#">Nutrition</a>
            <a className="nav-link" href="#">Trainer</a>
          </div>
  
          {/* Right Links - Aligned to the right */}
          <div className="d-flex ms-auto">
            <a className="nav-link" href="/signin" onClick={()=>onClickLogout()}>Logout</a>
            <a className="nav-link ms-3" href="#">Help</a>
            <a className="nav-link ms-3" href="#">
            <i className="fas fa-user-circle fa-lg"></i> {/* FontAwesome profile icon */}
            </a>
          </div>
        </div>
      </nav>
      </div>
      
      </>
    )

}
export default NavBar