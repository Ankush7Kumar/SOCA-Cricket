import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
//import SectionHeader from '../components/sections/partials/SectionHeader';
import Testimonial from '../components/elements/Testimonial'
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Teams = ({
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


  const teamInfo = [
    {name: 'Cambridge CC', imag: 'profile'},
    {name: 'Cambridge Rising Stars', imag: 'profile'},
    {name: 'Grand River CC', imag: 'profile'},
    {name: 'Kitchener Wolves', imag: 'profile'},

    {name: 'KW Kings XI', imag: 'profile'},
    {name: 'Proteas CC', imag: 'profile'},
    {name: 'Sunrise CC', imag: 'profile'},
    {name: 'University of Waterloo', imag: 'profile'},

    {name: 'Cambridge United', imag: 'profile'},
    {name: 'Huskies Cricket', imag: 'dhruv'},
    {name: 'Kitchener Raptors', imag: 'profile'},
    {name: 'Sunrise Stallions CC', imag: 'profile'},
    
    {name: 'Victoria CC', imag: 'profile'},
    {name: 'Waterloo Gladiators', imag: 'profile'},
    {name: 'Young 11', imag: 'profile'},
    {name: 'ZMCC Kitchener', imag: 'profile'},
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

  const sectionHeader = {
    title: 'Customer teamss',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };


  var rows = [];
for (var i = 0; i < teamInfo.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Testimonial name={teamInfo[i].name} imag={teamInfo[i].imag}  />);
}
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>





           

       {rows}




          </div>
        </div>
      </div>
    </section>
  );
}

Teams.propTypes = propTypes;
Teams.defaultProps = defaultProps;

export default Teams; 