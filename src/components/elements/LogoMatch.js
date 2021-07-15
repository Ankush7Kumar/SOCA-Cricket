import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';

const LogoMatch = () => {
  return (
   <>
  <div className="matchsummarylistview" >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"src={require('./../../assets/images/dhruv.jpg')} />
        </ListItemAvatar>
        <p style={{paddingTop:10, paddingRight:15}}>vs </p>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={require('./../../assets/images/dhruv.jpg')}/>
        </ListItemAvatar>
        </div>
        
   </>
  );
}

export default LogoMatch;