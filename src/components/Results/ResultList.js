import React, { useContext, useEffect } from "react"
import { ResultContext } from "./ResultProvider"
import { ResultCard } from "./ResultCard"
import { useHistory } from "react-router"
import  "./Result.css"


export const ResultList = () => {

    const { results, getResults } = useContext(ResultContext)
    const history = useHistory()

    useEffect(() => {
        getResults()
    }, [])

    return (
        <div className="results">
            <h2>My Results Page</h2>
            <button className="addButton" onClick={()=>{history.push("/results/create")}}>Add New Max Rep</button>
            <div className="result">
                {
                    results.filter((result) => {
                        return parseInt(localStorage.getItem("tough_customer")) === result.userId
                    }).map(result => {

                        return <ResultCard key={result.id} result={result} />
                    })
                }
            </div>
        </div>
    )

}