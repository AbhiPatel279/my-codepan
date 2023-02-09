import React from 'react'
import { Link } from 'react-router-dom'
import DtlNavbar from './DtlNav'

export default function Error() {
    return (
        <>
            <DtlNavbar />
            <div className='container'>
                <div className="error-content">
                    <h1 className='text-center my-3'>404</h1>
                    <h1 className='text-center'>This page not found</h1>
                    <Link to="/" > Go Back </Link>
                </div>
            </div>
        </>
    )
}
