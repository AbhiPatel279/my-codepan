import React from 'react';
import { Link } from 'react-router-dom';

export default function Dtlbutton({ text }) {
  return (
    <>
      <div className='dtl-button-wrapper'>
        <Link to="/contact-us" className="dtl-common-button">{text}</Link>
      </div>
    </>
  )
}
