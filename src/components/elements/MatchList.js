import React from 'react';
import MatchSummaryListView from './MatchSummaryListView';
import LogoMatch from './LogoMatch'
import MatchResult from './MatchResult'
const MatchList = () => {
  return (
    <div className="reveal-scale-down" data-reveal-delay="200">
      <div>July, 7 2021</div>
    <div style={{display:'flex', justifyContent:'space-around', flexDirection:'row', height:'120px'}} className="matchlistcolor  mb-16" >
      <LogoMatch></LogoMatch>
      <MatchSummaryListView ></MatchSummaryListView>
      <MatchResult></MatchResult>
      
    </div>
    </div>
  ); 
}

export default MatchList;