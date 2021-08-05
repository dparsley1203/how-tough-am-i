import React, { useEffect } from "react"
import { useContext } from "react"
import { AnimalCard } from "./AnimalCard"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"




export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)



    useEffect(() => {
        getAnimals()
    }, [])
    
    return (
        <div className="animalList">
            <h2>Click on an image below to compare your strength</h2>
            <h6>Strength is calculated based on physical strength divided by body weight</h6>
            <div className="animal">
                {
                    animals.map(animal => {
                        return <AnimalCard   key={animal.id} animal={animal} />
                    })
                    
                }


            </div>
        </div>

)
}

