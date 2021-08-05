import React, { useContext, useEffect, useState } from "react"
import { ExerciseContext } from "./ExerciseProvider"
import { useParams } from "react-router"



export const ExerciseCorePictureDetail = () => {
    const { getExerciseById } = useContext(ExerciseContext)
    const [exercise, setExercise] = useState({})
    const { exerciseId } = useParams()

    useEffect(() => {
        getExerciseById(exerciseId)
        .then((response) => {
            setExercise(response)
        })
    }, [])

    return (
        <section>
            
        <div>Title: {exercise.title}</div>
        <div>Description: {exercise.description}</div>

        <br></br>

    </section>
    )
}