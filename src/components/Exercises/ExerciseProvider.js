import React, { createContext, useState } from "react";


export const ExerciseContext = createContext()

export const ExerciseProvider = (props) => {

    const [exercises, setExercises] =useState([])

    const getExercises = () => {
        return fetch("http://localhost:8088/exercises?_embed=upperBody&_embed=lowerBody&_embed=core")
        .then(res => res.json())
        .then(setExercises)
    }

    const getUpperBodyExercises = () => {
        return fetch("http://localhost:8088/upperBody?_expand=exercise")
        .then(res => res.json())
        .then(setExercises)
    }

    const getLowerBodyExercises = () => {
        return fetch("http://localhost:8088/lowerBody?_expand=exercise")
        .then(res => res.json())
        .then(setExercises)
    }

    const getCoreExercises = () => {
        return fetch("http://localhost:8088/core?_expand=exercise")
        .then(res => res.json())
        .then(setExercises)
    }

    //Stretch goal
    const addExercise = (exerciseObj) => {
        return fetch("http://localhost:8088/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exerciseObj)
        })
        .then(getExercises)
    }

    const getExerciseById = (id) => {
        return fetch(`http://localhost:8088/exercises/${id}`)
            .then(res => res.json())
    }

    //Stretch goal
    const deleteExercise = exerciseId => {
        return fetch(`http://localhost:8088/exercises/${exerciseId}`, {
          method: "DELETE"
        })
          .then(getExercises)
    }

    return (
        <ExerciseContext.Provider value={{
            exercises, getExercises, getExerciseById, addExercise, deleteExercise, getUpperBodyExercises, getLowerBodyExercises, getCoreExercises
        }}>
            {props.children}
        </ExerciseContext.Provider>
    )
}