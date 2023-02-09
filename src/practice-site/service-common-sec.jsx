import React from "react";

function ServicesCategoryContent({ content, subheading }) {
    return (
        <>
            <div className="col-lg-6 col-md-12 col-12 service-category-left-box">
                <div className="dtl_sevices-category-info-box">
                    <div className="dtl-heading-wrapper">
                        <h4 className='dtl-services-heading text-lg-start text-md-center text-center mb-lg-3 mb-md-2 mb-2'>{subheading}</h4>
                    </div>
                    <ul className="dtl_content-list">
                        {content.map((curelem, index) => {
                            return (
                                <>
                                    <li className="dtl_content-list_item dtl-primary-ligth-small-text" key={index.toString()}>
                                        {curelem}
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

function ServicesCategoryImage({ image }) {
    return (
        <>
            <div className="col-lg-6 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4 service-category-right-box">
                <div className="dtl-services-category_image-box">
                    <img src={image} alt="" className="dtl-services-category_image-box_img"></img>
                </div>
            </div>
        </>
    )
}

function ServicesSmallBox(props) {
    return (
        <>
            {props.BoxContent.map((curelem, index) => {
                const { image, designation, Linktext } = curelem;
                return (
                    <>
                        <div className="dtl-small-box">
                            <a href={Linktext} key={index.toString()}>
                                <div className="dtl-small-box-col">
                                    <div className="dtl-small-box_img-box">
                                        <img src={image} alt="" className="dtl-small-box_img-box_img" />
                                    </div>
                                    <div className="dtl-small-box_img-box-content text-center">
                                        <p className="dtl-extra-small-heading text-break mb-0">{designation}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </>
                )
            })}
        </>
    )
}

function ServicesCategoryImageBox(props) {
    return (
        <>
            {props.BoxContent.map((curelem, index) => {
                const { image, description, subheading, id } = curelem;
                return (
                    <>
                        <div className="col-lg-4 col-md-6 col-12 p-0 mb-4" key={id.toString()}>
                            <div className="dtl-category-box">
                                <div className="dtl-services-category_image-box">
                                    <img src={image} alt="" className="dtl-services-category_image-box_img"></img>
                                </div>
                                <div className="dtl-heading-wrapper px-4 pt-3 pb-4">
                                    <h4 className='dtl-services-heading text text-center mb-lg-3 mb-md-2 mb-2'>{subheading}</h4>
                                    <p className="dtl-primary-ligth-small-text text-center mb-0">{description}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export { ServicesCategoryContent, ServicesCategoryImage, ServicesSmallBox, ServicesCategoryImageBox };