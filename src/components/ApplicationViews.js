import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ResultProvider } from "./Results/ResultProvider"
import { ResultList } from "./Results/ResultList"
import { ResultForm } from "./Results/ResultForm"

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
            </ResultProvider>

            <Route>
                {/* Compare route */}
            </Route>

            <Route>
                {/* Exercise route */}
            </Route>
        </>
    )
}