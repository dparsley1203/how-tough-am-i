import React, { useEffect } from "react"
import { useContext } from "react"
import { AnimalCard } from "./AnimalCard"
import { AnimalContext } from "./AnimalProvider"




export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        getAnimals()
    }, [])

    return (
        <div>
            <h2>Animals</h2>
            <div className="animal">
                {
                    animals.map(animal => {
                        return <AnimalCard key={animal.id} animal={animal} />
                    })
                }

            </div>

        </div>

    )
}

