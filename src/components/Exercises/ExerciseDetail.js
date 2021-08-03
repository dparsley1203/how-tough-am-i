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

    // const filterExercises = exercises.filter(exercise => {
    //     return exercise.exerciseTypeId === 1

    // })

    // const upper = filterExercises.map(exercise => {
    //     return exercise.title
    // })

    // console.log(filterExercises)
    return (
        <>
        <section>
            <div>The exercise tips below will focus on building upper body strength</div>
            <div>
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