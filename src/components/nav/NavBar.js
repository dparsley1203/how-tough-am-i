import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/results">My Results</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Compare</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/exercises">Exercises</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/logout">Logout</Link>
            </li>
        </ul>
    )
}