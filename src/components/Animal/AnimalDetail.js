import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ResultContext } from "../Results/ResultProvider"
import { UserContext } from "../Users/UserProvier"
import { AnimalContext } from "./AnimalProvider"
import Swal from 'sweetalert2'
import balloons from "../Pictures/balloons.jpg"



export const AnimalDetail = () => {

    const { getAnimalById } = useContext(AnimalContext)
    // const { users, getUsers } = useContext(UserContext)
    const { results, getResults } = useContext(ResultContext)
    const [animal, setAnimal] = useState({})
    const { animalId } = useParams()

    const currentUserResults = results.filter(result => 
       result.userId ===  parseInt(localStorage.getItem("tough_customer")))
        
    const getMorePrecise = currentUserResults.map((result) => { 
       const totalWeight = result.benchPress + result.squat + result.deadLift + result.powerClean
       const PFP = totalWeight / result.userWeight
       return PFP.toFixed(2)
    })

    const animalPFP = animal.animalStrength / animal.animalWeight
    let winnerLoser
    if (animalPFP > Math.max(...getMorePrecise)) {

        //update else statement and find out why it loads twice
        Swal.fire({
            title: `Not hardly as stong as ${animal.name}`,
            text: 'Modal with a custom image.',
            imageUrl: 'https://media1.tenor.com/images/31d69d9f660be148d7d8104335f0a0c1/tenor.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })

    } else {
        // winnerLoser = `Looks like I'm stonger than a ${animal.name}`
        Swal.fire({
            title: `Looks like I'm stonger than a ${animal.name}`,
            width: 600,
            padding: '3em',
            background: `#fff url(https://raw.githubusercontent.com/fufu70/react-confetti-canvas/HEAD/assets/canvas.gif)`,
            
        
            backdrop: `
            rgba(0,0,123,0.4)
            url()
            left top
            no-repeat
            `
        })
    }
  
      
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