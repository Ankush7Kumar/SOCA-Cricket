import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Management = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const managementOfficials = [{
    position: 'CEO', name: 'Parveen Sharma', infoo: 'He tookover SOCA in 1989 and since then, he has taken it to new heights. His mission is to grow the popularity of the great game of cricket in southern Ontario and all over Canada. His hardwork and dedication throughout the years has helped a number of domestic and international students build a career in cricket.',
    imagelink: 'sharma.jpg'
  },
  { position: 'President', name: 'Hariharan Krithivasan', infoo: 'He joined in 2019 and now is the president of SOCA. His work in association is taking the league to the next level.', imagelink: 'hari.jpeg' },
  { position: 'Director Of Operations', name: 'Parmod Shetty', infoo: 'He is the Senior Business Analyst in the reputated food industry and is a passionate cricketer. He takes care of Scheduling and ground booking. He has big plans for kids who wants to grow in cricket. Parmod takes care of marketing and also public relations at SOCA.', imagelink: 'parmodshetty.jpg' },
  { position: 'Head Of IT Operations', name: 'Chandru Muthukumaravel', infoo: 'He is specialized in Cloud Infrastructure Architect and working as an Site Reliability Engineer for a MSP company. He is Director of IT and Technical Services for SOCA website and very much passionate about cricket and takes care of technical services, Social Media, Website Development. Chandru takes care of running IT and website design at SOCA.', imagelink: 'chandru.jpg' },
  { position: 'Vice President', name: 'Gridhar Bannaravuri', infoo: 'He is the Captain of KAKATIYA WARRIORS and now he is the Vice president of SOCA. His passion towards cricket is above and beyond, his mission is to take cricket league to the next level.', imagelink: 'kw.jpg' },
  { position: 'Entrepreneur', name: 'Karthik', infoo: 'Entrepreneur, Takes care of Scheduling and Ground booking', imagelink: 'g60.jpg' },
  { position: 'Dicsciplinary Commity', name: 'Mankiran & Avi', infoo: 'Avi is very much passionate about cricket and takes care of Scheduling Umpires for all the league matches.', imagelink: 'g61.jpg' },
  ]


  return (
    <section
      {...props}
      className={outerClasses}
    >
      


      <div className="container">


        <FeaturesSplit position={managementOfficials[0].position} name={managementOfficials[0].name} infoo={managementOfficials[0].infoo} imag={managementOfficials[0].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={managementOfficials[1].position} name={managementOfficials[1].name} infoo={managementOfficials[1].infoo} imag={managementOfficials[1].imagelink} invertMobile imageFill className="illustration-section-02 " />
        <FeaturesSplit position={managementOfficials[2].position} name={managementOfficials[2].name} infoo={managementOfficials[2].infoo} imag={managementOfficials[2].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={managementOfficials[3].position} name={managementOfficials[3].name} infoo={managementOfficials[3].infoo} imag={managementOfficials[3].imagelink} invertMobile imageFill className="illustration-section-02 " />
        <FeaturesSplit position={managementOfficials[4].position} name={managementOfficials[4].name} infoo={managementOfficials[4].infoo} imag={managementOfficials[4].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={managementOfficials[5].position} name={managementOfficials[5].name} infoo={managementOfficials[5].infoo} imag={managementOfficials[5].imagelink} invertMobile imageFill className="illustration-section-02 " />
        <FeaturesSplit position={managementOfficials[6].position} name={managementOfficials[6].name} infoo={managementOfficials[6].infoo} imag={managementOfficials[6].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        
      </div>

    </section>
  );
}

Management.propTypes = propTypes;
Management.defaultProps = defaultProps;

export default Management;