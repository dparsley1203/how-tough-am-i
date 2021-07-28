import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ResultContext } from "../Results/ResultProvider"
import { UserContext } from "../Users/UserProvier"
import { AnimalContext } from "./AnimalProvider"


export const AnimalDetail = () => {

    const { getAnimalById } = useContext(AnimalContext)
    // const { users, getUsers } = useContext(UserContext)
    const { results, getResults } = useContext(ResultContext)
    const [animal, setAnimal] = useState({})
    const { animalId } = useParams()

    const currentUserResults = results.filter(result => 
       result.userId ===  parseInt(localStorage.getItem("tough_customer")))
        //may need to create a another var and map over results.  Currently displaying all squats  
    
    useEffect(() => {
        getAnimalById(animalId)
        .then((response) => {
            setAnimal(response)
        })
        .then(getResults)
    }, [])

    return (
        <section>
            <h3 className="animal__name">Name: {animal.name}</h3>
            <div className="animal__breed">Weight: {animal.animalWeight}</div>
            <div className="animal__location">Strength: {animal.animalStrength}</div>
            <div>{currentUserResults.map(result => {
                return result.squat
            }).join(" > ")}
            </div>
        </section>
    )

}