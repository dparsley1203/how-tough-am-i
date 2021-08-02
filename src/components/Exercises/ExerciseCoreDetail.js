import React, { useContext, useEffect, useState } from "react"
import { ExerciseContext } from "./ExerciseProvider"
import { ExerciseLowerBodyCard} from "./ExerciseLowerBodyCard"



export const ExerciseCoreDetail = () => {

    const { exercises, getExercises } = useContext(ExerciseContext)

    
    useEffect(() => {
        getExercises()
    }, [])

    return (
        <>
        <section>
            <div>hello</div>
            <div>
                {
                    
                    exercises.filter(exercise => {
                        return exercise.exerciseTypeId === 3
                    }).map(exercise => {
                        return <ExerciseLowerBodyCard key={exercise.id} exercise={exercise} />
                    })
                }   
                
                </div>
        </section>
        </>
    )

}