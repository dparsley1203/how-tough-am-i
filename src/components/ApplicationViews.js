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
import { ExerciseHomePage } from "./Exercises/ExerciseHomePage"
import { ExerciseDetail } from "./Exercises/ExerciseDetail"
import { ExerciseCoreDetail } from "./Exercises/ExerciseCoreDetail"
import { ExerciseLowerBodyDetail } from "./Exercises/ExerciseLowerBodyDetail"
import maxrepchart from "./Pictures/maxrepchart.jpg"
import chart from "./Pictures/chart.png"

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

                <Route exact path="/exercises/upperbody">
                    <ExerciseDetail />
                </Route>

                <Route exact path="/exercises/lowerbody">
                    <ExerciseLowerBodyDetail />
                </Route>

                <Route exact path="/exercises/core">
                    <ExerciseCoreDetail />
                </Route>

                <Route exact path="/exercises/maxrepchart">
                    <img src={chart} width="55%" height="55%"/>
                </Route>
            </ExerciseProvider>
        </>
    )
}