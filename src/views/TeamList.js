import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { SectionTilesProps } from '../utils/SectionProps';
import ListView from '../components/elements/ListView';
import SectionHeader from '../components/sections/partials/SectionHeader';
import Image from './../components/elements/Image';


const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const TeamList = ({
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

    var sectionHeaderTitle = ''
    var sectionHeaderPhotoSrc = ''
    var teamListData = []

    const params = useParams().teamId;





    const teamInfo = [
        {
            teamN: 'Cambridge CC', playerList:
                [['Aakib Ansari', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322618&clubId=11018'],
                ['Abubakar Jogiyat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322617&clubId=11018'],
                ['Abubakar Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1396619&clubId=11018'],
                ['Adam Achchha', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322620&clubId=11018'],
                ['Arif Mamuji', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1446861&clubId=11018'],
                ['Ashraf Mulla (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322613&clubId=11018'],

                ['Asif Mulla', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=847200&clubId=11018'],
                ['Aslam Dudha', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1365243&clubId=11018'],
                ['Asraf Bodi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1768065&clubId=11018'],
                ['Dilshad Malik', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322622&clubId=11018'],
                ['Faizal Hanslod', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=571306&clubId=11018'],
                ['Faizal Mohtat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1786614&clubId=11018'],

                ['Faruk Darsot', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1387758&clubId=11018'],
                ['Ibhrahim Mayat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1396620&clubId=11018'],
                ['Ibhrahim Darsot', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322616&clubId=11018'],
                ['Idri Darsot', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1414667&clubId=11018'],
                ['Idris Darsot', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322614&clubId=11018'],
                ['Imran Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322615&clubId=11018'],

                ['Ismail Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1357780&clubId=11018'],
                ['Moeen Mulla', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758512&clubId=11018'],
                ['Mohmadakil Vhora', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322619&clubId=11018'],
                ['Mohsin Darsot', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1785381&clubId=11018'],
                ['Mohsin L', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758515&clubId=11018'],
                ['Mohsin Unia', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1768066&clubId=11018'],

                ['Mustahid Mulla', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1768064&clubId=11018'],
                ['Mustahim L', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758517&clubId=11018'],
                ['Nadeem L', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758513&clubId=11018'],
                ['Nadeem Manjra', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1325408&clubId=11018'],
                ['Nadim L', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758516&clubId=11018'],

                ['Sahid Lakhi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1357782&clubId=11018'],
                ['Said Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1326727&clubId=11018'],
                ['Salim Kazi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=585673&clubId=11018'],
                ['Sehzad Unia', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1785382&clubId=11018'],
                ['Shehzad L', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758514&clubId=11018'],
                ['Siraj Mamujee', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1357781&clubId=11018'],

                ['Usman Gani Mulla', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1283198&clubId=11018'],
                ['Zaid Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1357783&clubId=11018'],
                ['Zakariya Patel (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=500466&clubId=11018'],
                ['Zakariya Ravat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1768063&clubId=11018'],
                ['Zubair Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1365299&clubId=11018'],
                ], teamphoto: 'batball.jpg'
        },



        {
            teamN: 'Cambridge Rising Stars', playerList:
                [['Abhishek Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164908&clubId=11018'],
                ['Anees Bhaiyat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164910&clubId=11018'],
                ['Fauzan Bhayat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1414657&clubId=11018'],
                ['Gulam Mohmed Ravat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1756784&clubId=11018'],
                ['Javid Unia Nawab', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=532577&clubId=11018'],
                ['Mihir Rao', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164909&clubId=11018'],

                ['Minjah Abdulhamid', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1323735&clubId=11018'],
                ['Mohammad Koya', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=500277&clubId=11018'],
                ['Mohsin Unia', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1769831&clubId=11018'],
                ['Nadim Manjra', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1326749&clubId=11018'],
                ['Rasid Adat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164912&clubId=11018'],
                ['Ravi Kumar', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=845208&clubId=11018'],

                ['Rizwan Darsot', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1326726&clubId=11018'],
                ['Rizwan Jogiyat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164906&clubId=11018'],
                ['Shakil Bhuria', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164905&clubId=11018'],
                ['Shehzad Unia (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2136566&clubId=11018'],
                ['Shikar Saxena', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164907&clubId=11018'],
                ['Sohel Bhaiyat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=499974&clubId=11018'],

                ['Sufiyan Bhaiyat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164911&clubId=11018'],
                ['Wasimakaram Moha Sidat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1764190&clubId=11018'],
                ['Zaid Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164904&clubId=11018'],
                ['Zakariya Ravat', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1769842&clubId=11018']], teamphoto: 'batball.jpg'
        },






        {
            teamN: 'Grand River CC', playerList:
                [
                    ['Akhil Antony', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164896&clubId=11018'],
                    ['Akhil Mohanan', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164897&clubId=11018'],
                    ['Allan Kent Mathew', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164899&clubId=11018'],
                    ['Anand Rajeev Nair (VC)', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1323057&clubId=11018'],
                    ['Anil Verghese', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1409078&clubId=11018'],
                    ['Bibin Sunny', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1420020&clubId=11018'],

                    ['Chinmay Prabhu', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2179051&clubId=11018'],
                    ['Cibin Jacob', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2139326&clubId=11018'],
                    ['Derin Thambi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1156353&clubId=11018'],
                    ['Dhanush Raj', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1409083&clubId=11018'],
                    ['Eldhose K George', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164898&clubId=11018'],
                    ['Jenik Antony', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1135632&clubId=11018'],

                    ['Jeslin James', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1778175&clubId=11018'],
                    ['Jimmy Abraham', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1778174&clubId=11018'],
                    ['Jugeesh Shaju', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164900&clubId=11018'],
                    ['Mithun ASHARIPARAMBIL REGHU', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324636&clubId=11018'],
                    ['Navaneeth Muliyil', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164901&clubId=11018'],
                    ['Pravindas Appu', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=591727&clubId=11018'],

                    ['Rajagopalan Rajkrishnan ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=874639&clubId=11018'],
                    ['Roopak Rajkrishnan ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1779450&clubId=11018'],
                    ['Sanal Jose', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1323043&clubId=11018'],
                    ['Seemanth Ashok', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=874633&clubId=11018'],
                    ['Sreerag AS', 'Bowler', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164902&clubId=11018'],
                    ['Vishnu Narayana Kurup', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1323001&clubId=11018'],
                    ['Vivek Viswanathan', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1323056&clubId=11018']], teamphoto: 'grandriverccgroup.jpeg'
        },











        {
            teamN: 'Kitchener Wolves', playerList:
                [
                    ['Abdul Rehman', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1767979&clubId=11018'],
                    ['Akshay Kumar Mysa', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2152991&clubId=11018'],
                    ['Andrew Terry', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144064&clubId=11018'],
                    ['Anil Chada', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=890748&clubId=11018'],
                    ['Arjun Vemana', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=514321&clubId=11018'],
                    ['Atinder Singh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144060&clubId=11018'],


                    ['Gautham Ravi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2152992&clubId=11018'],
                    ['Gowri Shankar Ravulapati', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144065&clubId=11018'],
                    ['Hemanth Ponnapalli (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751417&clubId=11018'],
                    ['Karthik Vuduthala', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2129482&clubId=11018'],
                    ['Neeraj Nair', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144061&clubId=11018'],
                    ['Nirmal Ignacy (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144057&clubId=11018'],

                    ['Pavan Chowdary Battula', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2152990&clubId=11018'],

                    ['Rakesh Reddy Mallu', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144067&clubId=11018'],
                    ['Ravi Varma Vegeshna', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2170285&clubId=11018'],
                    ['Sai Teja Nimmakayala', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144058&clubId=11018'],
                    ['Sandeep Pasagadi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144059&clubId=11018'],
                    ['Santosh Kandula', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=821893&clubId=11018'],

                    ['Varshith Kumar Mangiligau', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144063&clubId=11018']], teamphoto: 'kitchenerwolvesgroup.png'
        },




        {
            teamN: 'KW Kings XI', playerList:
                [['Abdullah Agib', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1755285&clubId=11018'],
                ['Abdur Agib', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=878241&clubId=11018'],
                ['Anil Puri', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=527895&clubId=11018'],

                ['Anirudh Puri (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=527894&clubId=11018'],
                ['Dhruv Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1449368&clubId=11018'],
                ['Fawaz Hakim', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322600&clubId=11018'],


                ['Ishaan Dhaliwal', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273976&clubId=11018'],
                ['Jasmeet Singh', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273955&clubId=11018'],
                ['Jatin Gulati', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273974&clubId=11018'],
                ['Jeevan Sidhu', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751111&clubId=11018'],
                ['Joban Sidhu', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751111&clubId=11018'],
                ['Kalyan Satya', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148751&clubId=11018'],



                ['Kanav Patwa', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=879916&clubId=11018'],
                ['Kush Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=516480&clubId=11018'],
                ['Manpreet Singh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=879917&clubId=11018'],
                ['Nadeem Sheikh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818405&clubId=11018'],
                ['Nisarg Shah', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=840432&clubId=11018'],
                ['Pranav Mehta', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=983918&clubId=11018'],
                ['Puran Singh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=879915&clubId=11018'],

                ['Ramink Brar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1429229&clubId=11018'],
                ['Ramiz Heidary', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=499854&clubId=11018'],
                ['Randhir Dhaliwal', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=527889&clubId=11018'],
                ['Riten Patwa (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273875&clubId=11018'],
                ['Shyam Arora', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273975&clubId=11018'],
                ['Siddhant Goyal', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1476989&clubId=11018'],


                ], teamphoto: 'batball.jpg'
        },






        {
            teamN: 'Proteas CC', playerList:
                [['Abhishek Ramparia', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148661&clubId=11018'],
                ['Ankit Bhatt', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148181&clubId=11018'],
                ['Ashutosh Vyas', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1435042&clubId=11018'],
                ['Asif Badin', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1395269&clubId=11018'],
                ['Ayaz Belim  (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1300366&clubId=11018'],
                ['Denil Chowdhary', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148670&clubId=11018'],
                ['Devang Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148671&clubId=11018'],

                ['Dhruv Sonavane', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148669&clubId=11018'],
                ['Dhruvil Prajapati', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148660&clubId=11018'],
                ['Ibrahim Mehta', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322642&clubId=11018'],
                ['Jinil Patel (WK)', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1437356&clubId=11018'],
                ['Kashyap Dave', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148668&clubId=11018'],
                ['Kaushal Pandya', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148662&clubId=11018'],
                ['Khush Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148663&clubId=11018'],

                ['Navin Anson', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322988&clubId=11018'],
                ['Niravkumar Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=347631&clubId=11018'],
                ['Nirmal Dave', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148664&clubId=11018'],
                ['Parshwa Shah', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164303&clubId=11018'],
                ['Pragnesh Panchal ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148666&clubId=11018'],
                ['Premal Parekh (WK)', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144019&clubId=11018'],

                ['Pringal Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148180&clubId=11018'],
                ['Purvish Jethva', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1756731&clubId=11018'],
                ['Rehan Khan', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164305&clubId=11018'],
                ['Sachin Desai ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148665&clubId=11018'],
                ['Sahid Lakhi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171065&clubId=11018'],
                ['Smit Patel ', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148667&clubId=11018'],
                ['Sulaiman Choudhree ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164304&clubId=11018'],

                ['Urvil Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148179&clubId=11018']], teamphoto: 'batball.jpg'
        },








        {
            teamN: 'Sunrise CC', playerList:
                [
                    ['Abhay Patel ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=341293&clubId=11018'],
                    ['Amandeep Singh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818394&clubId=11018'],
                    ['Bahdur Mangat ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818396&clubId=11018'],
                    ['Daljeet Mangat', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818398&clubId=11018'],
                    ['Deepinder Pal Singh (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1396561&clubId=11018'],
                    ['Gagandeep Singh Toor', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1277389&clubId=11018'],


                    ['Harjeevan Singh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818400&clubId=11018'],
                    ['Harpal Minhas ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818401&clubId=11018'],
                    ['Inderjeet Dhaliwal', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818403&clubId=11018'],
                    ['Jaskirat Singh (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=881387&clubId=11018'],
                    ['Jaspal Rana', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=904087&clubId=11018'],
                    ['Kuldeep Dhaliwal ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=809226&clubId=11018'],

                    ['Neeraj Bharatwaj ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=881390&clubId=11018'],
                    ['Sandeep Singh Buttar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324945&clubId=11018'],
                    ['Saqib Sheikh', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171147&clubId=11018'],
                    ['Sunny Bhullar ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818411&clubId=11018'],
                    ['Sunny Mangat ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171148&clubId=11018'],
                    ['Vijay Subramanya', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=953323&clubId=11018']], teamphoto: 'sunrisephoto.jpg'
        },














        {
            teamN: 'Warriors CC', playerList:
                [['Ajar Sharma', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1465683&clubId=11018'],
                ['Ali Zohair', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171991&clubId=11018'],
                ['Arefin Azam', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1787069&clubId=11018'],
                ['Asif Nawaz', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=901538&clubId=11018'],

                ['Ganesh Rajaeskar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751858&clubId=11018'],
                ['Hemant Arora', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171990&clubId=11018'],
                ['Laksh A', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1770559&clubId=11018'],
                ['Mohit Sharma', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2149434&clubId=11018'],
                ['Mohsin Tahir ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1477404&clubId=11018'],


                ['Pranav Kapoor ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1477380&clubId=11018'],

                ['Sheryar Ahsan', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322609&clubId=11018'],
                ['Tushar Chopra ', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751113&clubId=11018'],

                ['Vishvesh Shah', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171992&clubId=11018']], teamphoto: 'warriorsccgroup.png'
        },







        {
            teamN: 'Cambridge United', playerList:
                [['Abdul Samad Kazi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1382331&clubId=11018'],
                ['Afzal Badin', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1394673&clubId=11018'],
                ['Ahmed Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1364763&clubId=11018'],
                ['Altaf Nav', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2167563&clubId=11018'],
                ['Anwar China', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=534127&clubId=11018'],
                ['Arif Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1757939&clubId=11018'],

                ['Ashraf Topia', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1325996&clubId=11018'],
                ['Faizal Mohataz', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1325996&clubId=11018'],
                ['Fayaz Jangda', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1300362&clubId=11018'],
                ['Husen Dukanwala', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1400620&clubId=11018'],
                ['Mohammad Gori', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322645&clubId=11018'],
                ['Mohmed Sadik Manjra', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=534126&clubId=11018'],


                ['Sajid Pir', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=500481&clubId=11018'],
                ['Shakil Patel (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322640&clubId=11018'],
                ['Sohel Honsrad', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322641&clubId=11018'],
                ['Suhel Pir (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=534128&clubId=11018']], teamphoto: 'cambridgeunitedgroup.jpeg'
        },














        {
            teamN: 'Huskies Cricket', playerList:
                [['Dhruv Panghal', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=570884&clubId=11018'],
                ['Ankush Kumar (WK)', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1478369&clubId=11018'],
                ['Abdul Rehman Naeem (C)', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=722836&clubId=11018'],
                ['Sannan Mansoor', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=918337&clubId=11018'],
                ['Talha Naeem', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1754357&clubId=11018'],
                ['Taha Imam', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1369797&clubId=11018'],

                ['Hamza Hamid', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1369405&clubId=11018'],
                ['Muhammad Ghyour Ali (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1325632&clubId=11018'],
                ['Saad Rehman', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1449853&clubId=11018'],
                ['Saim Ahmad', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2172962&clubId=11018'],
                ['Arsalan Wasi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2182383&clubId=11018'],
                ['Lucas Sakinofsky', 'All Rounder', ''],

                ['Owais Hamid', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=349505&clubId=11018'],
                ['Taha Hamid', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1369404&clubId=11018'],
                ['Osama Hamid', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1125857&clubId=11018'],
                ['Ahmed Imtiaz', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1774711&clubId=11018'],
                ['Gundeep Singh', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2173031&clubId=11018'],
                ['Sayeed Hassan', 'All Rounder', ''],
                ['Bikramjit Suri Singh', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1498768&clubId=11018'],

                ['Abdul Hafeez Naeem', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=953319&clubId=11018'],
                ['Hrishi Modi (WK)', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1408854&clubId=11018']], teamphoto: 'huskiescricketgroup.JPG'
        },



        {
            teamN: 'Kitchener Raptors', playerList:
                [
                    ['Akash', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164963&clubId=11018'],
                    ['Avinash Lakhani', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164956&clubId=11018'],
                    ['Ayaz', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1755142&clubId=11018'],
                    ['Bikram Chinna (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164952&clubId=11018'],
                    ['Gurpreet Singh Chahal', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164958&clubId=11018'],
                    ['Harish Mallapudi', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164961&clubId=11018'],

                    ['Ishdeep Gandhi(WK)', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164959&clubId=11018'],
                    ['Jubin Mathew', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2160857&clubId=11018'],
                    ['Karan Singh', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164960&clubId=11018'],
                    ['Khawar Azad', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171066&clubId=11018'],
                    ['Mankaran Saini(VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1835008&clubId=11018'],
                    ['Manpreet Khepar', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164955&clubId=11018'],

                    ['Naveed Ali', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164954&clubId=11018'],
                    ['Salman Khalid', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164962&clubId=11018'],
                    ['Tanwant Singh Pannu', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164953&clubId=11018'],
                    ['Yaswant Bhattipolu', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164957&clubId=11018'],

                ], teamphoto: 'batball.jpg'
        },



        {
            teamN: 'Sunrise Stallions CC', playerList:
                [['Abbas Naqvi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171459&clubId=11018'],
                ['Abhishek Mehra', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171458&clubId=11018'],
                ['Abubaker Kalair', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1242838&clubId=11018'],
                ['Ali Nabeel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1748633&clubId=11018'],
                ['Amit Sharma', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1384293&clubId=11018'],
                ['Avi Kalsotra', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1276027&clubId=11018'],
                ['Bhavesh Rane', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1703995&clubId=11018'],

                ['Hari Krithivasan', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=831640&clubId=11018'],
                ['Haril Majmundar ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273837&clubId=11018'],

                ['Hiren Patel (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1365241&clubId=11018'],
                ['Hussain Akbar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1158511&clubId=11018'],
                ['Hussain Shah ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1784827&clubId=11018'],
                ['Jamsheed Jaffery', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=837835&clubId=11018'],
                ['Jasneet Singh Arora', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1774121&clubId=11018'],
                ['Jimmy Nabeel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1748632&clubId=11018'],
                ['Majed Khan (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818407&clubId=11018'],

                ['Mayur Navale', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1276021&clubId=11018'],
                ['Robby Sharma', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758519&clubId=11018'],
                ['Sanjay Sharma', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324946&clubId=11018'],
                ['Saurabh Sharma', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818409&clubId=11018'],
                ['Shiva Sharma', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1276017&clubId=11018'],
                ['Shourya Shetty ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324947&clubId=11018'],

                ['Srujan Marka', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1772729&clubId=11018'],
                ['Suryanchal Kishore', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751179&clubId=11018'],


                ['Vaibhav Shetty', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758732&clubId=11018']], teamphoto: 'sunrisestallionsgroup.png'
        },









        {
            teamN: 'Victoria CC', playerList:
                [['Arjun Mony (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273973&clubId=11018'],
                ['Balamurugan Sakthivel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751856&clubId=11018'],
                ['Bhalaji Sadagoparamanujam', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1159145&clubId=11018'],
                ['Chandru Muthukumarvel (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=296248&clubId=11018'],
                ['Hemnath Baskaran', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1729895&clubId=11018'],
                ['Jai ganesh Sundaram', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=791805&clubId=11018'],

                ['Jeevan Joseph', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2129975&clubId=11018'],
                ['Joshwa Joseph Britto', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164308&clubId=11018'],
                ['Karthikeyan Munuswamy', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=294925&clubId=11018'],
                ['Kiran sundaravarathan', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164307&clubId=11018'],
                ['Krunal Bhadresa', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164312&clubId=11018'],
                ['Mohit Gill', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273840&clubId=11018'],
                ['Nitin Anson', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=874636&clubId=11018'],
                ['Phillip Whyne', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164309&clubId=11018'],

                ['Ponnar krishnasamy', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164314&clubId=11018'],
                ['Ramesh Somasundaram', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2129976&clubId=11018'],
                ['Rathish Ravi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164313&clubId=11018'],
                ['Ravi Bhadresa', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164311&clubId=11018'],

                ['Samundiswaran Velpandian', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1276520&clubId=11018'],
                ['Sekar Venkatesh', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2076246&clubId=11018'],


                ['Sharad Jajoo', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1112872&clubId=11018'],
                ['Sivanandan Vijayakumar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164310&clubId=11018'],
                ['Sivaramakrishnan Rathinam', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1390896&clubId=11018'],
                ['Subhani Shaik', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751859&clubId=11018']], teamphoto: 'victoriaccgroup.png'
        },









        {
            teamN: 'Waterloo Gladiators', playerList:
                [
                    ['Aadit Mehrotra', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164941&clubId=11018'],
                    ['Abdullah Khalid (VC/Wk)', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164918&clubId=11018'],
                    ['Abhiraam Biju', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=983910&clubId=11018'],
                    ['Ahsan Imam', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164931&clubId=11018'],
                    ['Ahsan Shahid', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164919&clubId=11018'],
                    ['Akhtar Hussain', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164934&clubId=11018'],

                    ['Arkadeep Das', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164949&clubId=11018'],
                    ['Gurjit Singh Saini', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164939&clubId=11018'],
                    ['Hamza Abid', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164935&clubId=11018'],
                    ['Hamza Mirza (C)', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=850662&clubId=11018'],
                    ['Hamza Yousafzai', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164921&clubId=11018'],
                    ['Haris Bhatti', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164926&clubId=11018'],



                    ['Harwaris Gill', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164937&clubId=11018'],
                    ['Hussain Akhbar', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164920&clubId=11018'],
                    ['Jass Bajwa', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164929&clubId=11018'],
                    ['Mainul Raiyan Haque', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164930&clubId=11018'],
                    ['Mayank Kanoria', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164940&clubId=11018'],
                    ['Mohammad Adnan', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164923&clubId=11018'],
                    ['Naveed Iqbal Tareen', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164925&clubId=11018'],

                    ['Naveed Khan', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164938&clubId=11018'],
                    ['Neeraj Bhatia', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164945&clubId=11018'],
                    ['Nikhil Ratesar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164946&clubId=11018'],
                    ['Nishant Vasudev', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164948&clubId=11018'],
                    ['Paramveer Singh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164936&clubId=11018'],
                    ['Rai Umar', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164932&clubId=11018'],
                    ['Rai Mohammad Ali', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324942&clubId=11018'],


                    ['Raveepaul Singh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164944&clubId=11018'],
                    ['Saad Qazi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164933&clubId=11018'],
                    ['Sachin Vashista', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164943&clubId=11018'],

                    ['Sorabh Arora', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164928&clubId=11018'],

                    ['Talha Ashfaq', 'Bowler', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164927&clubId=11018'],
                    ['Talha Yousafzai', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164922&clubId=11018'],

                    ['Umar Manzar ', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164924&clubId=11018'],
                    ['Vikas Tomar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164947&clubId=11018'],
                    ['Viraj Uberoi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164942&clubId=11018'],

                ], teamphoto: 'batball.jpg'
        },












        {
            teamN: 'Young 11', playerList:
                [['Ahmed Shaikh', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752493&clubId=11018'],
                ['Ashrey Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2180894&clubId=11018'],
                ['Ashrey Krovi', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752507&clubId=11018'],
                ['Axil Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2180891&clubId=11018'],
                ['Bhuvan Kilaru ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752503&clubId=11018'],
                ['Dhawal B', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752496&clubId=11018'],

                ['Dinesh Tirumallsetty', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752494&clubId=11018'],
                ['Harsh  Bhavsar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2180892&clubId=11018'],
                ['Hemant Kumar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752504&clubId=11018'],
                ['Himavanth Reddy ', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752495&clubId=11018'],


                ['Jay Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1778514&clubId=11018'],
                ['Kavin Patel', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2180893&clubId=11018'],
                ['Krishna Chaitanya Nimmala', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273852&clubId=11018'],
                ['Mailik Patel ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1389547&clubId=11018'],
                ['Navpreet Singh ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1757510&clubId=11018'],
                ['Nikhil Nisangi ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752505&clubId=11018'],
                ['Nitish Meelu', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324956&clubId=11018'],

                ['Parth Thakkar (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273854&clubId=11018'],
                ['Ranvir Lastname ', 'All Rounder', ' Ranvir Lastname'],
                ['Sai Ram Marri (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1383524&clubId=11018'],
                ['Shikar Lastname', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752506&clubId=11018'],
                ['Siddharth Patel ', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273859&clubId=11018'],


                ['Sunil Kumar Kambhampati', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1284810&clubId=11018'],
                ['Vatsal P. Patel ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1772728&clubId=11018'],
                ['Vineeth Nallmadugu', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273866&clubId=11018']], teamphoto: 'young11group.jpeg'
        },







        {
            teamN: 'ZMCC Kitchener', playerList:
                [['Abbasi Ziyan', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1366134&clubId=11018'],
                ['Abdul Jabbar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751139&clubId=11018'],
                ['Abhimanyu Katey', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1774502&clubId=11018'],
                ['Adnan Azam', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2151998&clubId=11018'],
                ['Hamza Talaal', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751131&clubId=11018'],
                ['Hasanain A', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758992&clubId=11018'],
                ['Hasnain Aamir', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751141&clubId=11018'],
                ['Imran Kashif ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751134&clubId=11018'],


                ['Khalid Gillani ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751145&clubId=11018'],
                ['Liaqat Ali ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751140&clubId=11018'],
                ['Mehmood Pirzada', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751136&clubId=11018'],
                ['Mohammad Adil', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751132&clubId=11018'],
                ['Mohsan Butt', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751142&clubId=11018'],
                ['Nasir Janjua', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758993&clubId=11018'],


                ['Naveed Jailani (C)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751129&clubId=11018'],
                ['Navjeet Singh', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1768283&clubId=11018'],
                ['Owais Asghar', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751130&clubId=11018'],
                ['Sajid Gilani ', 'Batsman', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1794841&clubId=11018'],
                ['Samir Ajmal', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751137&clubId=11018'],
                ['Shariq Mohammad ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751128&clubId=11018'],


                ['Sunit Thakur ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1759027&clubId=11018'],
                ['Syed Yakood Maqsusi ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=547949&clubId=11018'],
                ['Syed Ali Raxa', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1387093&clubId=11018'],
                ['Taha Badar (VC)', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1382646&clubId=11018'],
                ['Tariq Yousaf ', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751133&clubId=11018'],
                ['Vicky Sharma', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758991&clubId=11018'],
                ['Zaki Khan', 'All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1794842&clubId=11018']], teamphoto: 'zmccgroup.png'
        }








    ]



    for (var i = 0; i < teamInfo.length; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        if (params == teamInfo[i].teamN.replace(/\s/g, '')) {
            teamListData = teamInfo[i].playerList
            sectionHeaderTitle = teamInfo[i].teamN
            sectionHeaderPhotoSrc = teamInfo[i].teamphoto;
        }
    }





    const outerClasses = classNames(
        'teams section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'teams-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );


    const sectionHeader = {
        title: sectionHeaderTitle,
    };


    var rows = [];
    for (var i = 0; i < teamListData.length; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<ListView name={teamListData[i][0]} role={teamListData[i][1]} playerlink={teamListData[i][2]} />);
    }
    return (
        <section
            {...props}
            className={outerClasses}
        >


            <SectionHeader data={sectionHeader} className="center-content" data-reveal-delay="200" />

            <div className="container">
                <div className={innerClasses}>
                    <div className="pb-100 container-sm hero-figure reveal-from-bottom illustration-element-01 " data-reveal-value="20px" data-reveal-delay="200">
                        <Image
                            className="has-shadow"
                            src={require('./../assets/images/' + sectionHeaderPhotoSrc.toString() + '')}
                            alt="Photo not found"
                            width={896}
                            height={504} />

                    </div>
                    <div >

                        {rows}
                    </div>
                </div>
            </div>
        </section>
    );
}

TeamList.propTypes = propTypes;
TeamList.defaultProps = defaultProps;

export default TeamList;