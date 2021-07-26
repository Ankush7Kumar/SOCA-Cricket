import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import GalleryViewWrapper from './GalleryViewWrapper'
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
 

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container pb-72" >
<GalleryViewWrapper></GalleryViewWrapper>
     
      </div>



    </section>
  );
}

GalleryView.propTypes = propTypes;
GalleryView.defaultProps = defaultProps;

export default GalleryView;
