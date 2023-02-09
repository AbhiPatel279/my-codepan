import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar';
// import Image from './Image';

export default function Search() {

    const [img, setImg] = useState()

    const setval = (e) => {
        const data = e.target.value;
        setImg(data);
    }

    const imgs = `https://unsplash.com/photos/?${img}`;

    return (
        <>
            < Navbar />
            <div className="container">
                <div className='searchbar'>
                    <input className='search-input' type="text" value={img} onChange={setval} />
                </div>
                <img src={imgs} alt="search" />

            </div>
        </>
    )
}
