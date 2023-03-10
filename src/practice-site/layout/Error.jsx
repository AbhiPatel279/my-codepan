import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <>
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
