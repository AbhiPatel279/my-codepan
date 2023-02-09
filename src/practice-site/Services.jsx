import React from 'react'
import { useLocation } from 'react-router-dom';
import { Servicesbox, CommonBanner } from './Common-sec';
import DtlNavbar from './DtlNav';
import Sitefooter from './Footer';
import { Heading } from './Heading';
import image from "./bg-image/service-banner-1-scaled.jpg"
import useDocumentTitle from './Title';

export default function Services() {
    useDocumentTitle("Services - Drop Techno Lab");
    const Location = useLocation();
    return (
        <>
            < DtlNavbar />
            <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
                <CommonBanner
                    heading="All Services"
                    text={Location.pathname.split("/")}
                />
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
            < Sitefooter />
        </>
    )
}
