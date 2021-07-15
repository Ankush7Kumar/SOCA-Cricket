import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import Image from '../components/elements/Image'

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Juniors = ({
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
    const paragraph1 = 'Little Champ Cricket Academy Introduces Canadian children to cricket in the KW region. The Kids Program is designed for boys, 6 – 18 years old, with focus on fun and maximum participation.Children can enjoy the process of learning and developing important physical skills such as throwing, catching, hitting and bowling, while improving balance, agility and speed. coaches provide an open, fun and safe learning environment, employing cricket activities and interactive, engaging games that teach essential social skills such as teamwork and leadership. '
    const paragraph2 = 'It’s a phase wise learning process with different levels Basic, Intermediate and Professional level and gradually promoting them to face senior leagues.'

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container pb-72" >

                <div className="ta-c text-color-high h2 fw-400 pt-32 pb-32 reveal-from-bottom" data-reveal-delay="100">

                    <div className="aline-horizontal-sponsor to-flex-sponsor">

                        <a href="https://www.facebook.com/Little-Champs-Cricket-Academy-112357617772189" target="_blank" className="to-flex p-2">

                            <Image
                                className="has-shadow"
                                className="to-fill-image"
                                src={require('./../assets/images/littlechamplogo.jpg')}
                                alt="Unable to load image"
                                width={200}
                                height={200} />

                        </a>



                    </div>

                    <h1> <span className="text-color-primary">Little Champ</span> Cricket Academy</h1>

                </div>

                <div className="ta-c reveal-from-bottom" data-reveal-delay="400" >{paragraph1}</div>


                <div className="ta-c reveal-from-bottom" data-reveal-delay="400" >{paragraph2}</div>

                <div className=" container-s pt-72 " data-reveal-delay="400">
                <Image
                                className="has-shadow"
                                className="to-fill-image"
                                src={require('./../assets/images/littlechamp.jpg')}
                                alt="Unable to load image"
                                
                                 />

                </div>


                </div>

     



        </section>
    );
}

Juniors.propTypes = propTypes;
Juniors.defaultProps = defaultProps;

export default Juniors;