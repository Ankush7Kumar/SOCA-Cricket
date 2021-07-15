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
    {position: 'Director', name: 'Girish', infoo: '', imagelink: 'gagandeepsingh.jpeg'},
    {position: 'Secretary', name: 'Shakil Patel', infoo: '', imagelink: 'gagandeepsingh.jpeg'},
    {position: 'Coach', name: 'Gagandeep Singh', infoo: 'He is an Indian cricketer. He played for Punjab, and Kings XI Punjab in the Indian Premier League. Over a ten-year first-class career, from 1999–00 to 2009–10, he took 266 wickets at the exceptional average of 20.84, with 16 five wicket hauls, and three times took ten wickets in a match. He is currently coaching at SOCA and is open to coach in Canada.', imagelink: 'gagandeepsingh.jpeg'},
    {position: 'Director of Youth Development', name: 'Parmod Shetty', infoo: 'He is a Senior Business Analyst in a reputed food company and is a passionate cricketer. He has big plans for kids who wants to grow in cricket. Parmod takes care of marketing and also public relations at SOCA.', imagelink: 'parmodshetty.jpg'},
    ] 



    const historyofsoca1 = 'The Kitchener-Waterloo area of southern Ontario has rich legacy of cricket since 1895 when the first club was formed in Waterloo. The Southern Ontario Cricket Association (S.O.C.A) League it self had started around the time of World-War I. Immigrants from the Caribbean region formed most of the clubs. As time went by immigrants from South Asia such as countries like India, Pakistan and Sri Lanka were slowly settling down in this tri-city area. These new cricket-playing immigrants from South Asia were then playing with the older clubs who were run according to cricketing traditions in the Caribbean. For instance some founders of Sunrise Cricket Club, namely Parveen Sharma started playing cricket in this tri-city since 1990 and was with Waterloo cricket club until 1994. Similarly Jaspal Rana had also arrived into the scene since 1990 and was with Kitchener Cricket Club until 1995. Peter Jeranie (mukesh) too was a member of both Waterloo Cricket Club and Cambridge Cricket Club.'
    const historyofsoca2 = 'A few of the south Asian cricket players had the idea of starting a new club with Asian players. They were confident that they could win the league championship. Thus in 1995 Parveen Sharma, Jaspal Rana, Irfan Arab, Dharmesh Modi, Kamal, Peter Jeranie (Mukesh) and Syd Wazir formed International Cricket Club (ICC) in Waterloo. Incidentally Peter Jeranie (Mukesh) was the only member who originated from Guyana, yet was integral in forming this new club. ICC immediately became part of S.O.C.A. and played well in their first year. Next year the club admitted Bahadur Singh Mangat, Jang Singh Mangat, Nimesh Modi, Rudi and Rizwan Arab as part of the ICC squad. Later that season Dhramesh Krishnammagaru joined ICC. With the induction of Dharmesh K, the team moral soared high. Young guns like Bahadur found someone to look up to and they started performing well. Jang Singh was also a great supporter and helped to run the club smoothly. Both in 1995 and 1996 the club had reached playoffs. In 1997 two new players arrived in to the scene while Dharmesh K. had moved to Toronto and had quit ICC. The players who joined were Anil & Rajan Sharma.'
    const historyofsoca3 = 'Due to inevitable circumstances, in 1997, the ICC was split and from that emerged Sunrise Cricket club.The initial constitution of the club was formed with the help of Mr.Schmelling Ramlal'
    const historyofsoca4 = 'In 1998 Sunrise Cricket Club was formed and Mr. Art Browne took over as the first president. Through the help of Waterloo Cricket Club, the constitution of the club was drawn. Mr Browne had set the standards of how the club should function where the moral responsibility was distributed evenly to all the members. In the first year, the members who resigned from ICC were Mr. Art Browne, Parveen Sharma, Jaspal Rana, Dharmesh Modi, Peter Jeranie, Nimesh Modi, Jang Singh, Bahadur Singh, Kamal, Irfan Arab, Rizwan Arab, and Anil Sharma. Later that season Raghu Peddada, Swami Iyer, Samuel Jones, Sarabjit Singh, Harpal Singh and Kuldeep Joined the new club. The captain was Jaspal Rana and the club played well and qualified to the playoffs in their first year.'
    const historyofsoca5 = 'Next year in 1999, Parveen Sharma took over as captain. Incidentally Dharmesh K. who came back into to the tri-city joined Sunrise Cricket Club. The club played well and reached the S.O.C.A Knock-Out finals as well as the League finals and were runner up in both finals. The club also added some new members such as Arfan Ahmed, Amandeep Singh, Jagtar Singh, Ajay Singh and Saqib Sheikh.'
    const historyofsoca6 = 'Year 2000 was a tough year as leadership became split on petty and some avoidable political issues. However under the able leadership of Mr. Art Browne and Raghu Peddada, the club survived some nasty politics. Samuel Jones, Dharmesh Modi, Ajay Sharma and Rajan Sharma had to quit the club. Later just before the season started Raghu Peddada left for California, who became instrumental to keep the team together. Jaspal Rana became the captain. Sunrise was able to put everything behind and win the Knock-Out Championship. New player Ajit Singh (Tiger) was a key performer and moral booster all throughout the season. Inderjit Singh a 14year old was inducted due to talent beyond his age. By stroke of luck Raghu Peddada came back. Full of enthusiasm Mr. Art Browne, Raghu and Swami Iyer joined in effort and laid the plan for success of 2001.'
    const historyofsoca7 = '2001 was a season with a lot mixed luck but will remain memorable for the club. Jaspal Rana was elected captain. Meanwhile Ajit Singh was unable to play due to family reasons, while a new talented batsman cum wicket keeper named Nizar Moosa replaced Ajit. Just before the season started Mr. Art Browne was detected with terminal brain cancer. The club was in shock. Mr. Art Browne a spirited individual went through the ordeal in a super human manner. He went through surgery, met the team members to give them a moral boost The club came together emotionally and rallied to dedicate the season in Art Brwones honor.'
    const historyofsoca8 = 'Sunrise won the pre-season Eagle Trophy by beating all the teams. The regular season had some problems in the beginning, when Jaspal Rana decided to hand over the captainship to Parveen Sharma. This change somehow became a good turn around. The club won 11 straight matches to reach the League Finals. In the finals was the coveted Kaituer Cricket Club, who had players who represented West Indies, Canada and also Guyana. This same club had won the league finals since the last six years and had also won Canadian Championship in the past.'
    const historyofsoca9 = 'In 2001 Sunrise Cricket club made history by winning four out the five league tournaments. It was made possible by the hard work of every single individual of the club. Art Browne, Raghu, Mike,Dharmesh Dua, Parveen, Rana, Swami, Jang, Dhermesh, Mukesh, Bahadur, Harpal, Sarabjit, S. Rana, Ajit, Nizar, Saqib, Neeraj, Amandeep, Jagtar, Inderjeet and Arvinder all stood together and contributed both off and on the field. In the mid season we had one more addition to our team in the shape of Sukhjinder Rana. A coveted all-rounder who has played in the Canadian national team. He is believed to be the fastest bowler in Canada. This made a lot of difference to the strength and made our moral high that helped us to keep our concentration towards our goal. Sunrise cricket club became The Champion Team, by beating kaituer in the league final.'



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

      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca1}</div>
      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca2}</div>
      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca3}</div>
      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca4}</div>
      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca5}</div>
      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca6}</div>
      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca7}</div>
      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca8}</div>
      <div className="ta-c pb-16 reveal-from-bottom" data-reveal-delay="400" >{historyofsoca9}</div>


      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;