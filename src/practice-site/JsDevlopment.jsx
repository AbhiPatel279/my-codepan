import React from 'react'
import DtlNavbar from './DtlNav'
import Sitefooter from "./Footer"
import { CommonBanner } from './Common-sec'
import image from "./bg-image/claudio-schwarz-i25aqE_YUZs-unsplash-5.jpg"
import { useLocation } from 'react-router-dom'
import { CommonSubHeading, CommonInnerHeading } from './Heading'
import { ServicesCategoryContent, ServicesCategoryImage,ServicesSmallBox } from './service-common-sec';
import useDocumentTitle from './Title';

export default function JsDevlopment() {
    useDocumentTitle("JavaScript Development - Drop Techno Lab");
    const Location = useLocation();
    const url = Location.pathname.split("/");
    return (
        <>
            < DtlNavbar />
            <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
                <CommonBanner
                    heading="JavaScript Development"
                    text={url[1]}
                    categorytext={url[2]}
                />
            </section>
            <div className="container">
                < CommonSubHeading
                    title="What is JavaScript?"
                    text="The Drop Techno Lab team is known for building feature-packed, efficient and scalable Java Script applications. Because JavaScript is an important building block of modern websites and applications. Working on an outsourcing and outstaffing model, our JavaScript developers generate high quality code and ensure faster project completion. We can help you to develop a robust, and secure application that will perfectly meet your needs. "
                />
            </div>
            <section className="services-category-we-are-offering">
                <div className="container">
                    < CommonInnerHeading
                        subheading="What We're  offering"
                    />
                    <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
                        < ServicesCategoryContent
                            subheading="Node JS Development"
                            content={["We build REST and JSON APIs to enable better security support, lightweight process and smooth user experience.",
                                "We integrate Node.js solution with your existing system by developing APIs to improve the functionality.",
                                "We provide backend API development for real time, collaborative,responsive and smart native mobile applications.",
                                "We provide end to end development, deployment and maintenance service for your project.",
                                "Our experts develop lightweight, user friendly and interactive web applications for you."]}
                        />
                        < ServicesCategoryImage
                            image={"/images/roberto-cortese-F1I4IN86NiE-unsplash-4.jpg"}
                        />
                    </div>
                    <div className="row align-items-center mb-5">
                        < ServicesCategoryImage
                            image={"/images/New-Project-4.jpg"}
                        />
                        < ServicesCategoryContent
                            subheading="Angular JS Development"
                            content={["Our single page application developers specialize in the creation of fast solutions that load quickly on your browser.",
                                "Our team of AngularJS experts builds custom applications that perfectly fit your business needs and are tailored to your vision.",
                                "We build fully-featured, futuristic progressive web apps.",
                                "We provide a migration service from AngularJS to Angular2.",
                                "We provide a perfect e-commerce solution for our clients Using the AngularJS framework."]}
                        />
                    </div>
                    <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
                        < ServicesCategoryContent
                            subheading="React Js "
                            content={["Our expert ReactJS developers build custom applications and provide solutions.",
                                "Drop Techno Lab provides the maintenance and support services for consistent and smooth performance of applications.",
                                "We provide ReactJS migration service to upgrade existing web applications to the ReactJS framework.",
                                "We enhance the custom ReactJS plugin as per your requirement.",
                                "Interactive UI design and highly engaging web applications development using the latest feature of ReactJS."
                            ]}
                        />
                        < ServicesCategoryImage
                            image={"/images/roberto-cortese-F1I4IN86NiE-unsplash-5.jpg"}
                        />
                    </div>
                    <div className="row align-items-center">
                        < ServicesCategoryImage
                            image={"/images/New-Project-6.jpg"}
                        />
                        < ServicesCategoryContent
                            subheading="Backend API Developments"
                            content={["We provide clean and well-structured programming code, using best development tools, and build high-performance APIs.",
                                "We integrate third-party APIs to use data and feature sharing in your applications.",
                                "We help businesses to build, analyze, operate, and scale APIs in secure environments.",
                                "API management can be delivered on-premises, through the cloud, or using a hybrid on-premises approach.",
                                "We build APIs that enable payments and appointments to be made, geolocation searches, and more to enrich your web and mobile functionality."
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section className="php-integration-sec">
                <div className="container">
                    < CommonSubHeading
                        title="Database Integaration "
                        text="We have strong experience in following database integration with any JavaScript frameworks and applications."
                    />
                    <div className="dtl-box-row d-flex flex-wrap mrl-0 justify-content-center dtl-space-bottom">
                        < ServicesSmallBox
                            BoxContent={[
                                {
                                    image: "/images/logo-mysql-170x115-1.png",
                                    designation: "MySQL",
                                    Linktext: "https://www.mysql.com/"
                                },
                                {
                                    image: "/images/mongodb.png",
                                    designation: "Mongo DB",
                                    Linktext: "https://www.mongodb.com/"
                                },
                                {
                                    image: "/images/sqr-logo.svg",
                                    designation: "Sequelize",
                                    Linktext: "https://sequelize.org/"
                                },
                                {
                                    image: "/images/elephant.png",
                                    designation: "PostgreSQL",
                                    Linktext: "https://www.postgresql.org/"
                                },
                                {
                                    image: "/images/no-sql-logo2.jpg",
                                    designation: "NoSQL",
                                    Linktext: "https://nosqlbooster.com/"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>
            < Sitefooter />
        </>
    )
}
