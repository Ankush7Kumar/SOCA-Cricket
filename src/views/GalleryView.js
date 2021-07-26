import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import Image from '../components/elements/Image'
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import Modal from '../components/elements/Modal';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const GalleryView = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {


  const outerClasses = classNames(
    'teams section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  //const title = 'Why become a Sponsor?'
  const paragraph = 'Each year, our sponsors help us unite emerging cricketers all over southern Ontario. Our sponsors provide mentorship, equipments, and networking opportunities to support our players from around the world. Participants make lasting connections with our sponsors that extend past SOCA season. Stay tuned as we confirm more sponsors for the league.'




  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container pt-72 pb-72 ta-c" >
        <h1>This page is in the Making</h1>
        
      </div>

      
    </section>
  );
}

GalleryView.propTypes = propTypes;
GalleryView.defaultProps = defaultProps;

export default GalleryView;

