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
        
    const getMorePrecise = currentUserResults.map((result) => { 
       const totalWeight=  result.benchPress + result.squat + result.deadLift + result.powerClean
       const PFP = totalWeight / result.userWeight
       return PFP.toFixed(2)
    })

    const animalPFP = animal.animalStrength / animal.animalWeight
    let winnerLoser
    if (animalPFP > Math.max(...getMorePrecise)) {
        winnerLoser = `The ${animal.name} is stonger than you!`
    } else {
        winnerLoser = `Looks like I'm stonger than a ${animal.name}`
    }

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
            <div className="animal__breed">Weight: {animal.animalWeight}lbs</div>
            <div className="animal__location">Lifting Strength: {animal.animalStrength}lbs</div>
            <div className="animal__location">The {animal.name}'s' {animalPFP.toFixed(2)} vs Yours {Math.max(...getMorePrecise)}</div>
            <div>{winnerLoser}</div>
            
            
        </section>
    )

}