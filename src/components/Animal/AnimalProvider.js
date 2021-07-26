import { createContext } from "istanbul-lib-report"
import React, { createContext } from "react"

export const AnimalContext = createContext()

export const AnimalProvider = (props) => {

    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
        .then(res => res.json())
        .then(setAnimals)
    }

    // Part of stretch goal to add ability for user created animals
    // const addAnimal = (animalObj) => {
    //     return fetch("http://localhost:8088/animals", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(animalObj)
    //     })
    //     .then(getAnimals)
    // }

    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}`)
            .then(res => res.json())
    }

    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById,
        }}>
            {props.children}
        </AnimalContext.Provider>
    )

}