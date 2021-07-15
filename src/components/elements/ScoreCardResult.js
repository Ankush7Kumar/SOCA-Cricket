import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from './../../utils/SectionProps';
import { makeStyles } from '@material-ui/core/styles';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

const ScoreCardResult = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {



    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner  ',
         
    );
    const classes = useStyles();

    return (
 

        
        
 

        <div  className={innerClasses}  >

            <div style={{backgroundImage: `url(${require("./../../assets/images/ground1.jpeg")})`}} className="matchsummarylistviewresult" >
                <ListItemAvatar >
                    <Avatar className={classes.large} alt="Remy Sharp" src={require('./../../assets/images/scorecardresult.jpg')} />
                </ListItemAvatar>

                <div style={{color:'white'}}>
                    <p>Punjab Kings won by 100 runs</p>
                     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div style={{paddingRight:'8px'}} >
                        <div>TeamA</div>
                        <div>Score</div>
                        <div>Run Rate </div>
                        <div>Overs</div>
                    </div>
                    <div>
                        <div>TeamB</div>
                        <div>Score</div>
                        <div> Run Rate </div>
                        <div>Overs</div>
                    </div>
                    </div>
                </div>

                <ListItemAvatar>
                    <Avatar className={classes.large} alt="Remy Sharp" src={require('./../../assets/images/scorecardresult.jpg')} />
                </ListItemAvatar>
            </div>

     </div>





      
    );
}

ScoreCardResult.propTypes = propTypes;
ScoreCardResult.defaultProps = defaultProps;

export default ScoreCardResult;