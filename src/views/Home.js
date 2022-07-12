import React from 'react';

import classNames from 'classnames';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Teams from './Teams';
import Cta from '../components/sections/Cta';
import MatchList from '../components/elements/MatchList'
import CarouselView from '../components/elements/CarouselView'
import Image from '../components/elements/Image';
import PointsTable from '../components/elements/PointsTable'


const Home = ({
  topDivider,
  bottomDivider,
  ...props
}) => {

  const innerClasses = classNames(
    'teams-inner section-inner',
    'teams section',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );


  const notice = 'ATTENTION! Our dear sponsor Economy Lube Waterloo are glad to offer discounts to SOCA members for various automotive repairs. Please contact the manager Sam at 519-746-2677 to avail discounts.'

  //Points Table data
  const columnsPointsTable = [
    { id: 'rank', label: 'Rank', minWidth: 20, align: 'center', },
    { id: 'name', label: 'Name', minWidth: 170, },
    { id: 'pts', label: 'Pts', minWidth: 60 },
    {
      id: 'netrr',
      label: 'Net RR',
      minWidth: 60,
      align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'pld',
      label: 'Pld',
      minWidth: 60,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'w',
      label: 'W',
      minWidth: 60,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'l',
      label: 'L',
      minWidth: 60,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'nr',
      label: 'N/R',
      minWidth: 60,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
  ];


  function createDataPointsTable(rank, name, pts, netrr, pld, w, l, nr) {
    return { rank, name, pts, netrr, pld, w, l, nr };
  }

  const rowsPointsTable = [
    createDataPointsTable('16', 'Huskies Cricket', '12', '+0.342', 16, 6, 10, 0),
    createDataPointsTable('2', 'Sunrise Brown', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('3', 'Sunrise CC', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('4', 'ARCC', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('5', 'UW', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('6', 'Cambridge Rising Stars', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('7', 'Young 11', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('8', 'Victoria CC', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('9', 'Gladiators CC', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('10', 'Kitchener Raptors', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('11', 'Cambridge United', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('12', 'Cambridge CC', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('13', 'Proteas CC', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('14', 'Kitcherner Wolves CC', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('15', 'Grand River CC', 12, +0.3, 16, 6, 10, 0),
    createDataPointsTable('1', 'GujjarJatt CC', 12, +0.3, 16, 6, 10, 0),
  ];


  // Points Table data end



  var retval
  const isMobile = window.innerWidth <= 640;

  if (!isMobile) {
    retval = <div className="aline-horizontal-sponsor to-flex-sponsor">



      <a href="https://www.realtor.ca/agent/2000528/surjit-pablay-720-westmount-road-east-unit-b-kitchener-ontario-n2e2m6" target="_blank" className="to-flex p-2">

        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('./../assets/images/surjitpablay.jpeg')}
          alt="Unable to load image"
          width={200}
          height={200} />


      </a>

      <a href="https://www.welcometograinofsalt.ca/" target="_blank" className="to-flex p-2">

        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('./../assets/images/grainofsalt.png')}
          alt="Unable to load image"
          width={200}
          height={200} />


      </a>

      <a href="https://waterloo.dental/" target="_blank" className="to-flex p-2" >


        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('./../assets/images/abbasnaqvi.jpg')}
          alt="Unable to load image"
          width={200}
          height={200} />

      </a>



      <a href="https://www.punjabtax.solutions/" target="_blank" className="to-flex p-2">

        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('../assets/images/a1.jpg')}
          alt="Unable to load image"
          width={200}
          height={200} />

      </a>


      <a href="https://www.teamurbansignature.com" target="_blank" className="to-flex p-2">

        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('./../assets/images/randhir.jpeg')}
          alt="Unable to load image"
          width={200}
          height={200} />


      </a>


      <a href="https://www.instagram.com/sonyjewellers/?hl=en" target="_blank" className="to-flex p-2">

        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('./../assets/images/sonyjewelers.jpeg')}
          alt="Unable to load image"
          width={200}
          height={200} />


      </a>
      <a href="https://www.yelp.ca/biz/onkar-foods-and-spices-kitchener" target="_blank" className="to-flex p-2">

        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('./../assets/images/satnamsinghbisla.JPG')}
          alt="Unable to load image"
          width={200}
          height={200} />


      </a>


      <a href="https://economylube.com/" target="_blank" className="to-flex p-2" >


        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('./../assets/images/economy_lube_cropped.jpg')}
          alt="Unable to load image"
          width={200}
          height={200} />

      </a>




   </div>
  } else {
    retval = <div className="aline-vertical-sponsor-phone ">

      <div className="aline-horizontal-sponsor to-flex-sponsor" style={{ justifyContent: 'center' }}>


        <a href="https://www.realtor.ca/agent/2000528/surjit-pablay-720-westmount-road-east-unit-b-kitchener-ontario-n2e2m6" target="_blank" className="to-flex p-2" >

          <Image
            className="has-shadow"
            className="to-fill-image"
            src={require('./../assets/images/surjitpablay.jpeg')}
            alt="Unable to load image"
            width={200}
            height={200} />


        </a>

        <a href="https://www.welcometograinofsalt.ca/" target="_blank" className="to-flex p-2" >

          <Image
            className="has-shadow"
            className="to-fill-image"
            src={require('./../assets/images/grainofsalt.png')}
            alt="Unable to load image"
            width={200}
            height={200} />


        </a>

      </div>


      <div className="aline-horizontal-sponsor to-flex-sponsor" style={{ justifyContent: 'center' }}>

        

        <a href="https://waterloo.dental/" target="_blank" className="to-flex p-2" >


          <Image
            className="has-shadow"
            className="to-fill-image"
            src={require('./../assets/images/abbasnaqvi.jpg')}
            alt="Unable to load image"
            width={200}
            height={200} />

        </a>

        <a href="https://www.punjabtax.solutions/" target="_blank" className="to-flex p-2" >

          <Image
            className="has-shadow"
            className="to-fill-image"
            src={require('../assets/images/a1.jpg')}
            alt="Unable to load image"
            width={200}
            height={200} />

        </a>

      </div>

      <div className="aline-horizontal-sponsor to-flex-sponsor" style={{ justifyContent: 'center' }}>


        <a href="https://www.instagram.com/sonyjewellers/?hl=en" target="_blank" className="to-flex p-2" >

          <Image
            className="has-shadow"
            className="to-fill-image"
            src={require('./../assets/images/sonyjewelers.jpeg')}
            alt="Unable to load image"
            width={200}
            height={200} />


        </a>

        <a href="https://www.yelp.ca/biz/onkar-foods-and-spices-kitchener" target="_blank" className="to-flex p-2" style={{ justifyContent: 'center' }}>

        <Image
          className="has-shadow"
          className="to-fill-image"
          src={require('./../assets/images/satnamsinghbisla.JPG')}
          alt="Unable to load image"
          width={200}
          height={200} />


      </a>

      </div>


      <div className="aline-horizontal-sponsor to-flex-sponsor" style={{ justifyContent: 'center' }}>


      <a href="https://www.teamurbansignature.com" target="_blank" className="to-flex p-2">

          <Image
            className="has-shadow"
            className="to-fill-image"
            src={require('./../assets/images/randhir.jpeg')}
            alt="Unable to load image"
            width={200}
            height={200} />


        </a>


        <a href="https://economylube.com/" target="_blank" className="to-flex p-2" >


          <Image
            className="has-shadow"
            className="to-fill-image"
            src={require('./../assets/images/economy_lube_cropped.jpg')}
            alt="Unable to load image"
            width={200}
            height={200} />

        </a>

      </div>

    </div>




  }


  return (
    <div className={innerClasses}>


      <CarouselView ></CarouselView>

      <Hero className="illustration-section-01" />

      <div>
        <h1 className="mt-0 mb-16 ta-c reveal-from-bottom" data-reveal-delay="200">
          <a href="https://cricclubs.com/SouthernOntarioCricketLeague/" target="_blank">Click here for <span className="text-color-primary">Statistics</span></a>
        </h1>

      </div>

      <div className="ta-c  fw-400 pt-48 pb-32 reveal-from-bottom" data-reveal-delay="400" >
        <div className="ta-c text-color-high h2 bold fw-400 pt-48 pb-32 reveal-from-bottom" data-reveal-delay="400" > Our Proud Sponsors  </div>

        {retval}

        <div className="ta-c reveal-from-bottom" data-reveal-delay="400" >{notice}</div>

      </div>
    </div>
  );
}

export default Home;
