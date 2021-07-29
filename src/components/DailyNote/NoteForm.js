import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { NoteContext } from "./NoteProvider"
import { useParams } from "react-router"
import { useState } from "react"

export const NoteForm = () => {

    const { getNotes, addNote, getNoteById, updateNote } = useContext(NoteContext)

    const [note, setNote] = useState({
        userId: 0,
        note: ""
    })

    const history = useHistory()
    const {noteId} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const formInputValue = (event) => {
        const newNote = {...note}
        newNote[event.target.id] = event.target.value
        setNote(newNote)
    }

    const saveNoteClick = (event) => {
        event.preventDefault()

        setIsLoading(true)
        if (noteId) {
        const userId = parseInt(localStorage.getItem("tough_customer"))
            updateNote({
                id: parseInt(note.id),
                userId: userId,
                note: note.note,
                timestamp: Date.now()
            })
            .then(() => history.push("/"))
        } else {

            const userId = parseInt(localStorage.getItem("tough_customer"))
            addNote({
                userId: userId,
                note: note.note,
                timestamp: Date.now()
            })
            .then(() => history.push("/"))
            }
         }

    useEffect(() => {
        getNotes()
        .then(() => {
        if(noteId) {
            getNoteById(noteId)
            .then(note => {
                setNote(note)
                setIsLoading(false)
            })
            } else {
                setIsLoading(false)
        }
        })
    }, [])

    return (
        <form>


<h2 className="resultForm__title"></h2>
            <fieldset className="noteForm__title">
                <div className="form-group">
                    <label htmlFor="note">Daily Note</label>
                    <input type="text" id="note" required autoFocus className="form-control" 
                    placeholder="Note" value={note.note} onChange={formInputValue}>
                    </input>
                </div>
            </fieldset>
            <button className="addButton"
            disabled={isLoading}
            onClick={saveNoteClick}>
                {noteId ? "Save Note" : "Add New Note" }
            </button>


        </form>
    )
}