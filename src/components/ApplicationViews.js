import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route>
                {/* My Result path */}
            </Route>

            <Route>
                {/* Compare route */}
            </Route>

            <Route>
                {/* Exercise route */}
            </Route>
        </>
    )
}