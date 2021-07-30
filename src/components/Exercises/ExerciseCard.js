import React from "react"
import { Link } from "react-router-dom"

export const ExerciseCard = ({ exercise }) => {

    return (

        <section>
            <div>Title: {exercise.title}</div>
            <div>Description: {exercise.description}</div>
            <br></br>

        </section>
    )
}