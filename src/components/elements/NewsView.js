import React, { useState, useRef, useEffect } from 'react';
//import Teams from '../components/sections/Teams';
//import Cta from '../components/sections/Cta';
import Image from '../elements/Image'
import { Link, useParams } from 'react-router-dom';
import { Divider } from '@material-ui/core';


const NewsView = (props) => {

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

      <div className="tiles-item-news to-flex reveal-from-left" data-reveal-delay="200"  >
 


          <div >
            <Image
              className="has-shadow"
              className="to-fill-image"
              src={require('./../../assets/images/batball.jpg')}
              alt="Unable to load image"
              width={400}
              height={400} />
          </div>



          <div  className="text-alignment tiles-item-inner-news" >
            <div className="teams-item-footer text-color-high to-fill-text-1" >
              <p> {props.title} </p>
            </div> 
            <div className=" text-xs has-top-divider to-fill-text-2" >
              <p className="has-top-divider news-preview-padding"> {props.preview} <span className="teams-item-link">
                <Link to="/Article" onClick={closeMenu}>... read more</Link>
              </span></p>
            </div >
            <div className="teams-item-footer  news-author-padding text-xs  to-fill-text-3" >
              <span className="teams-item-name text-color-high">{props.author}</span>
            </div>
          </div>


      </div>
    </>
  );
}

export default NewsView;