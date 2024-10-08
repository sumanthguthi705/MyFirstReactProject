import { useState } from "react"
function StudentID()
{

    var[id,setID]=useState("")

        function submitButton()
        {
            console.log(id)
        }
        function handleID(e)
        {
            console.log(e)
            setID(e.target.value)
        }

    return(
        <>
        <div className="container" >
            <div className="row">
            <div className="col-3">
            <div className="mb-3">
            <label for="studentID" className="form-label">Student ID</label>
            <input type="text" className="form-control" id="studentID" aria-describedby="emailHelp" onChange={e=>setID(e.target.value)}/>
            </div>
        <button type="submit" className="btn btn-primary" onClick={e=>submitButton()}>Submit</button><br/>
        {id}
            </div>
            </div>
            </div>
        </>
    )
}
export default StudentID;