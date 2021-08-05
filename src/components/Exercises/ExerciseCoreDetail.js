import React, { useContext, useEffect, useState } from "react"
import { ExerciseContext } from "./ExerciseProvider"
import { ExerciseCoreCard} from "./ExerciseCoreCard"



export const ExerciseCoreDetail = () => {

    const { exercises, getExercises } = useContext(ExerciseContext)

    
    useEffect(() => {
        getExercises()
    }, [])

    return (
        <>
        <section>
            <div>hello</div><br></br>
            <div className="exercise">
                {
                    
                    exercises.filter(exercise => {
                        return exercise.exerciseTypeId === 3
                    }).map(exercise => {
                        return <ExerciseCoreCard key={exercise.id} exercise={exercise} />
                    })
                }   
                
                </div>
        </section>
        </>
    )

}