import React from "react"
import { useHistory } from "react-router-dom"
import "./Note.css"
export const NoteCard = ({ note }) => {

    const history = useHistory()

    return (
        <section>
            <div className="note__card"> {note.note}
                <button onClick={() => history.push(`/notes/edit/${note.id}`)} className="note__button">Edit</button>
                <button className="note__button">Delete</button>
            </div>
        </section>
    )
}