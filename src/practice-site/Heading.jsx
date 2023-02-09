import React from 'react'

function Heading({ BlackHeading, text, Darktext }) {
    return (
        <>
            <div className="dtl-heading-wrapper">
                <h2 className='dtl-primary-black-heading text-center'>{BlackHeading}</h2>
                <p className="line"></p>
            </div>
            <div className="dtl-text-wrapper text-center">
                <p className="dtl-primary-light-text">{text}<strong>{Darktext}</strong></p>
            </div>
        </>
    )
}

function CommonSubHeading({ title, text, }) {
    return (
        <>
            <div className="dtl-common-title-section dtl-p">
                <div className="dtl-heading-wrapper">
                    <h2 className='dtl-primary-black-heading text-center'>{title}</h2>
                    <p className="line"></p>
                </div>
                <div className="dtl-common-text-wrapper text-center">
                    <p className="dtl-primary-light-text mb-0">{text}<strong></strong></p>
                </div>
            </div>
        </>
    )
}

function CommonInnerHeading({ subheading }) {
    return (
        <>
            <div className="dtl-heading-wrapper dtl-category-heading-wrapper">
                <h2 className='dtl-primary-black-heading text-center'>{subheading}</h2>
                <p className="line"></p>
            </div>
        </>
    )
}

function MediumHeading({ subheading }) {
    return (
        <>
            <div className="dtl-heading-wrapper">
                <h2 className='dtl-services-heading text-left mb-3'>{subheading}</h2>
            </div>
        </>
    )
}

export { Heading, CommonSubHeading, CommonInnerHeading, MediumHeading };