import React, { useContext, useEffect } from "react"
import { ResultContext } from "./ResultProvider"
import { ResultCard } from "./ResultCard"


export const ResultList = () => {

    const { results, getResults } = useContext(ResultContext)

    useEffect(() => {
        getResults()
    }, [])

    return (
        <div>
            <h2>My Results Page</h2>

            <div className="result">
                {
                    results.map(result => {
                        return <ResultCard key={result.id} result={result} />
                    })
                }
            </div>
        </div>
    )

}