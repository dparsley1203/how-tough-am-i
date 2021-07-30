import React, { createContext, useState } from "react";


export const NoteContext = createContext()

export const NoteProvider = (props) => {

    const [notes, setNotes] = useState([])

    const getNotes = () => {
        return fetch("http://localhost:8088/dailynotes?_expand=user")
        .then(res => res.json())
        .then(setNotes)
    }

    const addNote = (noteObj) => {
        return fetch("http://localhost:8088/dailynotes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(noteObj)
        })
        .then(getNotes)
    }

    const getNoteById = (id) => {
        return fetch(`http://localhost:8088/dailynotes/${id}?_expand=user`)
        .then(res => res.json())
    }

    const deleteNote = noteId => {
        return fetch(`http://localhost:8088/dailynotes/${noteId}`, {
            method: "DELETE"
        })
        .then(getNotes)
    }

    const updateNote = noteObj => {
        return fetch(`http://localhost:8088/dailynotes/${noteObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(noteObj)
        })
          .then(getNotes)
      }

    return (
        <NoteContext.Provider value={{
            notes, getNotes, addNote, getNoteById, deleteNote, updateNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}