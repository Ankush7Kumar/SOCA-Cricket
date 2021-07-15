import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { SectionTilesProps } from '../utils/SectionProps';
import ListView from '../components/elements/ListView';
import Image from '../components/elements/Image'
import SectionHeader from '../components/sections/partials/SectionHeader';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Sponsors = ({
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
  const paragraph = 'Each year, our sponsors help us unite emerging cricketers all over southern Ontario. Our sponsors provide mentorship, equipments, and networking opportunities to support our players from around the world. Participants make lasting connections with our sponsors that extend past SOCA season. Stay tuned as we confirm more sponsors for the league.'



  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container pb-72" >

        <div className="ta-c text-color-high h2 fw-400 pt-32 pb-32 reveal-from-bottom" data-reveal-delay="200">

        <h1> Why become a <span className="text-color-primary">Sponsor</span> ? </h1>

        </div>

        <div className="ta-c reveal-from-bottom" data-reveal-delay="400" >{paragraph}</div>

        <div className="ta-c text-color-high h2 bold fw-400 pt-48 pb-32 reveal-from-bottom" data-reveal-delay="400" > Our Sponsors  </div>

        <div className="ta-c fw-400 pt-48 pb-32 reveal-from-bottom" data-reveal-delay="400" >



          <div className="aline-horizontal-sponsor to-flex-sponsor">


            <div className="to-flex p-2" >

              <Image
                className="has-shadow"
                className="to-fill-image"
                src={require('./../assets/images/batball.jpg')}
                alt="Unable to load image"
                width={200}
                height={200} />


            </div>
            <div className="to-flex p-2">

              <Image
                className="has-shadow"
                className="to-fill-image"
                src={require('./../assets/images/batball.jpg')}
                alt="Unable to load image"
                width={200}
                height={200} />


            </div>
            <div className="to-flex p-2"  >

              <Image
                className="has-shadow"
                className="to-fill-image"
                src={require('./../assets/images/batball.jpg')}
                alt="Unable to load image"
                width={200}
                height={200} />


            </div>
            <div className="to-flex p-2" >

              <Image
                className="has-shadow"
                className="to-fill-image"
                src={require('./../assets/images/batball.jpg')}
                alt="Unable to load image"
                width={200}
                height={200} />


            </div>





          </div>


          <div className="aline-horizontal-sponsor pt-72  to-flex-sponsor" style={{ backgroundColor: '' }} >


            <div className="to-flex p-2" >

              <Image
                className="has-shadow"
                className="to-fill-image"
                src={require('./../assets/images/batball.jpg')}
                alt="Unable to load image"
                width={200}
                height={200} />


            </div>
            <div className="to-flex p-2" >

              <Image
                className="has-shadow"
                className="to-fill-image"
                src={require('./../assets/images/batball.jpg')}
                alt="Unable to load image"
                width={200}
                height={200} />


            </div>
            <div className="to-flex p-2"  >

              <Image
                className="has-shadow"
                className="to-fill-image"
                src={require('./../assets/images/batball.jpg')}
                alt="Unable to load image"
                width={200}
                height={200} />


            </div>






          </div>


        </div>

      </div>



    </section>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.defaultProps = defaultProps;

export default Sponsors;