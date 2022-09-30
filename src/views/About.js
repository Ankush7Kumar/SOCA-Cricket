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

  const aboutOfficials = [{
    position: 'CEO', name: 'Parveen Sharma', infoo: 'He tookover SOCA in 1989 and since then, he has taken it to new heights. His mission is to grow the popularity of the great game of cricket in southern Ontario and all over Canada. His hardwork and dedication throughout the years has helped a number of domestic and international students build a career in cricket.',
    imagelink: 'sharma.jpg'
  },
  { position: 'City of Waterloo Councillor', name: 'Mark Whaley', infoo: 'The Godfather of Sunrise Cricket Club and SOCA from last 20 years. His contribution and dedication for Sunrise CC and SOCA from last 20 years is beyond imagination. We as cricketer at Sunrise CC would not be near where we are today. Mark Whaley is a torch in the dark tunnel for cricketers in Waterloo region. We as cricketers wholeheartedly and unconditionally salute his love and dedication for developing cricket in the region.', imagelink: 'markwhaley.jpg'  },
  { position: 'President', name: 'Hariharan Krithivasan', infoo: 'He joined in 2019 and now is the president of SOCA. His work in association is taking the league to the next level.', imagelink: 'hari.jpeg' },
  { position: 'Mayor of the City of Kitchener & Mentor of Junior Program and SOCA in region', name: 'Berry Vrbanovic', infoo: 'Mayor of the City of Kitchener has provided SOCA with guidance and mentorship. He helped SOCA to grow. He was always there when SOCA needed him. SOCA would not have grown as much as it has without him.', imagelink: 'Berry.jpg' },
  
  { position: 'Mayor of the City of Waterloo & Mentor of SOCA', name: 'Dave Jaworsky', infoo: 'He has supported SOCA from the last 20 years. We greatly appreciate him. He helped us to get the field to play cricket in the city. His contribution towards SOCA is remarkable.', imagelink: 'dave.jpeg' },
  { position: 'Director of SOCA', name: 'Onkar Singh Mandoor', infoo: 'One of the finest human being around us. Always willing to help the community. His contribution towards sunrise and SOCA is outstanding. He is always willing to help anybody who approaches him. He is a sponsor and a proud team owner in SOCA. We as cricketers dont have enough words to say thank you to him for his generosity.', imagelink: 'satnamsinghbisla.JPG' },
  { position: 'Director of SOCA', name: 'Jaspal Singh Rana', infoo: 'One of the creators of Sunrise Cricket Club. His contribution in developing Sunrise CC and SOCA in the region is tremendous. We as cricketer salute him and his dedication. Godfather of cricket for many young cricketers.', imagelink: 'jaspalrana.jpeg' },
  { position: 'Director of SOCA', name: 'Mohammed Shaikh', infoo: 'He is the main guy behind making SOCA grow and making soca youth play for Canada and Ontario. His contribution for developing youth is tremondous. We could not have been able to support the youth without his help.', imagelink: 'mdshaikh.jpg'},

  { position: 'Associate Director of International Student Support at Wilfrid Laurier University', name: 'Peter Donahue', infoo: 'He is a great human being. He is always willing to help international students whicheverway he can. He is a great supporter and promoter of cricket in Wilfred Laurier University. SOCA salutes him for his dedication and his generiosity.', imagelink: 'peterlaurier.jpeg' },
  { position: 'Director of SOCA', name: 'Amandeep Singh', infoo: 'He was always there when SOCA was ever in help. He has been supporting SOCA from the last 20 years. He provided SOCA with everything we ever needed. We salute his work, contribution and dedication.', imagelink: 'amandeepsingh.jpg' },

  { position: 'Coach', name: 'Gagandeep Singh', infoo: 'He is an Indian cricketer. He played for Punjab, and Kings XI Punjab in the Indian Premier League. Over a ten-year first-class career, from 1999–00 to 2009–10, he took 266 wickets at the exceptional average of 20.84, with 16 five wicket hauls, and three times took ten wickets in a match. He is currently coaching at SOCA and is open to coach in Canada.', imagelink: 'gagandeepsingh.jpeg' },
  { position: 'Director of Youth Development', name: 'Parmod Shetty', infoo: 'He is a Senior Business Analyst in a reputed food company and is a passionate cricketer. He has big plans for kids who wants to grow in cricket. Parmod takes care of marketing and also public relations at SOCA.', imagelink: 'parmodshetty.jpg' },
  ]



  const historyofsoca1 = 'The Kitchener-Waterloo area of southern Ontario has rich legacy of cricket since 1895 when the first club was formed in Waterloo. It was started by the British. The Southern Ontario Cricket Association (S.O.C.A) League it self had started around the time of World-War I. Immigrants from the Caribbean region formed most of the clubs. As time went by immigrants from South Asia such as countries like India, Pakistan and Sri Lanka were slowly settling down in this tri-city area. These new cricket-playing immigrants from South Asia were then playing with the older clubs who were run according to cricketing traditions in the Caribbean. For instance some founders of Sunrise Cricket Club, namely Parveen Sharma started playing cricket in this tri-city since 1990 and was with Waterloo cricket club until 1994. Similarly Jaspal Rana had also arrived into the scene since 1990 and was with Kitchener Cricket Club until 1995. Peter Jeranie (mukesh) too was a member of both Waterloo Cricket Club and Cambridge Cricket Club.'
  const historyofsoca2 = 'A few of the south Asian cricket players had the idea of starting a new club with Asian players. They were confident that they could win the league championship. Thus in 1995 Parveen Sharma, Jaspal Rana, Irfan Arab, Dharmesh Modi, Kamal, Peter Jeranie (Mukesh) and Syd Wazir formed International Cricket Club (ICC) in Waterloo. Incidentally Peter Jeranie (Mukesh) was the only member who originated from Guyana, yet was integral in forming this new club. ICC immediately became part of S.O.C.A. and played well in their first year. Next year the club admitted Bahadur Singh Mangat, Jang Singh Mangat, Nimesh Modi, Rudi and Rizwan Arab as part of the ICC squad. Later that season Dhramesh Krishnammagaru joined ICC. With the induction of Dharmesh K, the team moral soared high. Young guns like Bahadur found someone to look up to and they started performing well. Jang Singh was also a great supporter and helped to run the club smoothly. Both in 1995 and 1996 the club had reached playoffs. In 1997 two new players arrived in to the scene while Dharmesh K. had moved to Toronto and had quit ICC. The players who joined were Anil & Rajan Sharma. SOCA died in 2008 and restarted again in 2013. 4 teams played in 2013 league and 16 teams are playing now in 2021. SOCA also conducts cricket matches for Women. The two teams that participated last year are University of Ryerson and Wilfred Laurier University.Every year after the season, a celebration event is conducted to give prizes to the winners.'
  const historyofsoca3 = 'SOCA greatly appreciates the hard work, effort and dedication by the following in developing the game of cricket in the region.'
  const historyofsoca5 = 'M Abdul Rehman Naeem'
  const historyofsoca6 = 'Sunrise Cricket Club Members'

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <h1 style={{ backgroundColor: '#ACADFF', color: 'black' }}> Management and Directors </h1>


      <div className="container">


        <FeaturesSplit position={aboutOfficials[0].position} name={aboutOfficials[0].name} infoo={aboutOfficials[0].infoo} imag={aboutOfficials[0].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[1].position} name={aboutOfficials[1].name} infoo={aboutOfficials[1].infoo} imag={aboutOfficials[1].imagelink} invertMobile imageFill className="illustration-section-02 " />
        <FeaturesSplit position={aboutOfficials[2].position} name={aboutOfficials[2].name} infoo={aboutOfficials[2].infoo} imag={aboutOfficials[2].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[3].position} name={aboutOfficials[3].name} infoo={aboutOfficials[3].infoo} imag={aboutOfficials[3].imagelink} invertMobile imageFill className="illustration-section-02 " />
        <FeaturesSplit position={aboutOfficials[4].position} name={aboutOfficials[4].name} infoo={aboutOfficials[4].infoo} imag={aboutOfficials[4].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[5].position} name={aboutOfficials[5].name} infoo={aboutOfficials[5].infoo} imag={aboutOfficials[5].imagelink} invertMobile imageFill className="illustration-section-02 " />
        <FeaturesSplit position={aboutOfficials[6].position} name={aboutOfficials[6].name} infoo={aboutOfficials[6].infoo} imag={aboutOfficials[6].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[7].position} name={aboutOfficials[7].name} infoo={aboutOfficials[7].infoo} imag={aboutOfficials[7].imagelink} invertMobile imageFill className="illustration-section-02 " />
        <FeaturesSplit position={aboutOfficials[8].position} name={aboutOfficials[8].name} infoo={aboutOfficials[8].infoo} imag={aboutOfficials[8].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[9].position} name={aboutOfficials[9].name} infoo={aboutOfficials[9].infoo} imag={aboutOfficials[9].imagelink} invertMobile imageFill className="illustration-section-02 " />
        <FeaturesSplit position={aboutOfficials[10].position} name={aboutOfficials[10].name} infoo={aboutOfficials[10].infoo} imag={aboutOfficials[10].imagelink} invertMobile imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[11].position} name={aboutOfficials[11].name} infoo={aboutOfficials[11].infoo} imag={aboutOfficials[11].imagelink} invertMobile imageFill className="illustration-section-02 " />

      </div>

      <h1 style={{ backgroundColor: '#ACADFF', color: 'black' }}>History of SOCA</h1>


      <div className="container">

        <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca1}</div>
        <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca2}</div>
        <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" ><h4>{historyofsoca3}</h4></div>
        <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca5}</div>
        <div className="ta-l pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca6}</div>


      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;