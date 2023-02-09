import React from 'react'
import DtlNavbar from './DtlNav'
import Sitefooter from "./Footer"
import { CommonBanner } from './Common-sec'
import image from "./bg-image/pexels-yan-krukau-8866725-1.jpg"
import { useLocation } from 'react-router-dom'
import { CommonSubHeading, CommonInnerHeading } from './Heading'
import { ServicesCategoryImageBox } from './service-common-sec'
import useDocumentTitle from './Title';

export default function WebConsultancy() {
  useDocumentTitle("Web Consultancy Drop Techno Lab - Digital Services");
  const Location = useLocation();
  const url = Location.pathname.split("/");
  return (
    <>
      < DtlNavbar />
      <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
        <CommonBanner
          heading="Web Consultancy"
          text={url[1]}
          categorytext={url[2]}
        />
      </section>

      <div className="container">
        < CommonSubHeading
          title="Web Consultancy"
          text="As an IT Consultancy Company, we provide all kinds of custom services and guidance to help our clients. These services support customers IT initiatives by providing strategic, architectural, operational and implementation planning. Strategic planning includes advisory services that help customers assess their IT needs and prepare a system implementation plan."
        />
      </div>
      <section className="services-category-we-are-offering dtl-pb">
        <div className="container">
          < CommonInnerHeading
            subheading="What We're  offering"
          />
          <div className="row mrl-0">
            < ServicesCategoryImageBox
              BoxContent={[
                {
                  id: "1",
                  image: "/images/projectmanage.jpg",
                  subheading: "Project Managament",
                  description: "We provide all project management related services from project planning to timely delivery of projects because we value your time and money."
                },
                {
                  id: "2",
                  image: "/images/project.jpg",
                  subheading: "Project Planning",
                  description: "We will help you plan your project from requirement gathering to testing and support, completed through execution processes in a specific time frame to achieve the desired software product."
                },
                {
                  id: "3",
                  image: "/images/audits.jpg",
                  subheading: "Website Audits",
                  description: "A site audit is one of the most powerful activities an SEO can undertake to increase the user experience, generate higher search visibility, and more so, Drop Techno Lab will provide the best SEO services to you."
                },
                {
                  id: "4",
                  image: "/images/problem.jpg",
                  subheading: "Problem & understanding",
                  description: "We understand the problems of the customers carefully and we are here to give you the best solution to solve your problem."
                },
                {
                  id: "5",
                  image: "/images/scope.jpg",
                  subheading: "Scope Understanding",
                  description: "As we said we believe in “quality work” not quantity work so we deliver your demands on time and on budget. "
                },
                {
                  id: "6",
                  image: "/images/wireframw.jpg",
                  subheading: "Wireframes and Prototypes",
                  description: "The Drop Techno Lab team has deployed many successful projects by providing wireframe and prototyping services."
                },
                {
                  id: "7",
                  image: "/images/quality.jpg",
                  subheading: "Quality Analysis",
                  description: "We are a team of skilled and dedicated quality analysts, we deliver superior and integrated testing service. Our experts enable us to understand the complexity of software testing projects, including automated rules-based testing, by choosing the right testing strategy."
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
