import React, { useContext, useEffect, useState } from "react"
import { ExerciseContext } from "./ExerciseProvider"
import { ExerciseCard } from "./ExerciseCard"


export const ExerciseDetail = () => {

    const { getExerciseById, exercises, getExercises } = useContext(ExerciseContext)
    const [ exercise, setExercise ] = useState({})
    // const { exerciseId } = useParams()

    useEffect(() => {
        getExercises()
        .then((response) => {
            setExercise(response)
        })
    }, [])

    return (
        <>
        <section>
            <div>The exercise tips below will focus on building upper body strength</div><br></br>
            <div className="exercise">
                {
                    
                    exercises.filter(exercise => {
                        return exercise.exerciseTypeId === 1
                    }).map(exercise => {
                        return <ExerciseCard key={exercise.id} exercise={exercise} />
                    })
                }   
                </div>
        </section>
        </>
    )
}