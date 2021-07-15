import React from 'react';
//import Teams from '../components/sections/Teams';
//import Cta from '../components/sections/Cta';
import Image from '../elements/Image';



const ListView = (props) => {
 
    return ( 
      <>
<div className=" reveal-from-left" data-reveal-delay="200">
              <div >
              
                <div className=" text-s mt-0 mb-32 ">
                  <span className="teams-item-name text-color-high">{props.name}</span>
                  <span className="text-color-low"> / </span>
                  <span className="teams-item-link">
                    {props.role}
                  </span>
                </div>
              </div>
            </div>
      </>
    );
  }
  
  export default ListView;