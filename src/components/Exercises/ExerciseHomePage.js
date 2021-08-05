import React from "react"
import { Link } from "react-router-dom"
import "./Exercise.css"



export const ExerciseHomePage = () => {

 
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