import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import ScoreCardResult from '../components/elements/ScoreCardResult'
import Image from '../components/elements/Image';
import Button from '@material-ui/core/Button';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ScoreCard = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const [scorecard, setScorecard] = useState(true);
    const [teams, setTeams] = useState(false);
    const [ballbyball, setBallbyball] = useState(false);

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner container',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );


    function onScorecard() {
        console.log('I was triggered during onscorecard')
        setScorecard(true);
        setTeams(false);
        setBallbyball(false);
       
        console.log('kudichod1')
    }

    function onTeams() {
        console.log('I was triggered during onteams')
        setScorecard(false);
        setTeams(true);
        setBallbyball(false);
       
        console.log('kudichod2')
    }
    function onBallbyball() {
        console.log('I was triggered during onballbyball')
        setScorecard(false);
        setTeams(false);
        setBallbyball(true);
        
        console.log('kudichod3')
    }

    function renderState() {
        console.log('onballbyball')
        if (ballbyball) {
            console.log(ballbyball)
            console.log(scorecard)
            console.log(teams)
            console.log('onballbyball')

            return <p>ball by ball show ho reha</p>;
        } else if (teams) {
            console.log(ballbyball)
            console.log(scorecard)
            console.log(teams)
            console.log('onteams')

            return <p>teams show ho reha</p>
        } else {
            console.log('scorecard')
            console.log(ballbyball)
            console.log(scorecard)
            console.log(teams)

            return <p>scorecard show ho reha</p>
        }
    }





    return (
        <section
            {...props}>

            <ScoreCardResult></ScoreCardResult>

            <div>
                <div style={{ alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Button onClick={onScorecard} style={{ backgroundColor: '#ACADFF', margin: '2px' }} variant="contained" >
                            Scorecard
                        </Button>
                        <Button onClick={onBallbyball} style={{ backgroundColor: '#ACADFF', margin: '2px' }} variant="contained" >
                            Ball By Ball
                        </Button>
                        <Button onClick={onTeams} style={{ backgroundColor: '#ACADFF', margin: '2px' }} variant="contained" >
                            Teams
                        </Button>
                    </div>
                </div>
            </div>
             {renderState}
             
         </section>
    );
}

ScoreCard.propTypes = propTypes;
ScoreCard.defaultProps = defaultProps;

export default ScoreCard;