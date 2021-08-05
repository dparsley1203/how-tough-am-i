import React from "react"
import { Link } from "react-router-dom"

export const ExerciseLowerBodyCard = ({ exercise }) => {
    
    return (

        <section>

            <Link to={`/exercises/lowerbody/${exercise.id}`}>
               
                <div className="img">
                    <img src={exercise.image} height="250px" width="250px" />
                </div>
            </Link>

        </section>
    )
}
