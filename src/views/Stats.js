import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
//import SectionHeader from '../components/sections/partials/SectionHeader';
import Testimonial from '../components/elements/Testimonial'
import PointsTable from '../components/elements/PointsTable'
import MatchList from '../components/elements/MatchList'
import MatchSummaryListView from '../components/elements/MatchSummaryListView';
import { Divider } from '@material-ui/core';
import ScheduleItem from '../components/elements/ScheduleItem';




const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Stats = ({
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

  const teams = ["Cambridge CC", "Cambridge Rising Stars", "Grand River CC", "Kitchener Wolves", 
  "Kw Kings XI", "Proteas CC", "Sunrise CC", "University of Waterloo", "Cambridge United", 
  "Huskies Cricket", "Kitchener Raptors", "Sunrise Stallions CC", "Victoria CC", "Waterloo Gladiators", 
  "Young 11", "Zmcc Kitchener"]
  const date = ["17 July 2021", "18 July 2021"]
  const venue = ["Waterloo Park", "Victoria Park"]


  const innerClasses = classNames(
    'teams-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );


  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div>  

            <ScheduleItem teams1={teams[0]} teams2={teams[5]} date={date[0]} venue={venue[1]} ></ScheduleItem>
            <ScheduleItem teams1={teams[10]} teams2={teams[14]} date={date[0]} venue={venue[0]} ></ScheduleItem>
            <ScheduleItem teams1={teams[11]} teams2={teams[15]} date={date[0]} venue={venue[0]} ></ScheduleItem>
            <ScheduleItem teams1={teams[6]} teams2={teams[3]} date={date[0]} venue={venue[0]} ></ScheduleItem>
            
            <ScheduleItem teams1={teams[8]} teams2={teams[12]} date={date[1]} venue={venue[1]} ></ScheduleItem>
            <ScheduleItem teams1={teams[4]} teams2={teams[1]} date={date[1]} venue={venue[0]} ></ScheduleItem>
            <ScheduleItem teams1={teams[9]} teams2={teams[10]} date={date[1]} venue={venue[0]} ></ScheduleItem>
            <ScheduleItem teams1={teams[7]} teams2={teams[2]} date={date[1]} venue={venue[0]} ></ScheduleItem>
            
          
          </div>
        </div>
      </div>
    </section>
  );
}

Stats.propTypes = propTypes;
Stats.defaultProps = defaultProps;

export default Stats;