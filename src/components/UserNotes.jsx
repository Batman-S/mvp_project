import React from 'react'
import Note from './Note'
import axios from "axios"


const UserNotes = (props) => {
    console.log(props)
 
    const name = props.location.aboutProps.name;
    const date = props.location.aboutProps.date;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default UserNotes
