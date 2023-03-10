import React from 'react'
import { Link } from 'react-router-dom';
import { NavbBarlink } from "../common-layout/Dtl-common-sec"
import image from "../bg-image/download-2.png"

export default function DtlNavbar() {
    return (
        <>
            <header>
                <div className="container-fluid px-0 ">
                    <nav className="navbar navbar-expand-lg py-0">
                        <div className='container'>
                            <div className='dtl-nav d-flex justify-content-between w-100 py-2'>
                                <div className="dtl-nav_content d-flex align-baseline justify-content-between">
                                    <div className='dtl-icon'>
                                        <Link className="navbar-brand" to="/">
                                            <img src={image} alt="" className='Site-icon' />
                                        </Link>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon d-flex flex-column justify-content-center">
                                            <span className='toggler-line'></span>
                                            <span className='toggler-line'></span>
                                            <span className='toggler-line'></span>
                                        </span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                                        < NavbBarlink
                                            text="Home"
                                            Linkpath="/"
                                        />
                                        < NavbBarlink
                                            text="Services"
                                            Linkpath="/services"
                                            childmenu={[
                                                {
                                                    category: "WordPress Development",
                                                    sublink: "/services/wordpress-development"
                                                },
                                                {
                                                    category: "E-Commerce Development",
                                                    sublink: "/services/e-commerce-development"
                                                },
                                                {
                                                    category: "PHP Development",
                                                    sublink: "/services/php-development"
                                                },
                                                {
                                                    category: "JavaScript Development",
                                                    sublink: "/services/javascript-development"
                                                },
                                                {
                                                    category: "Website Maintanance",
                                                    sublink: "/services/website-maintanance"
                                                },
                                                {
                                                    category: "Web Consultancy",
                                                    sublink: "/services/web-consultancy"
                                                },
                                            ]}
                                        />
                                        < NavbBarlink
                                            text="Case Studies"
                                            Linkpath="/case-study"
                                        />
                                        < NavbBarlink
                                            text="Blog"
                                            Linkpath="/blog"
                                        />
                                        < NavbBarlink
                                            text="About Us"
                                            Linkpath="/about-us"
                                            childmenu={[
                                                {
                                                    category: "About dtl",
                                                    sublink: "/about-us"
                                                },
                                                {
                                                    category: "Jobs",
                                                    sublink: "/about-us/jobs"
                                                },
                                                {
                                                    category: "Life at Dtl",
                                                    sublink: "/about-us/life-at-dtl"
                                                },
                                            ]}
                                        />
                                        < NavbBarlink
                                            text="Contact Us"
                                            Linkpath="/contact-us"
                                        />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
