import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ExerciseContext } from "./ExerciseProvider"
import { ExerciseCard } from "./ExerciseCard"


export const ExerciseHomePage = () => {

    const { exercises, getExercises } = useContext(ExerciseContext)
    const filteredExercises = exercises.filter(exercise => {
        return exercise.exerciseTypeId === exercise.exerciseType?.upperBody
    })

   
    
    
    


    useEffect(() => {
        getExercises()

    }, [])

    return (
        <>
            <Link to={"/exercises/upperbody/"}>
                <h2>Upper Body Exercises</h2>
            </Link>

            <Link to={"/exercises/lowerbody"}>
                <h2>Lower Body Exercises</h2>
            </Link>

            <Link to={"/exercises/core"}>
                <h2>Core Exercises</h2>
            </Link>
        </>
    )
}