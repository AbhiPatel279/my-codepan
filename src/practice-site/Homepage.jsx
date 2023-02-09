import React from 'react';
import { Link } from 'react-router-dom';
import DtlNavbar from './DtlNav';
import "./Practice.css";
import "./Dtlcommon.css"
import Sitefooter from './Footer';
import { Servicesbox, WhyChooseUs, OurProject } from './Common-sec';
import {Heading} from './Heading';
import useDocumentTitle from './Title';

export default function Homepage() {
    useDocumentTitle("Home - Drop Techno Lab");
    return (
        <>
            <DtlNavbar />
            <section className='Dtl-common-banner-homepage'>
                <div className='container'>
                    <div className='row gx-0'>
                        <div className='col-lg-6 col-md-12 col-12 px-0'>
                            <div className='dtl-banner_content'>
                                <div className='dtl-banner-title mb-3'>
                                    <h1 className='dtl-common-heading'>
                                        White Label Development Agency
                                    </h1>
                                </div>
                                <div className='dtl-banner-information'>
                                    <p className='dtl-common-text'>
                                        A team of highly experienced experts and skilled developers to provide you with any kind of web development services.
                                    </p>
                                </div>
                                <div className='dtl-button-wrapper mt-4'>
                                    <Link to="/" className='dtl-common-button'>Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 px-0'>
                            <div className='dtl-home-banner-img-wrapper'>
                                <img src="./images/main-img3-2.png" alt="" className='dtl-home-image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='dtl__home-services-section'>
                <div className="container">
                    <Heading
                        BlackHeading="Services"
                        text="Drop Techno Lab provides best customer focused services and build your ideas into reality. Our masterliness in desktop and open source customized development." />
                    <div className="row gx-0 mt-5 mrl-0">
                        < Servicesbox
                            heading="Wordpress Development"
                            text="We are the team of IT skilled experts who provide you any type of WordPress development services."
                            images="./images/wordpress-logo-1.png" />
                        < Servicesbox
                            heading="E-commerce Development"
                            text="We are here to build any kind of e-commerce website for your better business growth."
                            images="./images/icons8-shopping-cart-32.png" />
                        < Servicesbox
                            heading="PHP Development"
                            text="We provide all kind of desktop web PHP development services and open source customizations."
                            images="./images/php-logo.png" />
                        < Servicesbox
                            heading="Javascript Development"
                            text="We provide all kind of services for next generation frontend and backend JavaScript development."
                            images="./images/js-30.png" />
                        < Servicesbox heading="Website  Maintanance"
                            text="We provide you a hasslefree maintananace service option for your website."
                            images="./images/website-maintanance.png" />
                        < Servicesbox
                            heading="Web Consultancy"
                            text="As a web consultancy we provide all kinds of custom services and guidance to assist our clients."
                            images="./images/web-consultancy-icon.png" />
                    </div>
                </div>
            </section>
            <section className='dtl__home-why-choose-us'>
                <div className="container">
                    <Heading
                        BlackHeading="Why Choose Us"
                        text="Because “we’re converting great ideas into great apps by great people.”We provide you truly leading IT solutions for your better business growth." />
                    <div className="wcs_inner-columun d-flex align-items-lg-center align-items-md-start flex-lg-row flex-md-row flex-column mt-5">
                        <div className="row gx-0 flex-column pe-lg-4 pe-md-4 pe-0">
                            <WhyChooseUs
                                title="Client First"
                                images="./images/client-first-white.png"
                                text="For any business clients are always at the core. We always start with your ideas and we think from the perspective of your end users. And we provide a solution that solves key issues to help your business." />
                            <WhyChooseUs
                                title="Strong Expertise"
                                images="./images/achievement-2-white.png"
                                text="So, with our 10+ years of experience in working on different types of projects, you can expect higher quality with greater efficiency in less time. Because we believe in" />
                        </div>
                        <div className="wcs_inner-columun_img-col">
                            <img src="./images/mobile.png" alt="mobile" className="wcs_inner-columun_img-col_img" />
                        </div>
                        <div className="row gx-0 flex-column ps-lg-4 ps-md-4 ps-0">
                            <WhyChooseUs
                                title="On time Delivery"
                                images="./images/time-delivery-white.png"
                                text="“We do not over promise , we over-deliver our promise.”Because We respect your time and hence, you can always count on us for seamless project execution and timely delivery." />
                            <WhyChooseUs
                                title="Post Development Support"
                                images="./images/post-development-support-white.png"
                                text="We are not here to just build a robust solution for you, but also work with you in maintaining it post deployment." />
                        </div>
                    </div>
                </div>
            </section>
            <section className="dtl-home_our-project section-spacing">
                <div className="container">
                    <div className="dtl-heading-wrapper">
                        <h2 className='dtl-primary-black-heading text-center'>
                            We Have Completed <span className="dtl-highlight-text">4000+</span>
                            Projects <span className="dtl-highlight-text">Successfully</span>
                        </h2>
                    </div>
                    <div className="row mt-5 mrl-0">
                        <OurProject
                            heading ="4000+"
                            images="./images/checkmark-icon-1.png"
                            text="Completed Project"
                        />
                         <OurProject
                            heading ="600+"
                            images="./images/happy-icon.png"
                            text="Happy Clients"
                        />
                         <OurProject
                            heading ="500+"
                            images="./images/multi-service.png"
                            text="Multi Services"
                        />
                         <OurProject
                            heading ="95%"
                            images="./images/trophy-icon.png"
                            text="Retention Ratio"
                        />
                    </div>
                </div>
            </section>
            <Sitefooter />
        </>
    )
}

