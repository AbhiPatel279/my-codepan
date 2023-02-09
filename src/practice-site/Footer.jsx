import React from 'react';
import { Link } from 'react-router-dom';
import { PageLink } from './Dtl-common-sec';
import image from "./dtl-images/DropTechnolab.png"

export default function Sitefooter() {
    return (
        <>
            <footer className='site-footer'>
                <div className="container">
                    <div className="site-footer_content">
                        <div className="row gx-0">
                            <div className="col-lg-4 col-md-12 col-12 ps-0 site-footer_col mb-lg-0 mb-md-4 mb-4">
                                <div className="site-footer-about_col">
                                    <div className="site-footer_imgbox">
                                        <img src={image} alt="logo" className="site-footer_imgbox-img" />
                                    </div>
                                    <div className="site-footer-about_col-description">
                                        <p className="dtl-dark-blue-text ">DTL Digital Business Solutions Private Limited</p>
                                        <p className="dtl-primary-text">Anything is possible when we are connected. At DropTechno Lab we build all types of web app development, E-commerce website and provide all types of IT solutions and services. In short, <strong>“we do ordinary things in an extraordinary way.”</strong></p>
                                    </div>
                                    <div className="dtl-site_social-icon d-flex mt-4">
                                        <div className="dtl-site__social-icon_box me-3">
                                            <Link to='#'><i className="fab fa-facebook-f dtl-site__social-icon_box-icon"></i></Link>
                                        </div>
                                        <div className="dtl-site__social-icon_box me-3">
                                            <Link to='#'><i className="fab fa-instagram dtl-site__social-icon_box-icon"></i></Link>
                                        </div>
                                        <div className="dtl-site__social-icon_box">
                                            <Link to='#'><i className="fab fa-twitter dtl-site__social-icon_box-icon"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-12 site-footer_col px-lg-2 px-0 mb-lg-0 mb-md-0 mb-4">
                                <div className="site-footer_important-link_col">
                                    <h3 className="dtl-small-heading mb-3">important links</h3>
                                    <div className="site-footer_-link-box">
                                        < PageLink
                                            text="About"
                                            Linkpath="/about-us"
                                        />< PageLink
                                            text="Services"
                                            Linkpath="/services"
                                        />< PageLink
                                            text="Contact Us"
                                            Linkpath="/contact-us"
                                        />< PageLink
                                            text="Blog"
                                            Linkpath="/blog"
                                        />< PageLink
                                            text="Case Study"
                                            Linkpath="/case-study"
                                        />< PageLink
                                            text="Jobs"
                                            Linkpath="/jobs"
                                        />< PageLink
                                            text="Life at dtl"
                                            Linkpath="/life-at-dtl"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 ps-lg-5 ps-sm-0 px-lg-2 px-0 mb-lg-0 mb-md-0 mb-4 site-footer_col">
                                <div className="site-footer_feature-services_col">
                                    <h3 className="dtl-small-heading mb-3">Featured Service</h3>
                                    <div className="site-footer_-link-box">
                                        < PageLink
                                            text="Wordpress Development"
                                            Linkpath="/services/wordpress-development"
                                        />< PageLink
                                            text="E-commerce Development"
                                            Linkpath="/services/e-commerce-development"
                                        />< PageLink
                                            text="Website Maintance"
                                            Linkpath="/services/website-maintance"
                                        />< PageLink
                                            text="Web Consultancy"
                                            Linkpath="/services/web-consultancy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 site-footer_col px-lg-2 px-0">
                                <div className="site-footer-contact_col">
                                    <h3 className="dtl-small-heading mb-3">Contact</h3>
                                    <div className="site-footer-contact_col-icon-box d-flex mb-3">
                                        <div className="site-footer-contact_col-icon-box_image pe-3 pt-1">
                                            <i className="site-footer-contact_col-icon-box_image-icon fas fa-phone-alt"></i>
                                        </div>
                                        <div className="site-footer-contact_col-icon-box_content">
                                            <h6 className="dtl-primary-heading">Phone</h6>
                                            <div className="site-footer-contact_col-icon-box_content-icon-box d-flex align-items-center pb-2">
                                                <img src="./images/United-States-Flag.png" alt="" className="site-footer-contact_col-icon-box_content-icon-box_icon me-2">
                                                </img>
                                                <Link to="tell:+13313338521" className='site-footer-contact_col-icon-box_content-icon-box_icon-text'>+1 331 333 8521</Link>
                                            </div>
                                            <div className="site-footer-contact_col-icon-box_content-icon-box d-flex align-items-center">
                                                <img src="./images/India-Flag.png" alt="" className="site-footer-contact_col-icon-box_content-icon-box_icon me-2">
                                                </img>
                                                <Link to="tell:+919157898914" className='site-footer-contact_col-icon-box_content-icon-box_icon-text'>+91 915 7898 914</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="site-footer-contact_col-icon-box d-flex mb-3">
                                        <div className="site-footer-contact_col-icon-box_image pe-3 ">
                                            <i class="site-footer-contact_col-icon-box_image-icon fas fa-envelope"></i>
                                        </div>
                                        <div className="site-footer-contact_col-icon-box_content">
                                            <h6 className="dtl-primary-heading">Email</h6>
                                            <div className="site-footer-contact_col-icon-box_content-icon-box d-flex align-items-center">
                                                <Link to="mailto:info@droptechnolab.com" className='site-footer-contact_col-icon-box_content-icon-box_icon-text'>info@droptechnolab.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="site-footer-contact_col-icon-box d-flex">
                                        <div className="site-footer-contact_col-icon-box_image pe-3 ">
                                            <i class="site-footer-contact_col-icon-box_image-icon fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="site-footer-contact_col-icon-box_content">
                                            <h6 className="dtl-primary-heading">Address</h6>
                                            <address className='dtl-address-text'>
                                                202 Avani Icon, Near Shalby Hospital, Haridarshan Cross Road, New Naroda, Ahmedabad - 382330
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container">
                <div className="dtl-footer_copyrigth">
                    <p className="dtl-primary-ligth-small-text text-center mb-0">Copyright @ {(new Date().getFullYear())} DTL Digital Business Solutions Private Limited. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}
