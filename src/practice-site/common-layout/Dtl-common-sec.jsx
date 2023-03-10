import React from 'react'
import Member from "../module/Ourteamcontent"
import { Link, NavLink } from 'react-router-dom';

function OurTeam() {
    return (
        <>
            {Member.map((currentelement, index) => {
                const { images, title } = currentelement;
                return (
                    <>
                        <div className="col-lg-3 col-md-6 col-12 mb-lg-4 mb-md-4 mb-4" key={index.toString()}>
                            <div className="company-founder_image-box_content">
                                <img src={images !== "" ? images : "./images/user_image.jpg"} alt="" class="company-founder_image-box_img"></img>
                            </div>
                            <div className="company-founder_image_content">
                                <h6 className="dtl-small-heading mb-0">{title}</h6>
                            </div>
                        </div>
                    </>
                )
            })};
        </>
    )
}

function PageLink({ Linkpath, text }) {
    return (
        <>
            <Link to={Linkpath} className='dtl-link-blue-text mb-2'>{text}</Link>
        </>
    )
}

function Submenu({ childmenu }) {
    return (
        <>
            <ul className="submenu__item position-absolute">
                {
                    childmenu.map((current, index) => {
                        const { category, sublink } = current;
                        return (
                            <>
                                <li className="pb-2 subMenu__item list-unstyled" key={index.toString()}>
                                    <Link to={sublink} className='Nav-menu_name  mb-2'>{category}</Link>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

function NavbBarlink({ Linkpath, text, childmenu }) {
    const mysub = () => {
        if (childmenu !== undefined) {
            return " submenu position-relative"
        } else {
            return ""
        }
    }

    return (
        <>
            <li className={`nav-item Nav-menu${mysub()}`}>
                <NavLink to={Linkpath} activeclassname="active" className="nav-link Nav-menu_name">
                    {text}</NavLink> {childmenu !== undefined ? <Submenu childmenu={childmenu} /> : ""}
            </li>
        </>
    )
}


export { OurTeam, PageLink, NavbBarlink, Submenu };
