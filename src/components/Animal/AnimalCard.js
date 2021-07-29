import React from "react"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => {

    return (
        <section>
            <Link to={`/animals/detail/${animal.id}`}>
                <h2> {animal.name}</h2>
            </Link>
        </section>

    )
}