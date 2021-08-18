import React, { useContext, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import { Link, useHistory } from "react-router-dom"
import "./Note.css"
import logo from "../Pictures/logo.png"
import Swal from "sweetalert2"

export const NoteList = () => {

    const {notes, getNotes } = useContext(NoteContext)
    const history = useHistory()
    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div>
            <Link onClick={() => {Swal.fire("Use the website to find out!")}}>
                <img src={logo} height="120px" width="120px" />
            </Link>
            <h2 className="title">Daily Notes</h2>
            <button className="addButton" onClick={()=>{history.push("/notes/create")}}>Add new Note</button>
            <div className="note">
                {
                    
                    notes.filter((note) => parseInt(localStorage.getItem("tough_customer")) === note.userId )
                    .map(note => {
                        return <NoteCard key={note.id} note={note} />
                    })
                }

            </div>
        </div>
    )
}