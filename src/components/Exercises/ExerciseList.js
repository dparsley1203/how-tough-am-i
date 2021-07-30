import React, { useContext, useEffect } from "react"
import { ExerciseCard } from "./ExerciseCard"
import { ExerciseHomePage } from "./ExerciseHomePage"
import { ExerciseContext } from "./ExerciseProvider"



export const ExerciseList = () => {

    const { exercises, getExercises } = useContext(ExerciseContext)

    useEffect(() => {
        getExercises()
    }, [])

    return (

        <ExerciseHomePage />

        // <div>
        //     <h2>List of Exercises</h2>

        //     <div className="exercises">
        //         {
        //             exercises.map(exercise => {
        //                 return <ExerciseCard key={exercise.id} exercise={exercise} />
        //             })
        //         }
        //     </div>



        // </div>
    )
}