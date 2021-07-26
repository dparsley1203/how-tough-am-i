import React, { createContext } from "react";


export const ResultContext = createContext()

export const ResultProvider = (props) => {

    const [results, setResults] = useState([])

    const getResults = () => {
        return fetch("http://localhost:8088/maxrep?_expand=user")
        .then(res => res.json())
        .then(setResults)
    }

    const addResult = (resultObj) => {
        return fetch("http://localhost:8088/maxrep", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resultObj)
        })
        .then(getResults)
    }

    const getResultsById = (id) => {
        return fetch(`http://localhost:8088/${id}maxrep?_expand=user`)
        .then(res => res.json())
    }

    const deleteResult = resultId => {
        return fetch(`http://localhost:8088/maxrep/${resultId}`, {
          method: "DELETE"
        })
          .then(getResults)
    }

    const updateResult = resultObj => {
        return fetch(`http://localhost:8088/maxrep/${resultObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(resultObj)
        })
          .then(getResults)
      }

    return (
        <AnimalContext.Provider value={{
           results, getResults, addResult, getResultsById, deleteResult, updateResult
        }}>
            {props.children}
        </AnimalContext.Provider>

}