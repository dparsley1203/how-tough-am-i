import React, { createContext, useState } from "react";


export const NoteContext = createContext()

export const NoteProvider = (props) => {

    const [notes, setNotes] = useState([])




    return (
        <AnimalContext.Provider value={{
            
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}