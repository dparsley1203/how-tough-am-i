import React from "react"
import { Link } from "react-router-dom"
import bear from "../Pictures/bear.jpg"
import toad from "../Pictures/toad.jpg"

export const AnimalCard = ({ animal }) => {

    // const pic = [{
    //     image: bear,
    //     image: toad
    // }]



    
    
    return (
        <section>

            <Link to={`/animals/detail/${animal.id}`}>
                {/* <h2> {animal.name}</h2> */}
                <div className="img">
                    <img src={animal.image} height="250px" width="250px" />
                </div>
            </Link>


        </section>
                
    )
}