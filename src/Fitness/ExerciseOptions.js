import '../Styles/ExerciseOptions.css'
import NavBar from '../NavBar/NavBar'

function ExerciseOptions()
{
  return (
    <>
    <div><NavBar/></div>
    <div className="mt-3 rounded-1 shadow container-fluid container exercise-container text-white d-flex justify-content-center align-items-center bg-success-subtle">
      <div className="row justify-content-center align-items-center text-center w-100">
        <div className="row mt-3 container buttondiv ms-4">
          <div className="p-3 col-sm-3 btn gradient-bg px-2 py-1 text-white rounded-1">
            <h2 className="mb-0 mt-4 fs-3">Warmup exercises<span className="ms-4 ms-4"></span>&gt;</h2>
          </div>
          <div className="exercise-arrow">
          </div>
        </div>
        <h4 className='row ms-4 mt-3 fs-5 fw-normal'>Current Workout</h4>

        {/* Wrist Extension Option */}
        <div className="row mt-3 container buttondiv ms-4">
          <div className="p-3 col-sm-3 btn gradient-bg px-2 py-1 text-white rounded-1">
            <h2 className="mb-0 mt-4 fs-3">Wrist extension<span className="ms-4 ms-4"></span>&gt;</h2>
          </div>
          <div className="exercise-arrow">
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default ExerciseOptions