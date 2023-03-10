import React from 'react';
import { CommonBanner, CommonBox } from "../common-layout/Common-sec";
import CommonForm  from '../common-layout/Commonform';
import { Heading } from '../common-layout/Heading';
import image from "../bg-image/work-bg.jpg";
import { useLocation, Link } from 'react-router-dom';
import useDocumentTitle from '../module/Title';

export default function ContactUs() {
    useDocumentTitle("Contact Us - Drop Techno Lab");
    const Location = useLocation();
    return (
        <>
            <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
                <CommonBanner
                    heading="Contact"
                    text={Location.pathname.split("/")}
                />
            </section>
            <section className="dtl_contact-us-address section-spacing">
                <div className="container">
                    <div className="row mrl-0">
                        <CommonBox
                            heading="Address"
                            images="fas fa-map-marker-alt"
                            text="202 Avani Icon, Near Shalby Hospital, Haridarshan Cross Road, New Naroda, Ahmedabad – 382330"
                        />
                        <CommonBox
                            heading="Email"
                            images="fas fa-envelope"
                            Linktext="info@droptechnolab.com"
                        />
                        <div className="col-lg-4 col-md-6 col-12 dtl-common-box-col">
                            <div className="dtl-common_box">
                                <div className="dtl-common-box__image-box">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="dtl-common-box_content text-center mt-4">
                                    <h4 className="dtl-extra-small-heading mb-2">Phone</h4>
                                    <div className="site-footer-contact_col-icon-box_content-icon-box d-flex align-items-center justify-content-center pb-1">
                                        <img src="./images/United-States-Flag.png" alt="" className="site-footer-contact_col-icon-box_content-icon-box_icon me-2">
                                        </img>
                                        <Link to="tell:+13313338521" className='site-footer-contact_col-icon-box_content-icon-box_icon-text'>+1 331 333 8521</Link>
                                    </div>
                                    <div className="site-footer-contact_col-icon-box_content-icon-box d-flex align-items-center justify-content-center">
                                        <img src="./images/India-Flag.png" alt="" className="site-footer-contact_col-icon-box_content-icon-box_icon me-2">
                                        </img>
                                        <Link to="tell:+919157898914" className='site-footer-contact_col-icon-box_content-icon-box_icon-text'>+91 915 7898 914</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dtl_contact-us-question dtl-space-bottom">
                <div className="container">
                    <Heading
                        BlackHeading="Have Any Questions About Us?"
                    />
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12 col-12">
                            < CommonForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
