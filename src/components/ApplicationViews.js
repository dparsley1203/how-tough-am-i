import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ResultProvider } from "./Results/ResultProvider"
import { ResultList } from "./Results/ResultList"
import { ResultForm } from "./Results/ResultForm"
import { AnimalProvider } from "./Animal/AnimalProvider"
import { AnimalList } from "./Animal/AnimalList"
import { AnimalDetail } from "./Animal/AnimalDetail"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

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
            <Route>
                {/* Exercise route */}
            </Route>
        </>
    )
}