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
            <h2 className="animal__title">Click on an image below to compare your strength</h2>
            <h6 className="animal__title">Calculations are based on physical strength, size, and body weight</h6>
            <div className="animal">
                {
                    animals.map(animal => {
                        return <AnimalCard   key={animal.id} animal={animal} />
                    })
                    
                }


            </div>
            <h6>Warning! For enterntainmet purposes only.  The author of this site is not responsible if you go and pick a fight with a creature above becuase you tested stronger.</h6>
        </div>

)
}

