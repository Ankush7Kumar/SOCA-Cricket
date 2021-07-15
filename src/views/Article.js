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
      <ArticleView></ArticleView>



    </section>
  );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;