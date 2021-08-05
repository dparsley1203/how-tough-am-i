import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ResultContext } from "../Results/ResultProvider"
import { UserContext } from "../Users/UserProvier"
import { AnimalContext } from "./AnimalProvider"
import Swal from 'sweetalert2'


export const AnimalDetail = () => {

    const { getAnimalById } = useContext(AnimalContext)
    const { results, getResults } = useContext(ResultContext)
    const { users, getUsers } = useContext(UserContext)
    const [animal, setAnimal] = useState({})
    const { animalId } = useParams()

    const allUsers = users.filter(user => 
        user.id === parseInt(localStorage.getItem("tough_customer")))

    const oneUser = allUsers.map(user => user.name)

        
    

    const currentUserResults = results.filter(result => 
       result.userId ===  parseInt(localStorage.getItem("tough_customer")))
        
    const getMorePrecise = currentUserResults.map((result) => { 
       const totalWeight = parseInt(result.benchPress + result.squat + result.deadLift + result.powerClean)
       const PFP = totalWeight / parseInt(result.userWeight)
       return PFP.toFixed(2)
    })
    //removes one NaN but if mutliple exist it will not
    // const removeNan = getMorePrecise.indexOf("NaN")
    // if (removeNan > -1) {
        //     getMorePrecise.splice(removeNan, 1)
        // }

        const removeNan = getMorePrecise.filter(nan => nan !== "NaN")
        console.log(removeNan)
 


    const animalPFP = animal.animalStrength / animal.animalWeight

    const percentOne = animalPFP - Math.max(...removeNan)
    const AnimalPercentStronger = (percentOne / Math.max(...removeNan)) * 100

    const percentTwo = Math.max(...removeNan) - animalPFP
    const AnimalPercentWeaker = (percentTwo / animalPFP) * 100

    console.log(AnimalPercentStronger)
    console.log(AnimalPercentWeaker)
    
    let winnerLoser
    if (animalPFP > Math.max(...removeNan)) {

        // winnerLoser = `Bummer.  I didn't hardly beat the ${animal.name}`
        //update else statement and find out why it loads twice
        Swal.fire({
            title: `Winner! ${animal.name}`,
            text: `${AnimalPercentStronger.toFixed(0)}% Stronger Than You`, 
            imageUrl: `${animal.image}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })

    } else {
        //  winnerLoser = `WoW!! this ${animal.name} has nothing on me!`

        Swal.fire({
            title: `Winner! ${oneUser}`,
            text: `You Are ${AnimalPercentWeaker.toFixed(0)}% Stronger`,
            imageUrl: 'https://raw.githubusercontent.com/fufu70/react-confetti-canvas/HEAD/assets/canvas.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
  
      
    useEffect(() => {
        getAnimalById(animalId)
        .then((response) => {
            setAnimal(response)
        })
        .then(getResults)
        .then(getUsers)
    }, [])

    return (
        <section>
            <h3 className="animal__name">Name: {animal.name}</h3>
            <div className="animal__weight">Weight: {animal.animalWeight}lbs</div>
            <div className="animal__location">Lifting Strength: {animal.animalStrength}lbs</div>
            <div className="animal__location">The {animal.name}'s' {animalPFP.toFixed(2)} vs Yours {Math.max(...removeNan)}</div>
            <div>{winnerLoser}</div>
        </section>
    )

}