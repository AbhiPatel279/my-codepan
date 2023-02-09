import React from 'react'
import DtlNavbar from './DtlNav';
import Sitefooter from './Footer';
import { CommonBanner, Founderbox, OurProject } from './Common-sec';
import image from "./bg-image/About-banner.jpg"
import AboutHistory from "./bg-image/about-us-history-scaled.jpg"
import { useLocation } from 'react-router-dom';
import { Heading } from './Heading';
import Dtlbutton from './Dtlbutton';
import { OurTeam } from './Dtl-common-sec';
import useDocumentTitle from './Title';

export default function AboutPage() {
    useDocumentTitle("About Us - Drop Techno Lab");
    const Location = useLocation();
    return (
        <>
            <DtlNavbar />
            <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
                <CommonBanner
                    heading="About"
                    text={Location.pathname.split("/")}
                />
            </section>
            <section className="dtl_about-us-section section-spacing">
                <Heading
                    BlackHeading="About Us"
                    text="Anything is possible when we are connected. At DropTechnoLab we build all types of web app development, E-commerce website and provide all types of IT solutions. In short,"
                    Darktext="we do ordinary things in an extraordinary way.”"
                />
                <div className="container-fluid px-0">
                    <div className="row gx-0 mt-5">
                        <div className="col-lg-6">
                            <div className="about-us_image-col" style={{ backgroundImage: `url(${AboutHistory})` }}></div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="about-us__tab-col">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Our History</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Our Mission</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Our Values</button>
                                    </li>
                                </ul>
                                <div class="tab-content mb-5">
                                    <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <ul className="dtl_content-list">
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                Drop Techno Lab Company was established in the year
                                                <strong>2012.</strong>
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                Before starting the company both founder Nimit and Sameer had
                                                <strong>5+</strong>
                                                years of experience in website developments.
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                By the year<strong>2015</strong> we had a team of <strong>10+ </strong> employees. And, we have provided services and solutions to <strong>100+</strong> clients and completed <strong>1500+</strong>
                                                projects.
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">In the year <strong>2022</strong> we moved to the new office. And now we are a team of <strong>30+</strong> expert developers and Completed <strong>4000+</strong> projects successfully with <strong>95%</strong> of retention ratio.</li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <ul className="dtl_content-list">
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                Your vision is our mission. We are dedicated to turning your vision into reality for your company and your customer.
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                We are dedicated to empowering you with reliable services and solutions for your better business.
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                Our team of developers and experts will provide you the best solutions to overcome your problems.
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                We are also providing white label web development services.
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                                        <ul className="dtl_content-list">
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                <strong className="dtl-common-text d-block text-start">Leadership</strong>
                                                Your vision is our mission. We are dedicated to turning your vision into reality for your company and your customer.
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                <strong className="dtl-common-text d-block text-start">Excellence</strong>
                                                individually we are self-achievers. but as a team we devide the task and multiply the success.
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                <strong className="dtl-common-text d-block text-start">Agility</strong>
                                                we remain agile with a focus on problem solving capablities and effective communication to provide superior solutions to our clients.
                                            </li>
                                            <li className="dtl_content-list_item dtl-primary-ligth-small-text">
                                                <strong className="dtl-common-text d-block text-start">Passion</strong>
                                                we believe that our driven passion towards our work can lead us to our goal.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <Dtlbutton
                                    text="Discover More"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dtl_company-founder-section dtl-space-bottom">
                <Heading
                    BlackHeading="Company Founder"
                />
                <div className="container">
                    <div className="company-founder_box d-flex">
                        <div className="row mt-5">
                            < Founderbox
                                images="./images/nimitdudani.jpeg"
                                title="Nimit Dudani"
                                text="Founder"
                                info="Mr. Nimit Dudani is the Founder of Drop Techno Lab. He has been leading our company for 12+  years. And he has been associated with IT field for more than  years. He holds a Masters in Information Technology. He has good problem solving and analytical abilities. He believes in "
                            />
                            < Founderbox
                                images="./images/Sameer_Founder_image.jpg"
                                title="Samir Ladani"
                                text="Co-Founder"
                                info="Mr. Sameer Ladani is the co-founder of Drop Techno Lab. He has done post graduation in Msc IT. He has 15+  years of experience in the IT field and provides all types of web development services in the IT field. Clients appreciate his extensive experience in implementing IT projects in the IT industry. He believes that  “Your passion and hard work towards your work will lead you to your goals.”"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="dtl_our-team dtl-space-bottom">
                <div className="container">
                    <Heading
                        BlackHeading="Our Team"
                        text="Our team delivers a full range of skill sets to meet your needs up and down the stack, including strategic planners, project management professionals, and tactical specialists."
                    />
                    <div className="row mt-5">
                        < OurTeam />
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
                            heading="4000+"
                            images="./images/checkmark-icon-1.png"
                            text="Completed Project"
                        />
                        <OurProject
                            heading="600+"
                            images="./images/happy-icon.png"
                            text="Happy Clients"
                        />
                        <OurProject
                            heading="500+"
                            images="./images/multi-service.png"
                            text="Multi Services"
                        />
                        <OurProject
                            heading="95%"
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
