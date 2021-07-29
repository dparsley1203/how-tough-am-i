import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import "./Note.css"
import { NoteContext } from "./NoteProvider"

export const NoteCard = ({ note }) => {

    const { deleteNote } = useContext(NoteContext)
    const history = useHistory()
    const handleDelete = () => {
        deleteNote(note.id)
        .then(() => {
            history.push("/")
        })
    }
    return (
        <section>
            <div className="note__card"> {note.note}
                <button onClick={() => history.push(`/notes/edit/${note.id}`)} className="note__button">Edit</button>
                <button onClick={handleDelete} className="note__button">Delete</button>
            </div>
        </section>
    )
}