import React from 'react'
import Calendar from "react-calendar"
import { CommonSubHeading } from './Heading'

export default function DtlCalendar() {
    return (
        <>
            <section className='Dtl-calendly dtl-space-bottom'>
                <div className="container">
                    <CommonSubHeading title="Let's Talk" text="Schedule your meeting with our Expert to convert your vision into mission."></CommonSubHeading>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 d-lg-block d-md-block d-none">
                            <div className="dtl-services-category_image-box">
                                <img src="./images/audience.png" alt="" className="dtl-services-category_image-box_img" style={{ width: "100%", maxWidth: "435px", height: "auto" }}></img>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="">
                                <h4 className="dtl-common-text text-center me-lg-5 me-md-5 me-0">Select a day</h4>
                            </div>
                            <Calendar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
