import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function User() {
    const { fname } = useParams("abhi");
    const alocation = useLocation();
    console.log(alocation)
    return (
        <>
            <div> User {fname} Abhi</div>
            <h1> this page location {alocation.pathname}</h1>
        </>
    )
}
