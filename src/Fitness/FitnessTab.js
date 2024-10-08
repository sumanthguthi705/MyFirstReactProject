import NavBar from "../NavBar/NavBar"
import { useState } from "react"
import '../Styles/Fitness.css'

function FitnessTab()
{
    
        const [isExpanded, setIsExpanded] = useState(false);
      
        const toggleExpansion = () => {
          setIsExpanded(!isExpanded);
        };
    return(
        <>
            <NavBar/>
            <div className="fitness-container container mt-3 rounded-1">
            <div className="mt-3 ps-3 ms-5">
                <h1 className="text-white fs-4 text">Disability</h1>
            </div>
            <div className="container mt-3">
<div className="btn-group ms-5">
  <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Exercise
  </button>
  <ul className="dropdown-menu">
    <li>Action</li>
  </ul>
</div>
            </div>
            <div className="container row col-4 ps-3 ms-5">
      <div className="card mt-3 p-0">
        <div className="card-header" onClick={toggleExpansion} style={{ cursor: 'pointer' }}>
          <h5 className="mb-0 d-flex justify-content-between align-items-center">
            <span>Duration</span>
          </h5>
        </div>
        <div className={`collapse ${isExpanded ? 'show' : ''}`}>
          <div className="card-body">
            <p>45min</p>
          </div>
        </div>
      </div>
      
      <div className="card mt-2 p-0">
        <div className="card-header" onClick={toggleExpansion} style={{ cursor: 'pointer' }}>
          <h5 className="mb-0 d-flex justify-content-between align-items-center">
            <span>Back extension</span>
          </h5>
        </div>
        <div className={`collapse ${isExpanded ? 'show' : ''}`}>
          <div className="card-body">
            <p>10min</p>
          </div>
        </div>
      </div>
      <div className="card mt-2 p-0">
        <div className="card-header" onClick={toggleExpansion} style={{ cursor: 'pointer' }}>
          <h5 className="mb-0 d-flex justify-content-between align-items-center">
            <span>Wrist extension</span>
          </h5>
        </div>
        <div className={`collapse ${isExpanded ? 'show' : ''}`}>
          <div className="card-body">
            <p>15min</p>
          </div>
        </div>
      </div>
      <div className="card mt-2 p-0" onClick={toggleExpansion} style={{ cursor: 'pointer' }}>
        <div className="card-header">
          <h5 className="mb-0 d-flex justify-content-between align-items-center">
            <span>Stretching</span>
          </h5>
        </div>
        <div className={`collapse ${isExpanded ? 'show' : ''}`}>
          <div className="card-body">
            <p>10min</p>
          </div>
        </div>
      </div>
      <div className="card mt-2 p-0">
        <div className="card-header" onClick={toggleExpansion} style={{ cursor: 'pointer' }}>
          <h5 className="mb-0 d-flex justify-content-between align-items-center">
            <span>Strengthening exercises</span>
          </h5>
        </div>
        <div className={`collapse ${isExpanded ? 'show' : ''}`}>
          <div className="card-body">
            <p>10min</p>
          </div>
        </div>
      </div>
    </div>
    </div>
        </>
    )
}
export default FitnessTab