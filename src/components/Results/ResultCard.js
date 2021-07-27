
import React from "react"
import  "./Result.css"

export const ResultCard = ({ result }) => {

    const combinedResults = result.benchPress + result.squat + result.deadLift + result.powerClean
    const PFP = combinedResults / result.userWeight
    const calulcated = PFP.toFixed(2)

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
                        <td>{result.userWeight}</td>
                        </tr>
                        <tr>
                        <td>Bench Press</td>
                        <td>{result.benchPress}</td>
                        </tr>
                        <tr>
                        <td>Squat</td>
                        <td>{result.squat}</td>
                        </tr>
                        <tr>
                        <td>Deadligt</td>
                        <td>{result.deadLift}</td>
                        </tr>
                        <tr>
                        <td>Power Clean</td>
                        <td>{result.powerClean}</td>
                        </tr>
                        <tr className="total">
                        <td>Total Result</td>
                        <td>{calulcated}</td>
                        </tr>
                    </tbody>
                    <button className="myButton">Edit</button>
                    <button className="myButton">Delete</button>          
                </table>
            </div>
        </section>
                    )
}
