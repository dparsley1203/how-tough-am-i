import React from "react"
import { Link } from "react-router-dom"

export const ExerciseCard = ({ exercise }) => {

    return (

        <section>

            <Link to={`/exercises/upperbody/${exercise.id}`}>
                
                <div className="img">
                    <img src={exercise.image} height="250px" width="250px" />
                </div>
            </Link>

        </section>
    )
}