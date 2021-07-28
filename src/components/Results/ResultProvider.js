import React, { createContext, useState } from "react";


export const ResultContext = createContext()

export const ResultProvider = (props) => {

    const [results, setResults] = useState([])

    const getResults = () => {
        return fetch("http://localhost:8088/results?_expand=user")
        .then(res => res.json())
        .then(setResults)
    }

    const addResult = (resultObj) => {
        return fetch("http://localhost:8088/results", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resultObj)
        })
        .then(getResults)
    }

    const getResultsById = (id) => {
        return fetch(`http://localhost:8088/results/${id}?_expand=user`)
        .then(res => res.json())
    }

    const deleteResult = resultId => {
        return fetch(`http://localhost:8088/results/${resultId}`, {
          method: "DELETE"
        })
          .then(getResults)
    }

    const updateResult = resultObj => {
        return fetch(`http://localhost:8088/results/${resultObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(resultObj)
        })
          .then(getResults)
      }

    return (
        <ResultContext.Provider value={{
           results, getResults, addResult, getResultsById, deleteResult, updateResult
        }}>
            {props.children}
        </ResultContext.Provider>
    )
}