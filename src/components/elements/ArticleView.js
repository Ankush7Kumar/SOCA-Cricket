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

  const title = 'Southern Ontario Cricket League starting July 17 2021 after taking permissions from the city.'
  const body = 'After taking permissions from the city of Waterloo and Kitchener. The Southern Ontario Cricket Association is conducting their league starting the weekend of July 17 2021. CEO of SOCA, Parveen Sharma has put a lot of hard work in making this happen. This year, we have a new coach, Gagandeep Singh. Gagandeep Singh is an accomplished cricket of an international level. He has played Ranji Trophy in India for 12 years. He took 270 wickets in 66 Ranji Trophy matches. He has been part of Kings XI Punjab in Indian Premier League. He has played club cricket in UK for a few years and is coaching at SOCA.'
  const author = 'Ankush Kumar / 15 July 2021'
    //pull request test

  return (
    <section
      {...props}
    >
      <div className="container pb-72" >

        <div className="ta-l text-color-high h2 fw-400 pt-32 pb-32 reveal-from-bottom" data-reveal-delay="200">

        <h1>  <span className="text-color-primary">{title}</span> </h1>

        </div>

        <div className="ta-l reveal-from-bottom" data-reveal-delay="400" >{body}</div>

        <div className="ta-l text-color-high h3 bold fw-400 pt-48 pb-32 reveal-from-bottom" data-reveal-delay="400" >{author}</div>
      </div>



    </section>
  );
}

ArticleView.propTypes = propTypes;
ArticleView.defaultProps = defaultProps;

export default ArticleView;