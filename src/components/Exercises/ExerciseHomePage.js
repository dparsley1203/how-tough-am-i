import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { ExerciseContext } from "./ExerciseProvider"
import { ExerciseCard } from "./ExerciseCard"
import maxrepchart from "../Pictures/maxrepchart.jpg"


export const ExerciseHomePage = () => {

    const { exercises, getExercises } = useContext(ExerciseContext)
    const history = useHistory()
    //not needed
    const filteredExercises = exercises.filter(exercise => {
        return exercise.exerciseTypeId === exercise.exerciseType?.upperBody
    })

   
    
    
    


    useEffect(() => {
        getExercises()

    }, [])

    return (
        <>  
        <section className="exercise__homepage">
            <Link to={"/exercises/maxrepchart/"}>
                <h3>Max Rep Chart</h3>
            </Link>

            <Link to={"/exercises/upperbody/"}>
                <h1>Upper Body Exercises</h1>
            </Link>

            <Link to={"/exercises/lowerbody"}>
                <h1>Lower Body Exercises</h1>
            </Link>

            <Link to={"/exercises/core"}>
                <h1>Core Exercises</h1>
            </Link>
        </section>
        </>
    )
}