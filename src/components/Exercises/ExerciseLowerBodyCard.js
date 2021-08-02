import React from "react"

export const ExerciseLowerBodyCard = ({ exercise }) => {

    return (

        <section>
            <div>Title: {exercise.title}</div>
            <div>Description: {exercise.description}</div>
            <br></br>

        </section>
    )
}