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
    { name: 'Cambridge CC', imag: 'profile.jpg' },
    { name: 'Cambridge Rising Stars', imag: 'profile.jpg' },
    { name: 'Grand River CC', imag: 'profile.jpg' },
    { name: 'Kitchener Wolves', imag: 'kitchenerwolvessolo.JPG' },

    { name: 'KW Kings XI', imag: 'arccsolo.jpg' },
    { name: 'Proteas CC', imag: 'profile.jpg' },
    { name: 'Sunrise CC', imag: 'profile.jpg' },
    { name: 'Warriors CC', imag: 'profile.jpg' },

    { name: 'Cambridge United', imag: 'profile.jpg' },
    { name: 'Huskies Cricket', imag: 'dhruv.jpg' },
    { name: 'Kitchener Raptors', imag: 'profile.jpg' },
    { name: 'Sunrise Stallions CC', imag: 'profile.jpg' },

    { name: 'Victoria CC', imag: 'victoriaccsolo.JPG' },
    { name: 'Waterloo Gladiators', imag: 'profile.jpg' },
    { name: 'Young 11', imag: 'young11solo.jpeg' },
    { name: 'ZMCC Kitchener', imag: 'profile.jpg' },
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
    rows.push(<Testimonial name={teamInfo[i].name} imag={teamInfo[i].imag} />);
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