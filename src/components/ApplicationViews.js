import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ResultProvider } from "./Results/ResultProvider"
import { ResultList } from "./Results/ResultList"
import { ResultForm } from "./Results/ResultForm"
import { AnimalProvider } from "./Animal/AnimalProvider"
import { AnimalList } from "./Animal/AnimalList"
import { AnimalDetail } from "./Animal/AnimalDetail"
import { NoteList } from "./DailyNote/NoteList"
import { NoteProvider } from "./DailyNote/NoteProvider"
import { NoteForm } from "./DailyNote/NoteForm"
import { ExerciseList } from "./Exercises/ExerciseList"
import { ExerciseProvider } from "./Exercises/ExerciseProvider"

export const ApplicationViews = () => {
    return (
        <>
            <NoteProvider>
                <Route exact path="/">
                    <NoteList />
                </Route>

                <Route exact path="/notes/create">
                    <NoteForm />
                </Route>

                <Route exact path="/notes/edit/:noteId(\d+)">
                        <NoteForm />
                    </Route>
            </NoteProvider>

            <ResultProvider>
                    <Route exact path="/results">
                        <ResultList />
                    </Route>

                    <Route exact path="/results/create">
                        <ResultForm />
                    </Route>

                    <Route exact path="/results/edit/:resultId(\d+)">
                        <ResultForm />
                    </Route>
            </ResultProvider>

            <AnimalProvider>      
                <Route exact path="/animals">
                    <AnimalList />
                </Route>

                <ResultProvider>
                    <Route exact path="/animals/detail/:animalId(\d+)">
                        <AnimalDetail />
                    </Route>
                </ResultProvider>
            </AnimalProvider>
            
            <ExerciseProvider>
                <Route exact path="/exercises">
                    <ExerciseList />
                </Route>
            </ExerciseProvider>
        </>
    )
}