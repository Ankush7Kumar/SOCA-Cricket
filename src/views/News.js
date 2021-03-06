import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
//import SectionHeader from '../components/sections/partials/SectionHeader';
import NewsView from '../components/elements/NewsView'
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const News = ({
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
     author: 'Ankush Kumar / 15 July 2021'},
     {title: 'Bulle Dog', body: 'William Shakespeare, often called Englands national poet, is considered the greatest dramatist of all time. His works are loved throughout the world, but Shakespeares personal life is shrouded in mystery. jashandoiornrion',
     author: 'Bulle Shah / 14 July 2021'},
     {title: 'Huskies Cricket', body: 'William Shakespeare, often called Englands national poet, is considered the greatest dramatist of all time. His works are loved throughout the world, but Shakespeares personal life is shrouded in mystery. jashandoiornrion',
     author: 'Bulle Shah / 14 July 2021'},
     {title: 'Bulle Dog', body: 'William Shakespeare, often called Englands national poet, is considered the greatest dramatist of all time. His works are loved throughout the world, but Shakespeares personal life is shrouded in mystery. jashandoiornrion',
     author: 'Bulle Shah / 14 July 2021'}
  ];

  const outerClasses = classNames(
    'teams section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'teams-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

   

  var preview = ''

  var rows = [];
for (var i = 0; i < 1; i++) {
    preview = articles[i].body.substring(0,210)
    rows.push(<NewsView title={articles[i].title} preview={preview} author={articles[i].author}  />);
}
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" >
        <div className={innerClasses }>
          <div className={tilesClasses}>

       {rows}

          </div>
        </div>
      </div>
    </section>
  );
}

News.propTypes = propTypes;
News.defaultProps = defaultProps;

export default News;