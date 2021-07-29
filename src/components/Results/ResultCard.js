import React, { useContext } from "react"
import  "./Result.css"
import { useHistory } from "react-router"
import { ResultContext } from "./ResultProvider"

export const ResultCard = ({ result }) => {

    const combinedResults = result.benchPress + result.squat + result.deadLift + result.powerClean
    const PFP = combinedResults / result.userWeight
    const calulcated = PFP.toFixed(2)

    const history = useHistory()
    const { deleteResult } = useContext(ResultContext)

    const handleDelete = () => {
        deleteResult(result.id)
        .then(()=> {
            history.push("/results")
        })
    }

    return (
        <section>
            <div>
                <table class="GeneratedTable">
                    <thead>
                        <tr>
                        <th>Exercise</th>
                        <th>weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Body Weight</td>
                        <td>{result.userWeight}<font size="1">lbs</font></td>
                        </tr>
                        <tr>
                        <td>Bench Press</td>
                        <td>{result.benchPress}<font size="1">lbs</font></td>
                        </tr>
                        <tr>
                        <td>Squat</td>
                        <td>{result.squat}<font size="1">lbs</font></td>
                        </tr>
                        <tr>
                        <td>Deadlift</td>
                        <td>{result.deadLift}<font size="1">lbs</font></td>
                        </tr>
                        <tr>
                        <td>Power Clean</td>
                        <td>{result.powerClean}<font size="1">lbs</font></td>
                        </tr>
                        <tr className="total">
                        <td>Total Result</td>
                        <td>{calulcated}<font size="1">lbs</font></td>
                        </tr>
                    </tbody>
                    <button onClick={() => {
                        history.push(`/results/edit/${result.id}`)
                    }} className="myButton">Edit</button>
                    <button onClick={handleDelete} className="myButton">Delete</button>          
                </table>
            </div>
        </section>
                    )
}
