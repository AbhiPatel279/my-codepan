import React from 'react'
import DtlNavbar from './DtlNav'
import Sitefooter from "./Footer"
import { CommonBanner } from './Common-sec'
import image from "./bg-image/pexels-field-engineer-442154-5.jpg"
import { useLocation } from 'react-router-dom'
import { CommonSubHeading, CommonInnerHeading } from './Heading'
import { ServicesCategoryImageBox } from './service-common-sec'
import useDocumentTitle from './Title';

export default function WebSiteMaintanance() {
  useDocumentTitle("Website Maintanance Drop Techno Lab - Digital Services");
  const Location = useLocation();
  const url = Location.pathname.split("/");
  return (
    <>
      < DtlNavbar />
      <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
        <CommonBanner
          heading="Website Maintanance"
          text={url[1]}
          categorytext={url[2]}
        />
      </section>

      <div className="container">
        < CommonSubHeading
          title="Website Maintanance"
          text="Let our website maintenance experts take care of your website so you can focus on your business. If you are looking for a monthly, hourly, or after-hours website maintenance plan, DropTechno Lab will provide you with the best plan which will help in your better business growth. Our team will provide you a fast, secure and seamless solution."
        />
      </div>
      <section className="services-category-we-are-offering dtl-pb">
        <div className="container">
          < CommonInnerHeading
            subheading="What We're  offering"
          />
          <div className="row mrl-0 ">
            < ServicesCategoryImageBox
              BoxContent={[
                {
                  id:"1",
                  image: "/images/WordPress-website-Maintananace.png",
                  subheading: "WordPress website Maintananace",
                  description: "We’re providing all kinds of maintenance services for wordpress web and app development."
                },
                {
                  id:"2",
                  image: "/images/PHP-website-Maintananace-1.jpg",
                  subheading: "PHP website Maintananace",
                  description: "We’re providing all kinds of maintenance services for PHP web and app development."
                },
                {
                  id:"3",
                  image: "/images/Javascript-Application-Maintanace-img.jpg",
                  subheading: "Javascript Application Maintanace",
                  description: "We’re providing all kinds of maintenance services for JavaScript web and app development."
                },
              ]}
            />
          </div>
        </div>
      </section>
      < Sitefooter />
    </>
  )
}
