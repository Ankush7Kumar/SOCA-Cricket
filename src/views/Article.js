import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import Image from '../components/elements/Image'
import ArticleView from '../components/elements/ArticleView';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Article = ({
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


    const articles = [
        {title: 'Southern Ontario Cricket League starting July 17 2021.', body: 'After taking permissions from the city of Waterloo and Kitchener. The Southern Ontario Cricket Association is conducting their league starting the weekend of July 17 2021. CEO of SOCA, Parveen Sharma has put a lot of hard work in making this happen. This year, we have a new coach, Gagandeep Singh. Gagandeep Singh is an accomplished cricket of an international level. He has played Ranji Trophy in India for 12 years. He took 270 wickets in 66 Ranji Trophy matches. He has been part of Kings XI Punjab in Indian Premier League. He has played club cricket in UK for a few years and is coaching at SOCA.',
         author: 'Ankush Kumar / 15 July 2021'}
         
      ];


  const outerClasses = classNames(
    'teams section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  //const title = 'Why become a Sponsor?'
  const paragraph = 'Each year, our Article help us unite emerging cricketers all over southern Ontario. Our Article provide mentorship, equipments, and networking opportunities to support our players from around the world. Participants make lasting connections with our Article that extend past SOCA season. Stay tuned as we confirm more Article for the league.'



  return (
    <section
      {...props}
    >
      <ArticleView title={articles[0].title} body={articles[0].body} author={articles[0].author}></ArticleView>



    </section>
  );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;