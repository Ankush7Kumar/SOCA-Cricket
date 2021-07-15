import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const ArticleView = ({
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
  const paragraph = 'Each year, our ArticleView help us unite emerging cricketers all over southern Ontario. Our ArticleView provide mentorship, equipments, and networking opportunities to support our players from around the world. Participants make lasting connections with our ArticleView that extend past SOCA season. Stay tuned as we confirm more ArticleView for the league.'



  return (
    <section
      {...props}
    >
      <div className="container pb-72" >

        <div className="ta-l text-color-high h2 fw-400 pt-32 pb-32 reveal-from-bottom" data-reveal-delay="200">

        <h1>  <span className="text-color-primary">Why become a Sponsor ?</span> </h1>

        </div>

        <div className="ta-l reveal-from-bottom" data-reveal-delay="400" >{paragraph}</div>

        <div className="ta-l text-color-high h3 bold fw-400 pt-48 pb-32 reveal-from-bottom" data-reveal-delay="400" > Our ArticleView  </div>
      </div>



    </section>
  );
}

ArticleView.propTypes = propTypes;
ArticleView.defaultProps = defaultProps;

export default ArticleView;