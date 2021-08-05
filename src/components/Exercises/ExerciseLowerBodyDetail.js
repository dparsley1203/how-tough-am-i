import React, { useContext, useEffect, useState } from "react"
import { ExerciseContext } from "./ExerciseProvider"
import { ExerciseLowerBodyCard} from "./ExerciseLowerBodyCard"



export const ExerciseLowerBodyDetail = () => {

    const { exercises, getExercises } = useContext(ExerciseContext)

    
    useEffect(() => {
        getExercises()
    }, [])

    return (
        <>
        <section>
            <h3 className="exercise__title">Click on an image below to learn more about the exercise</h3><br></br>
            <div className="exercise">
                {
                    
                    exercises.filter(exercise => {
                        return exercise.exerciseTypeId === 2
                    }).map(exercise => {
                        return <ExerciseLowerBodyCard key={exercise.id} exercise={exercise} />
                    })
                }   
                
                </div>
        </section>
        </>
    )

}