import React from 'react'
import { Link } from 'react-router-dom'

function Servicesbox({ heading, images, text }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 dtl-services-box-col">
                <div className="dtl-services-col_box">
                    <div className="dtl-services-box__image-box">
                        <img src={images} alt="" className="dtl-services-box__image-box_img" />
                    </div>
                    <div className="dtl-services-box_content text-center mt-4">
                        <h4 className="dtl-small-heading mb-3">{heading}</h4>
                        <p className="dtl-primary-ligth-small-text mb-5">
                            {text}
                        </p>
                        <Link to="" className='dtl-link-blue-text'>Read More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

function WhyChooseUs({ title, images, text }) {
    return (
        <>
            <div className="col-lg-12 col-md-12 col-12 mb-lg-4 mb-md-0 mb-4">
                <div className="wcu_col-img-box d-lg-flex d-md-flex d-block text-lg-start text-md-start text-center">
                    <div className="wcu_col-img-box_image-div pe-lg-3 pe-md-3 pe-0">
                        <img src={images} alt="" className="wcu_col-img-box_image-div_image"></img>
                    </div>
                    <div className="wcu_col-img-box_content ps-lg-3 ps-md-3 ps-0">
                        <h6 className="dtl-small-heading mb-3">{title}</h6>
                        <p className='dtl-primary-ligth-small-text'>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

function OurProject({ heading, images, text }) {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-12 dtl-common-box-col">
                <div className="dtl-common_box">
                    <div className="dtl-common-box__image-box">
                        <img src={images} alt="" className="dtl-common-box__image-box_img" />
                    </div>
                    <div className="dtl-common-box_content text-center mt-3">
                        <h4 className="dtl-primary-black-heading mb-0">{heading}</h4>
                        <p className="dtl-primary-ligth-small-text mb-0">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

function CommonBanner({ heading, text ,categorytext }) {
    return (
        <>
            <div className="container">
                <div className="dtl-banner-heading-wrapper">
                    <h2 className='dtl-banner-heading text-center mb-0'>{heading}</h2>
                </div>
                <div className="dtl-text-wrapper text-center">
                    <Link to="/" className="dtl-banner-link-text">Home</Link>
                    <i className="dtl-breadcomb-icon fas fa-circle"></i>
                    <span className="dtl-banner-link-text">{text}</span>
                    <i className="dtl-breadcomb-icon fas fa-circle"></i>
                    <span className="dtl-banner-link-text after">{categorytext}</span>
                </div>
            </div>
        </>
    )
}

function Founderbox({ images, title, text, info }) {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="company-founder_image-box_content">
                    <img src={images} alt="" class="company-founder_image-box_img"></img>
                    <div className="company-founder_image_content">
                        <h6 className="dtl-small-heading mb-1">{title}</h6>
                        <p className='dtl-link-blue-text mb-0'>
                            {text}
                        </p>
                        <div className="dtl-site_social-icon cf-icon d-flex">
                            <div className="dtl-site__social-icon_box me-3">
                                <Link to='#'><i className="fab fa-twitter dtl-site__social-icon_box-icon"></i></Link>
                            </div>
                            <div className="dtl-site__social-icon_box me-3">
                                <Link to='#'><i className="fab fa-linkedin-in dtl-site__social-icon_box-icon"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-sm-0 mb-5">
                <div className="company-founder-box_content">
                    <p className='dtl-primary-ligth-small-text'>
                        {info}
                    </p>
                </div>
            </div>
        </>
    )
}

function CommonBox({ heading, images, text, Linktext }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 dtl-common-box-col">
                <div className="dtl-common_box">
                    <div className="dtl-common-box__image-box">
                        <i className={images}></i>
                    </div>
                    <div className="dtl-common-box_content text-center mt-4">
                        <h4 className="dtl-extra-small-heading mb-2">{heading}</h4>
                        <p className="dtl-primary-ligth-small-text mb-0">
                            {text}
                        </p>
                        <Link to='mailto:info@droptechnolab.com' className="dtl-link-blue-text">{Linktext}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}



export { Servicesbox, WhyChooseUs, OurProject, CommonBanner, Founderbox, CommonBox };
