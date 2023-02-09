import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';


export default function Covid19() {

    const [data, setData] = useState([]);

    const getCoviddata = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const acdata = await res.json();
        setData(acdata.statewise)
    }

    useEffect(() => {
        getCoviddata();
    }, [])

    return (
        <>
            < Navbar />
            <div className="container">
                <div className='data-div'>
                    <h2 className='mb-5 text-center'><span className='font-weigth-bold'>India</span> <span className=''>Covid19 Dashboard</span></h2>
                </div>
                <div className='covid19 table-responsive'>
                    <table className='table table-hover'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>State</th>
                                <th>active</th>
                                <th>confirmed</th>
                                <th>deaths</th>
                                <th>recovered</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((CurElement, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{CurElement.state}</td>
                                            <td>{CurElement.active}</td>
                                            <td>{CurElement.confirmed}</td>
                                            <td>{CurElement.deaths}</td>
                                            <td>{CurElement.recovered}</td>
                                            <td>{CurElement.lastupdatedtime}</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
