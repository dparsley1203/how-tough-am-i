import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ResultContext } from "./ResultProvider"
import Swal from "sweetalert2"


export const ResultForm = () => {
    const { addResult, getResultsById, updateResult, getResults } = useContext(ResultContext)

    const [result, setResult] = useState({
        userId: 0,
        userWeight: "",
        benchPress: "",
        squat: "",
        deadLift: "",
        powerClean: "",
        timeStamp: ""
    })

    const history = useHistory()
    const {resultId} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const formInputValue = (event) => {
        const newResult = {...result}
        newResult[event.target.id] = event.target.value
        setResult(newResult)
    }

    const saveResultClick = (event) => {
        event.preventDefault()
        
        if (result.userWeight === 0 || result.benchPress === 0 || result.squat === 0 || result.deadLift === 0 || result.powerClean === 0 
            || result.userWeight === "" || result.benchPress === "" || result.squat === "" || result.deadLift === "" || result.powerClean === ""
            ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please ensure all fields are filled out',
              })
            

        } else {

        setIsLoading(true)
        if (resultId) {
            const userId = parseInt(localStorage.getItem("tough_customer"))
                updateResult({
                    id: parseInt(result.id),
                    userId: userId,
                    userWeight: parseInt(result.userWeight),
                    benchPress: parseInt(result.benchPress),
                    squat: parseInt(result.squat),
                    deadLift: parseInt(result.deadLift),
                    powerClean: parseInt(result.powerClean),
                    timeStamp: Date.now()
            })
            .then(() => history.push("/results"))

        } else {

            const userId = parseInt(localStorage.getItem("tough_customer"))
            
            addResult({
                userId: userId,
                userWeight: parseInt(result.userWeight),
                benchPress: parseInt(result.benchPress),
                squat: parseInt(result.squat),
                deadLift: parseInt(result.deadLift),
                powerClean: parseInt(result.powerClean),
                timeStamp: Date.now()
            })
            .then(()=> history.push("/results"))
        }
    }    
}

    useEffect(() => {
        getResults()
        .then(() => {
            if(resultId) {
            getResultsById(resultId)
            .then(result => {
                setResult(result)
                setIsLoading(false)
            })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (

        <form className="resultForm">
            <h2 className="resultForm__title"></h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="weight">User Weight</label>
                    <input type="text" id="userWeight" required autoFocus className="form-control" 
                    placeholder="User Weight" value={result.userWeight} onChange={formInputValue}>
                    </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="benchPress">Bench Press</label>
                    <input type="text" id="benchPress" required autoFocus className="form-control" 
                    placeholder="Bench Press" value={result.benchPress} onChange={formInputValue}></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="benchPress">Squat</label>
                    <input type="text" id="squat" required autoFocus className="form-control" 
                    placeholder="Squat" value={result.squat} onChange={formInputValue}></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="benchPress">Dead Lift</label>
                    <input type="text" id="deadLift" required autoFocus className="form-control" 
                    placeholder="Dead Lift" value={result.deadLift} onChange={formInputValue}></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="benchPress">Power Clean</label>
                    <input type="text" id="powerClean" required autoFocus className="form-control" 
                    placeholder="Power Clean" value={result.powerClean} onChange={formInputValue}></input>
                </div>
            </fieldset>
            <button className="addButton"
            disabled={isLoading}
            onClick={saveResultClick}>
                {resultId ? "Save Edit Lift" : "Add New Lifts" }
            </button>
        </form>
    )
}