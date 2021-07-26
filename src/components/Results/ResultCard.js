import React from "react"
import  "./Result.css"

export const ResultCard = ({ result }) => {

    return (
        <section className="result">
            <h3 className="result__name">{result.user?.name}</h3>
                <table>
                <tr className="result__table">
                    <th>Exercise</th>
                    <th>Weight</th>
                </tr>
                <tr className="result__table">
                    <td>Body Weight</td>
                    <td>Bench Press</td>
                    <td>Squat</td>
                    <td>Deadlift</td>
                    <td>Power Clean</td>
                </tr>
                </table>

            

        </section>
    )
}