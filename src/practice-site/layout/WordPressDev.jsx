import React from 'react'
import { CommonBanner } from '../common-layout/Common-sec'
import image from "../bg-image/fikret-tozak-Zk-Ydz2IAs-unsplash-2.jpg"
import { useLocation } from 'react-router-dom'
import { CommonSubHeading, CommonInnerHeading } from '../common-layout/Heading'
import { ServicesCategoryContent, ServicesCategoryImage, ServicesSmallBox } from '../common-layout/service-common-sec'
import Wordpress from "../dtl-images/Wordpress-Development.webp";
import WooCommerce from "../dtl-images/pexels-pixabay-35550-1536x1024.jpg"
import Multisite from "../dtl-images/multiple-computer-1536x1024.png"
import Theme from "../dtl-images/service-banner-1-scaled.jpg"
import Plugin from "../dtl-images/network-graphic-overlay-banner-laptop-3-1536x922.jpg"      
import useDocumentTitle from '../module/Title';

export default function WordPressDev() {
    useDocumentTitle("WordPress Development Drop Techno Lab - Digital Services");
    const Location = useLocation();
    const url = Location.pathname.split("/");
    return (
        <>
            <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
                <CommonBanner
                    heading="WordPress Development"
                    text={url[1]}
                    categorytext={url[2].replace("-"," ")}
                />
            </section>
            <div className="container">
                < CommonSubHeading
                    title="What is WordPress?"
                    text="DropTechno Lab is the leading company that provides you cost effective custom WordPress solutions and services that meet all your business needs. Our custom WordPress development services include API integration and customization, plugin development, theme development, maintenance and support, and more. That’s why our expertise and passion are on the table for your benefit."
                />
            </div>
            <section className="services-category-we-are-offering">
                <div className="container">
                    < CommonInnerHeading
                        subheading="What We're  offering"
                    />
                    <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
                        < ServicesCategoryContent
                            subheading="WordPress Development"
                            content={["We are providing Plugin development and theme        designing service as per your requirements.",
                                "We are transforming the PSD/Figma/XD files to wordpress as per your requirements.",
                                "We provide custom plugin service at an affordable rate.",
                                "Our custom-tailored development services include website development plugin development, theme customization, and E-Commerce development.", "We are providing third-party integration services.", "We install,customize and set up the theme as per your requirements.", "We are providing wordpress migration and maintenance service fastest with zero downtime.", "We offer comprehensive CMS installation and configuration including website setup; customized theme design and WordPress plugins development that matches scaling business needs."]}
                        />
                        < ServicesCategoryImage
                            image={Wordpress}
                        />
                    </div>
                    <div className="row align-items-center mb-5">
                        < ServicesCategoryImage
                            image={WooCommerce}
                        />
                        < ServicesCategoryContent
                            subheading="WooCommerce Developement"
                            content={["Woocommerce development services providing a secure online shopping experience.",
                                "We can install and adjust a ready-made theme or develop your custom design to meet your needs.",
                                "We are providing integration with third-party services like shipping, stock management, order management, payments and many more.",
                                "Our WooCommerce development services include custom-tailored UI-designing and theme integration for your online store.",
                                "We create custom Woocommerce plugins as per your requirements."]}
                        />
                    </div>
                    <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
                        < ServicesCategoryContent
                            subheading="Multisite Development"
                            content={["Managing multiple websites is now easy, fast and affordable using WordPress multisite development.",
                                "We are providing a perfect e-commerce solution using a multisite development service.",
                                "We are providing all multisite development services."]}
                        />
                        < ServicesCategoryImage
                            image={Multisite}
                        />
                    </div>
                    <div className="row align-items-center mb-5">
                        < ServicesCategoryImage
                            image={Theme}
                        />
                        < ServicesCategoryContent
                            subheading="Custom Theme Development"
                            content={["We are transforming the PSD/Figma/XD files to wordpress as per your requirements.",
                                "We provide the most unique and attractive custom theme service that matches with all the business requirements of the clients.",
                                "We are providing theme installation and theme setup service. So that you can manage it efficiently without any difficulty.",
                                "We are also providing WordPress Theme Customization Service.",
                                "We provide theme support and maintenance service. So that your WordPress theme will always be up to date and safe from bugs."]}
                        />
                    </div>
                    <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse">
                        < ServicesCategoryContent
                            subheading="Custom Plugin Development"
                            content={["We are developing a custom plugin that can easily integrate with the websites.",
                                "We are customizing existing plugins or adding new functionality in your existing plugin.",
                                "We are upgrading an old plugin with the latest wordpress plugin."]}
                        />
                        < ServicesCategoryImage
                            image={Plugin}
                        />
                    </div>
                </div>
            </section>
            <section className="wp-integration">
                <div className="container">
                    < CommonSubHeading
                        title="Integration"
                        text="The following are some of the popular 3rd party services we have integrated with WordPress. Our experts will help you integrate WordPress with any third party services."
                    />
                    <div className="dtl-box-row d-flex flex-wrap mrl-0 justify-content-center">
                        < ServicesSmallBox
                            BoxContent={[
                                {
                                    image: "/images/download-3.png",
                                    designation: "Zapier",
                                    Linktext: "https://zapier.com/"
                                },
                                {
                                    image: "/images/zoho-logo-512px.png",
                                    designation: "Zoho",
                                    Linktext: "https://www.zoho.com"
                                },
                                {
                                    image: "/images/download-2-1.png",
                                    designation: "Sales Force",
                                    Linktext: "https://www.salesforce.com/in/?ir=1"
                                },
                                {
                                    image: "/images/adobe2.png",
                                    designation: "Adobe Sign",
                                    Linktext: "https://www.adobe.com"
                                },
                                {
                                    image: "/images/integretion6.svg",
                                    designation: "Docu Sign",
                                    Linktext: "https://www.docusign.co.uk/"
                                },
                                {
                                    image: "/images/dtl-intigration-logo.svg",
                                    designation: "Mailchimp",
                                    Linktext: "https://mailchimp.com/"
                                },
                                {
                                    image: "/images/intigration.svg",
                                    designation: "Pipe Drive",
                                    Linktext: "https://www.pipedrive.com/"
                                },
                                {
                                    image: "/images/intigretionnew8.svg",
                                    designation: "Capsule CRM",
                                    Linktext: "https://capsulecrm.com/"
                                },
                                {
                                    image: "/images/Nordigen.png",
                                    designation: "Nordigen",
                                    Linktext: "https://nordigen.com/en/"
                                },
                                {
                                    image: "/images/company-house.png",
                                    designation: "Company House",
                                    Linktext: "https://www.gov.uk/government/organisations/companies-house"
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section className="wp-page-builder">
                <div className="container">
                    < CommonSubHeading
                        title="Page Builders"
                        text="Our team has a strong experience in building sites using the following page builders."
                    />
                    <div className="dtl-box-row d-flex flex-wrap mrl-0 justify-content-center">
                        < ServicesSmallBox
                            BoxContent={[
                                {
                                    image: "/images/elementor-icon.svg",
                                    designation: "Elementor",
                                    Linktext: "https://elementor.com/"
                                },
                                {
                                    image: "/images/beaver-footer.jpg",
                                    designation: "Beaver Builder",
                                    Linktext: "https://www.wpbeaverbuilder.com/"
                                },
                                {
                                    image: "/images/divi-divi-logo-1536x1536.png",
                                    designation: "Divi Builder",
                                    Linktext: "https://www.elegantthemes.com/"
                                },
                                {
                                    image: "/images/wpnakery.png",
                                    designation: "WPBakery Builder",
                                    Linktext: "https://wpbakery.com/"
                                },
                                {
                                    image: "/images/icon-128x128-1.jpg",
                                    designation: "Gutenberg",
                                    Linktext: "https://www.gutenberg.org/"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section className="wp-page-themes">
                <div className="container">
                    < CommonSubHeading
                        title="Popular Themes"
                        text="These are very few popular themes for WordPress. We have strong experience in customizing these themes. Also we create custom themes."
                    />
                    <div className="dtl-box-row d-flex flex-wrap mrl-0 justify-content-center">
                        < ServicesSmallBox
                            BoxContent={[
                                {
                                    image: "/images/divi-divi-logo-1536x1536.png",
                                    designation: "Divi Builder",
                                    Linktext: "https://www.elegantthemes.com/"
                                },
                                {
                                    image: "/images/avada.png",
                                    designation: "Avada",
                                    Linktext: "https://avada.theme-fusion.com/"
                                },
                                {
                                    image: "/images/astra.jpg",
                                    designation: "Astra",
                                    Linktext: "https://wpastra.com/"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section className="wp-populer-plugin">
                <div className="container">
                    < CommonSubHeading
                        title="Populer Plugins"
                        text="Our team has used these plugins to provide our customer with an affordable solution for their needs. We also have extensive experience in creating custom WordPress plugins."
                    />
                    <div className="dtl-box-row d-flex flex-wrap mrl-0 justify-content-center">
                        < ServicesSmallBox
                            BoxContent={[
                                {
                                    image: "/images/woo-commercce.png",
                                    designation: "WooCommerce",
                                    Linktext: "https://woocommerce.com/"
                                },
                                {
                                    image: "/images/member.png",
                                    designation: "Membership",
                                    Linktext: "https://wordpress.org/plugins/wp-members/"
                                },
                                {
                                    image: "/images/gravity-form.png",
                                    designation: "Gravity Form",
                                    Linktext: "https://www.gravityforms.com/"
                                },
                                {
                                    image: "/images/learndash.png",
                                    designation: "Learn Dash",
                                    Linktext: "https://wordpress.org/plugins/mycred-learndash"
                                },
                                {
                                    image: "/images/buddypress.svg",
                                    designation: "BuddyPress",
                                    Linktext: "https://wordpress.org/plugins/buddypress/"
                                },
                                {
                                    image: "/images/woo-commercce.png",
                                    designation: "WooCommerce Subscription",
                                    Linktext:"https://woocommerce.com/"
                                },
                                {
                                    image: "/images/bbpress.png",
                                    designation: "BBPress",
                                    Linktext:"https://wordpress.org/plugins/bbpress/"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section className="wp-file-handling">
                <div className="container">
                    < CommonSubHeading
                        title="File Handling"
                        text="We has file build solutions service to provide file handling solution. using following file storage applications."
                    />
                    <div className="dtl-box-row d-flex flex-wrap mrl-0 justify-content-center dtl-space-bottom ">
                        < ServicesSmallBox
                            BoxContent={[
                                {
                                    image: "/images/1024px-Amazon_Web_Services_Logo.png",
                                    designation: "AWS",
                                    Linktext: "https://aws.amazon.com"
                                },
                                {
                                    image: "/images/box.svg",
                                    designation: "Box",
                                    Linktext: "https://www.box.com"
                                },
                                {
                                    image: "/images/google-dpcs.png",
                                    designation: "Google Docs",
                                    Linktext: "https://www.google.com"
                                },
                                {
                                    image: "/images/dropbox2.png",
                                    designation: "Dropbox",
                                    Linktext: "https://www.dropbox.com/"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
