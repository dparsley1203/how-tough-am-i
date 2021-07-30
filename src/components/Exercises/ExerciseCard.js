import React from "react"
import { Link } from "react-router-dom"

export const ExerciseCard = ({ exercise }) => {

    return (

        <section>
            <Link to={`/exercises/upperbody${exercise.title}`}>
                <h2>{exercise.title}</h2>
            </Link>

        </section>
    )
}