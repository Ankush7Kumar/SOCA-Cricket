import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const MatchResult = () => {
    const classes = useStyles();

  return (
   <div  className="matchsummarylistview" style={{flexDirection:'column',justifyContent:'center'}}>
    <div className="matchsummarylistview">Punjab Kings won by 100 runs</div>
    <Link to="/Stats/ScoreCard" >
      <Button style={{backgroundColor:'#ACADFF'}}  variant="contained" >
        Scorecard 
      </Button></Link>
    </div>
  );
}

export default MatchResult;