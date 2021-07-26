import React, { useState, useRef, useEffect } from 'react';
//import Teams from '../components/sections/Teams';
//import Cta from '../components/sections/Cta';
import Image from '../elements/Image'
import { Link, useParams } from 'react-router-dom';


const Testimonial = (props) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }
  const linkTo = "/Teams/"
  return (
    <>

      <div className="tiles-item reveal-from-left" data-reveal-delay="200">
        <div className="tiles-item-inner" >
          <div >
            <Image
              className="has-shadow"
              src={require('./../../assets/images/' + props.imag.toString() + '')}
              alt="Unable to load image"
              width={896}
              height={504} />
          </div>
          <div className="teams-item-footer text-xs mt-32 mb-0 has-top-divider">
            <span className=" text-color-high">{props.name}</span>
            <span className="text-color-low"> / </span>
            <span className="teams-item-link">
              <Link to={linkTo + props.name.replace(/\s/g, '')} onClick={closeMenu}>Players List</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;