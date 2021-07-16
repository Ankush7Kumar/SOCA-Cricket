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

const About = ({
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

  const aboutOfficials = [{position: 'CEO', name: 'Parveen Sharma', infoo: 'He tookover SOCA in 1989 and since then, he has taken it to new heights. His mission is to grow the popularity of the great game of cricket in southern Ontario and all over Canada. His hardwork and dedication throughout the years has helped a number of domestic and international students build a career in cricket.',
     imagelink: 'sharma.jpg'},
    {position: 'President', name: 'Hariharan Krithivasan', infoo: 'He joined in 2019 and now is the president of SOCA. His work in association is taking the league to the next level.', imagelink: 'hari.jpeg'},
    {position: 'Vice-President', name: 'Ayaz Karim', infoo: 'He joined Kitchener Raptors as a Batsman and  wicket keeper and got nominated to be Vice President of the Soca league in 2021.', imagelink: 'ayazkarim.jpg'},
    {position: 'Director', name: 'Girish', infoo: '', imagelink: 'batball.jpg'},
    {position: 'Secretary', name: 'Shakil Patel', infoo: '', imagelink: 'batball.jpg'},
    {position: 'Coach', name: 'Gagandeep Singh', infoo: 'He is an Indian cricketer. He played for Punjab, and Kings XI Punjab in the Indian Premier League. Over a ten-year first-class career, from 1999–00 to 2009–10, he took 266 wickets at the exceptional average of 20.84, with 16 five wicket hauls, and three times took ten wickets in a match. He is currently coaching at SOCA and is open to coach in Canada.', imagelink: 'gagandeepsingh.jpeg'},
    {position: 'Director of Youth Development', name: 'Parmod Shetty', infoo: 'He is a Senior Business Analyst in a reputed food company and is a passionate cricketer. He has big plans for kids who wants to grow in cricket. Parmod takes care of marketing and also public relations at SOCA.', imagelink: 'parmodshetty.jpg'},
    ] 



    const historyofsoca1 = 'The Kitchener-Waterloo area of southern Ontario has rich legacy of cricket since 1895 when the first club was formed in Waterloo. It was started by the British. The Southern Ontario Cricket Association (S.O.C.A) League it self had started around the time of World-War I. Immigrants from the Caribbean region formed most of the clubs. As time went by immigrants from South Asia such as countries like India, Pakistan and Sri Lanka were slowly settling down in this tri-city area. These new cricket-playing immigrants from South Asia were then playing with the older clubs who were run according to cricketing traditions in the Caribbean. For instance some founders of Sunrise Cricket Club, namely Parveen Sharma started playing cricket in this tri-city since 1990 and was with Waterloo cricket club until 1994. Similarly Jaspal Rana had also arrived into the scene since 1990 and was with Kitchener Cricket Club until 1995. Peter Jeranie (mukesh) too was a member of both Waterloo Cricket Club and Cambridge Cricket Club.'
    const historyofsoca2 = 'A few of the south Asian cricket players had the idea of starting a new club with Asian players. They were confident that they could win the league championship. Thus in 1995 Parveen Sharma, Jaspal Rana, Irfan Arab, Dharmesh Modi, Kamal, Peter Jeranie (Mukesh) and Syd Wazir formed International Cricket Club (ICC) in Waterloo. Incidentally Peter Jeranie (Mukesh) was the only member who originated from Guyana, yet was integral in forming this new club. ICC immediately became part of S.O.C.A. and played well in their first year. Next year the club admitted Bahadur Singh Mangat, Jang Singh Mangat, Nimesh Modi, Rudi and Rizwan Arab as part of the ICC squad. Later that season Dhramesh Krishnammagaru joined ICC. With the induction of Dharmesh K, the team moral soared high. Young guns like Bahadur found someone to look up to and they started performing well. Jang Singh was also a great supporter and helped to run the club smoothly. Both in 1995 and 1996 the club had reached playoffs. In 1997 two new players arrived in to the scene while Dharmesh K. had moved to Toronto and had quit ICC. The players who joined were Anil & Rajan Sharma. SOCA died in 2008 and restarted again in 2013. 4 teams played in 2013 league and 16 teams are playing now in 2021. SOCA also conducts cricket matches for Women. The two teams that participated last year are University of Ryerson and Wilfred Laurier University.Every year after the season, a celebration event is conducted to give prizes to the winners.'
    const historyofsoca3 = 'SOCA greatly appreciates the hard work, effort and dedication by the following in developing the game of cricket in the region.'
    const historyofsoca4 = 'Mayor Berry Vrbanovic, Mayor the City of Kitchener'
    const historyofsoca5 = 'Dave Jaworsky, Mayor of the City of Waterloo'
    const historyofsoca6 = 'Great Jim Bommen, Director of Sports and Recreation Waterloo'
    const historyofsoca7 = 'Peter Donahue, Associate Director of International Student Support at Wilfrid Laurier University'
    const historyofsoca8 = 'Randhir Singh'
    const historyofsoca9 = 'M Abdul Rehman Naeem'
    const historyofsoca10 = 'Amandeep Singh'
    const historyofsoca11 = 'Sunrise Cricket Club Members'
    const historyofsoca12 = 'We also thank Onkar Singh Mandoor. His sponsorship and contribution to develop this league is outstanding. Onkar Foods and Spices sponsors the cup and give prizes to the winners. There is a memorial cup on Onkar Singh Mandoor’s fathers name Lashkar Singh Mandoor which is also sponsored by him.'

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        
        <FeaturesSplit position={aboutOfficials[0].position} name={aboutOfficials[0].name} infoo={aboutOfficials[0].infoo} imag={aboutOfficials[0].imagelink} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[1].position} name={aboutOfficials[1].name} infoo={aboutOfficials[1].infoo} imag={aboutOfficials[1].imagelink} invertMobile  imageFill className="illustration-section-02 "  />
        <FeaturesSplit position={aboutOfficials[2].position} name={aboutOfficials[2].name} infoo={aboutOfficials[2].infoo} imag={aboutOfficials[2].imagelink} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[3].position} name={aboutOfficials[3].name} infoo={aboutOfficials[3].infoo} imag={aboutOfficials[3].imagelink} invertMobile  imageFill className="illustration-section-02 "  />
        <FeaturesSplit position={aboutOfficials[4].position} name={aboutOfficials[4].name} infoo={aboutOfficials[4].infoo} imag={aboutOfficials[4].imagelink} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[5].position} name={aboutOfficials[5].name} infoo={aboutOfficials[5].infoo} imag={aboutOfficials[5].imagelink} invertMobile  imageFill className="illustration-section-02 "  />
        <FeaturesSplit position={aboutOfficials[6].position} name={aboutOfficials[6].name} infoo={aboutOfficials[6].infoo} imag={aboutOfficials[6].imagelink} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        
      </div>


      <div className="ta-c text-color-high h2 bold fw-400 pt-48 pb-32 reveal-from-bottom" data-reveal-delay="400" > History of <span className="text-color-primary">SOCA</span>  </div>

      <div className="container">

      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca1}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca2}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" ><h4>{historyofsoca3}</h4></div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca4}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca5}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca6}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca7}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca8}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca9}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca10}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca11}</div>
      <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca12}</div>



      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;