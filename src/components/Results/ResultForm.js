import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { ResultContext } from "./ResultProvider"



export const ResultForm = () => {
    const { addResult } = useContext(ResultContext)

    const [result, setResult] = useState({
        userId: 0,
        userWeight: 0,
        benchPress: 0,
        squat: 0,
        deadLift: 0,
        powerClean: 0,
        timeStamp: 0
    })

    const history = useHistory()

    const formInputValue = (event) => {
        const newResult = {...result}
        newResult[event.target.id] = event.target.value
        setResult(newResult)
    }

    const saveResultClick = (event) => {
        event.preventDefault()

        const userId = parseInt(localStorage.getItem("tough_customer"))

        const newResult = ({
            userId: userId,
            userWeight: result.userWeight,
            benchPress: result.benchPress,
            squat: result.squat,
            deadLift: result.deadLift,
            powerClean: result.powerClean,
            timeStamp: Date.now()
        })
        addResult(newResult)
        .then(()=> history.push("/results"))
    }

    useEffect(() => {
        // getResults()
    }, [])

    return (

        <form className="resultForm">
            <h2 className="resultForm__title"></h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="weight">User Weight</label>
                    <input type="text" id="userWeight" required autoFocus className="form-control" placeholder="User Weight" value={result.userWeight} onChange={formInputValue}></input>
                </div>

            </fieldset>




        </form>
    )
}