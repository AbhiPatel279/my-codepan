import React from 'react'
import DtlNavbar from './DtlNav'
import Sitefooter from "./Footer"
import { CommonBanner } from './Common-sec'
import image from "./bg-image/pexels-karolina-grabowska-5632397-4.jpg"
import { useLocation } from 'react-router-dom'
import { CommonSubHeading, CommonInnerHeading } from './Heading'
import { ServicesCategoryContent, ServicesCategoryImage} from './service-common-sec'
import useDocumentTitle from './Title';

export default function PhpDev() {
    useDocumentTitle("PHP Development - Drop Techno Lab");
    const Location = useLocation();
    const url = Location.pathname.split("/");
    return (
        <>
            < DtlNavbar />
            <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
                <CommonBanner
                    heading="PHP Development"
                    text={url[1]}
                    categorytext={url[2]}
                />
            </section>
            <div className="container">
                < CommonSubHeading
                    title="What is PHP ?"
                    text="Our team provides the best custom PHP development services and solutions. Because our experts learn from what you need. So that they can create a suitable PHP web application for you.DropTechno Lab’s top PHP developers are experts in PHP based web app development services working on complex web development processes and building robust PHP websites. We are successful in design and development with our expertise in PHP frameworks like Laravel, CakePHP and CodeIgniter. "
                />
            </div>
            <section className="services-category-we-are-offering">
                <div className="container">
                    < CommonInnerHeading
                        subheading="What We're  offering"
                    />
                    <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
                        < ServicesCategoryContent
                            subheading="Custom PHP Development"
                            content={["Our company creates the best and user-friendly website using bespoke applications.",
                                "Using PHP, we build custom e-commerce websites for our clients.",
                                "We are providing a migration service from one Magento to another platform and another platform to magento.",
                                "To meet the needs of our clients, we build social applications using PHP.",
                                "We build custom PHP websites using OOP.",
                                "Bespoke Forum, Blogs and CMS sites."]}
                        />
                        < ServicesCategoryImage
                            image={"/images/pexels-realtoughcandycom-11035390-1.jpg"}
                        />
                    </div>
                    <div className="row align-items-center mb-5">
                        < ServicesCategoryImage
                            image={"/images/CodeIgniter-logo-1-scaled.jpg"}
                        />
                        < ServicesCategoryContent
                            subheading="CodeIgniter "
                            content={["We build highly functional and custom applications using CodeIgniter PHP framework.",
                                "We are Creating a secure and flexible CodeIgniter E-Commerce open-source websites.",
                                "We offer CodeIgniter upgrading services involving installation of the latest version to modification of the plugins.",
                                "We are available for your website maintenance and upgradation."]}
                        />
                    </div>
                    <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
                        < ServicesCategoryContent
                            subheading="Laravel"
                            content={["We build highly functional and custom applications in PHP using the Laravel Framework.",
                                "We are available 24*7 for your website maintenance and upgradation.",
                                "We provide upgrading service from the old version to the latest version."
                            ]}
                        />
                        < ServicesCategoryImage
                            image={"/images/laravel-graphic.jpg"}
                        />
                    </div>
                    <div className="row align-items-center">
                        < ServicesCategoryImage
                            image={"/images/cake-php-graphic.jpg"}
                        />
                        < ServicesCategoryContent
                            subheading="Cake PHP"
                            content={["We provide upgrading service from the old version to the latest version.",
                                "We build highly functional and custom applications using Cake framework.",
                                "We are available 24*7  for your website maintenance and upgradation."]}
                        />
                    </div>
                </div>
            </section>
            <section className="php-integration-sec">
                <div className="container">
                    < CommonSubHeading
                        title="Integration"
                        text="We integrate the best CRM software as per your specific business requirements.Our company provides custom CRM solutions and CRM software installation services.We are providing robust and secure ERP service. We help you to integrate different segments of your business on one platform.Our API integration services help you integrate your data with third party applications. We are also consuming data from a wide range of third party source."
                    />
                </div>
            </section>
            < Sitefooter />
        </>
    )
}
