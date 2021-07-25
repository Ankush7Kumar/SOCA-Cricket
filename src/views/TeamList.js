import React from 'react';
import classNames from 'classnames';
import { useParams} from 'react-router-dom';
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
    {teamN: 'Cambridge CC', playerList: 
    [['Aakib Ansari','All Rounder'],
    ['Abubakar Jogiyat','All Rounder'],
    ['Abubakar Patel','All Rounder'],
    ['Adam Achchha','All Rounder'],
    ['Arif Mamuji','All Rounder'],
    ['Ashraf Mulla (C)','All Rounder'],

    ['Asif Mulla','All Rounder'],
    ['Aslam Dudha','All Rounder'],
    ['Asraf Bodi','All Rounder'],
    ['Dilshad Malik','All Rounder'],
    ['Faizal Hanslod','All Rounder'],
    ['Faizal Mohtat','All Rounder'],

    ['Faruk Darsot','All Rounder'],
    ['Ibhrahim Mayat','All Rounder'],
    ['Ibhrahim Darsot','All Rounder'],
    ['Idri Darsot','Bowler'],
    ['Idris Darsot','All Rounder'],
    ['Imran Patel','All Rounder'],

    ['Ismail Patel','All Rounder'],
    ['Moeen Mulla','All Rounder'],
    ['Mohmadakil Vhora','All Rounder'],
    ['Mohsin Darsot','All Rounder'],
    ['Mohsin L','All Rounder'],
    ['Mohsin Unia','All Rounder'],

    ['Mustahid Mulla','All Rounder'],
    ['Mustahim L','All Rounder'],
    ['Nadeem L','All Rounder'],
    ['Nadeem Manjra','All Rounder'],
    ['Nadeem Manjra','All Rounder'],
    ['Nadim L','All Rounder'],

    ['Sahid Lakhi','All Rounder'],
    ['Said Patel','All Rounder'],
    ['Salim Kazi','All Rounder'],
    ['Sehzad Unia','All Rounder'],
    ['Shehzad L','All Rounder'],
    ['Siraj Mamujee','All Rounder'],

    ['Usman Gani Mulla','Batsman'],
    ['Zaid Patel','All Rounder'],
    ['Zakariya Patel (VC)','All Rounder'],
    ['Zakariya Ravat','All Rounder'],
    ['Zubair Patel','All Rounder'],
  ], teamphoto: 'batball.jpg'},



  {teamN: 'Cambridge Rising Stars', playerList: 
    [['Abhishek Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164908&clubId=11018'],
    ['Anees Bhaiyat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164910&clubId=11018'],
    ['Fauzan Bhayat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1414657&clubId=11018'],
    ['Gulam Mohmed Ravat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1756784&clubId=11018'],
    ['Javid Unia Nawab','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=532577&clubId=11018'],
    ['Mihir Rao','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164909&clubId=11018'],

    ['Minjah Abdulhamid','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1323735&clubId=11018'],
    ['Mohammad Koya','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=500277&clubId=11018'],
    ['Mohsin Unia','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1769831&clubId=11018'],
    ['Nadim Manjra','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1326749&clubId=11018'],
    ['Rasid Adat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164912&clubId=11018'],
    ['Ravi Kumar','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=845208&clubId=11018'],

    ['Rizwan Darsot','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1326726&clubId=11018'],
    ['Rizwan Jogiyat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164906&clubId=11018'],
    ['Shakil Bhuria','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164905&clubId=11018'],
    ['Shehzad Unia (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2136566&clubId=11018'],
    ['Shikar Saxena','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164907&clubId=11018'],
    ['Sohel Bhaiyat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=499974&clubId=11018'],

    ['Sufiyan Bhaiyat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164911&clubId=11018'],
    ['Wasimakaram Moha Sidat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1764190&clubId=11018'],
    ['Zaid Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164904&clubId=11018'],
    ['Zakariya Ravat','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1769842&clubId=11018']], teamphoto: 'batball.jpg'},


 



    {teamN: 'Grand River CC', playerList: 
    [['Jimmichan Abraham (C)','All Rounder'],
    ['Anand Rajeev Nair (VC)','Batsman'],
    ['Jenik Antony','Bowler'],
    ['Anil Verghese','All Rounder'],
    ['Seemanth Ashok','Bowler'],
    ['Akhil Antony','Batsman'],

    ['Dhanush Raj','All Rounder'],
    ['Vishnu Narayana Kurup','All Rounder'],
    ['Vivek Viswanathan','Batsman'],
    ['Allan Kent Mathew','Batsman'],
    ['Cibin Jacob','Bowler'],
    ['Jugeesh Shaju','Bowler'],

    ['Bibin Sunny','Bowler'],
    ['Sreerag AS','Bowler'],
    ['Derin Thambi','All Rounder'],
    ['Pravindas Appu','Batsman'],
    ['Midhun K','Batsman'],
    ['Jeslin James','All Rounder'],

    ['Rajkrishnan Nair','All Rounder']], teamphoto: 'batball.jpg'},




    {teamN: 'Kitchener Wolves', playerList: 
    [['Nirmal Ignacy (C)','All Rounder'],
    ['Hemanth Ponnapalli (VC)','All Rounder'],
    ['Karthik Vuduthala','All Rounder'],
    ['Anil Chada','All Rounder'],
    ['Sai Teja','All Rounder'],
    ['Ravi Varma','All Rounder'],

    ['Arjun A','All Rounder'],
    ['Sandeep Bala','All Rounder'],
    ['Andrew Terry','All Rounder'],
    ['Abdul Ghory','All Rounder'],
    ['Neeraj Nair','All Rounder'],
    ['Pradeep Maddhi','All Rounder'],

    ['Akshay Mysa','All Rounder'],
    ['Santosh Naidu','All Rounder'],
    ['Pavan Chowdary','All Rounder'],
    ['Varshith Kumar','All Rounder'],
    ['Rakesh Reddy','All Rounder'],
    ['Athinder Singh','All Rounder']], teamphoto: 'batball.jpg'},




    {teamN: 'KW Kings XI', playerList: 
    [['Abdullah Agib','All Rounder'],
    ['Abdur Agib','All Rounder'],
    ['Adeel Akhtar','All Rounder'],
    ['Adnan Azam','All Rounder'],
    ['Anirudh Puri (VC)','All Rounder'],
    ['Aviraj Singh','Batsman'],

    ['Gagan Battoo','All Rounder'],
    ['Ishaan Dhaliwal','Batsman'],
    ['Jasmeet Singh','Batsman'],
    ['Jatin Gulati','Batsman'],
    ['Jimmy Abraham','All Rounder'],
    ['Kanav Patwa','All Rounder'],

    ['Lomesh Patel (WK)','Batsman'],
    ['Manpreet Singh','All Rounder'],
    ['Nadeem Sheikh','All Rounder'],
    ['Nisarg Shah','All Rounder'],
    ['Puran Singh','All Rounder'],
    ['Pushpkaran Singh','All Rounder'],

    ['Ramink Brar','All Rounder'],
    ['Ramiz Heidary','All Rounder'],
    ['Randhir Dhaliwal','All Rounder'],
    ['Riten Patwa (C)','All Rounder']], teamphoto: 'batball.jpg'},






    {teamN: 'Proteas CC', playerList: 
    [['Abhishek Ramparia','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148661&clubId=11018'],
    ['Ankit Bhatt','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148181&clubId=11018'],
    ['Ashutosh Vyas','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1435042&clubId=11018'],
    ['Asif Badin','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1395269&clubId=11018'],
    ['Ayaz Belim  (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1300366&clubId=11018'],
    ['Denil Chowdhary','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148670&clubId=11018'],
    ['Devang Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148671&clubId=11018'],

    ['Dhruv Sonavane','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148669&clubId=11018'],
    ['Dhruvil Prajapati','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148660&clubId=11018'],
    ['Ibrahim Mehta','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322642&clubId=11018'],
    ['Jinil Patel (WK)','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1437356&clubId=11018'],
    ['Kashyap Dave','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148668&clubId=11018'],
    ['Kaushal Pandya','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148662&clubId=11018'],
    ['Khush Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148663&clubId=11018'],

    ['Navin Anson','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322988&clubId=11018'],
    ['Niravkumar Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=347631&clubId=11018'],
    ['Nirmal Dave','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148664&clubId=11018'],
    ['Parshwa Shah','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164303&clubId=11018'],
    ['Pragnesh Panchal ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148666&clubId=11018'],
    ['Premal Parekh (WK)','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2144019&clubId=11018'],

    ['Pringal Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148180&clubId=11018'],
    ['Purvish Jethva','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1756731&clubId=11018'],
    ['Rehan Khan','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164305&clubId=11018'],
    ['Sachin Desai ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148665&clubId=11018'],
    ['Sahid Lakhi','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171065&clubId=11018'],
    ['Smit Patel ','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148667&clubId=11018'],
    ['Sulaiman Choudhree ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164304&clubId=11018'],

    ['Urvil Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2148179&clubId=11018']], teamphoto: 'batball.jpg'},








    {teamN: 'Sunrise CC', playerList: 
    [
    ['Abhay Patel ','All Rounder', 'https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=341293&clubId=11018'],
    ['Amandeep Singh','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818394&clubId=11018'],
    ['Bahdur Mangat ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818396&clubId=11018'],
    ['Daljeet Mangat','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818398&clubId=11018'],
    ['Deepinder Pal Singh (VC)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1396561&clubId=11018'],
    ['Gagandeep Singh Toor','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1277389&clubId=11018'],


    ['Harjeevan Singh','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818400&clubId=11018'], 
    ['Harpal Minhas ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818401&clubId=11018'],
    ['Inderjeet Dhaliwal','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818403&clubId=11018'],
    ['Jaskirat Singh (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=881387&clubId=11018'],
    ['Jaspal Rana','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=904087&clubId=11018'],
    ['Kuldeep Dhaliwal ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=809226&clubId=11018'],

    ['Neeraj Bharatwaj ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=881390&clubId=11018'],
    ['Sandeep Singh Buttar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324945&clubId=11018'],
    ['Saqib Sheikh','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171147&clubId=11018'],
    ['Sunny Bhullar ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818411&clubId=11018'],
    ['Sunny Mangat ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171148&clubId=11018'],
    ['Vijay Subramanya','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=953323&clubId=11018']], teamphoto: 'sunrisephoto.jpg'},














    {teamN: 'University of Waterloo', playerList: 
    [['Ahsan Shahid','All Rounder'],
    ['Dhruv Patel ','All Rounder'],
    ['Fawaz Hakim','All Rounder'],
    ['Kush Patel','All Rounder'],
    ['Mohsin Tahir ','All Rounder'],
    ['Paramvir Singh (WK)','Batsman'],

    ['Pranav Kapoor ','All Rounder'],
    ['Pranav Mehta (VC/WK)','Batsman'],
    ['Shankha Chatterjee ','All Rounder'],
    ['Shivam Sharaf ','All Rounder'],
    ['Siddhant Goyal (C)','All Rounder'],
    ['Tushar Chopra ','Batsman'],

    ['Vedant Kulkarni ','Batsman'],
    ['Yash Shah','All Rounder']], teamphoto: 'batball.jpg'},







    {teamN: 'Cambridge United', playerList:
    [ ['Abdul Samad Kazi','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1382331&clubId=11018'],
    ['Afzal Badin','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1394673&clubId=11018'],
    ['Ahmed Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1364763&clubId=11018'],
    ['Altaf Nav','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2167563&clubId=11018'],
    ['Anwar China','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=534127&clubId=11018'],
    ['Arif Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1757939&clubId=11018'],

    ['Ashraf Topia','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1325996&clubId=11018'],
    ['Faizal Mohataz','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1325996&clubId=11018'],
    ['Fayaz Jangda','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1300362&clubId=11018'],
    ['Husen Dukanwala','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1400620&clubId=11018'],
    ['Mohammad Gori','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322645&clubId=11018'],
    ['Mohmed Sadik Manjra','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=534126&clubId=11018'],


    ['Sajid Pir','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=500481&clubId=11018'],
    ['Shakil Patel (VC)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322640&clubId=11018'],
    ['Sohel Honsrad','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1322641&clubId=11018'],
    ['Suhel Pir (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=534128&clubId=11018']], teamphoto: 'batball.jpg'},














    {teamN: 'Huskies Cricket', playerList: 
    [['Dhruv Panghal','Batsman'],
    ['Ankush Kumar (WK)','Batsman'],
    ['Abdul Rehman Naeem (C)','Batsman'],
    ['Sannan Mansoor','Batsman'],
    ['Talha Naeem','Batsman'],
    ['Taha Imam','All Rounder'],

    ['Hamza Hamid','All Rounder'],
    ['Muhammad Ghyour Ali (VC)','All Rounder'],
    ['Saad Rehman','Batsman'],
    ['Saim Ahmad','Bowler'],
    ['Arsalan Wasi','All Rounder'],
    ['Lucas Sakinofsky','All Rounder'],

    ['Owais Hamid','All Rounder'],
    ['Taha Hamid','All Rounder'],
    ['Osama Hamid','All Rounder'],
    ['Ahmed Imtiaz','All Rounder'],
    ['Gundeep Singh','Bowler'],
    ['Sayeed Hassan','All Rounder'],

    ['Abdul Hafeez Naeem','Batsman'],
    ['Hrishi Modi (WK)','Batsman']], teamphoto: 'huskiescricket.jpg'},
    


   {teamN: 'Kitchener Raptors', playerList:
    [
      ['Akash','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164963&clubId=11018'],
      ['Avinash Lakhani','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164956&clubId=11018'],
      ['Ayaz','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1755142&clubId=11018'],
      ['Bikram Chinna (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164952&clubId=11018'],
      ['Gurpreet Singh Chahal','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164958&clubId=11018'],
      ['Harish Mallapudi','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164961&clubId=11018'],

      ['Ishdeep Gandhi(WK)','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164959&clubId=11018'],
      ['Jubin Mathew','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2160857&clubId=11018'],
      ['Karan Singh','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164960&clubId=11018'],
      ['Khawar Azad','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171066&clubId=11018'],
      ['Mankaran Saini(VC)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1835008&clubId=11018'],
      ['Manpreet Khepar','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164955&clubId=11018'],
    
      ['Naveed Ali','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164954&clubId=11018'],
      ['Salman Khalid','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164962&clubId=11018'],
      ['Tanwant Singh Pannu','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164953&clubId=11018'],
      ['Yaswant Bhattipolu','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164957&clubId=11018'],
    
    ], teamphoto: 'batball.jpg'},



    {teamN: 'Sunrise Stallions CC', playerList:
    [['Abbas Naqvi','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171459&clubId=11018'],
    ['Abhishek Mehra','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2171458&clubId=11018'],
    ['Abubaker Kalair','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1242838&clubId=11018'],
    ['Ali Nabeel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1748633&clubId=11018'],
    ['Amit Sharma','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1384293&clubId=11018'],
    ['Avi Kalsotra','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1276027&clubId=11018'],
    ['Bhavesh Rane','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1703995&clubId=11018'],

    ['Hari Krithivasan','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=831640&clubId=11018'],
    ['Haril Majmundar ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273837&clubId=11018'],

    ['Hiren Patel (VC)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1365241&clubId=11018'],
    ['Hussain Akbar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1158511&clubId=11018'],
    ['Hussain Shah ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1784827&clubId=11018'],
    ['Jamsheed Jaffery','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=837835&clubId=11018'],
    ['Jasneet Singh Arora','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1774121&clubId=11018'],
    ['Jimmy Nabeel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1748632&clubId=11018'],
    ['Majed Khan (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818407&clubId=11018'],

    ['Mayur Navale','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1276021&clubId=11018'],
    ['Robby Sharma','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758519&clubId=11018'],
    ['Sanjay Sharma','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324946&clubId=11018'],
    ['Saurabh Sharma','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=818409&clubId=11018'],
    ['Shiva Sharma','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1276017&clubId=11018'],
    ['Shourya Shetty ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324947&clubId=11018'],

    ['Srujan Marka','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1772729&clubId=11018'],
    ['Suryanchal Kishore','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751179&clubId=11018'],

    
    ['Vaibhav Shetty','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758732&clubId=11018']], teamphoto: 'sunrisephoto'},









    {teamN: 'Victoria CC', playerList:
    [['Arjun Mony (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273973&clubId=11018'],
    ['Balamurugan Sakthivel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751856&clubId=11018'],
    ['Bhalaji Sadagoparamanujam','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1159145&clubId=11018'],
    ['Chandru Muthukumarvel (VC)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=296248&clubId=11018'],
    ['Hemnath Baskaran','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1729895&clubId=11018'],
    ['Jai ganesh Sundaram','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=791805&clubId=11018'],

    ['Jeevan Joseph','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2129975&clubId=11018'],
    ['Joshwa Joseph Britto','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164308&clubId=11018'],
    ['Karthikeyan Munuswamy','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=294925&clubId=11018'],
    ['Kiran sundaravarathan','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164307&clubId=11018'],
    ['Krunal Bhadresa','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164312&clubId=11018'],
    ['Mohit Gill','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273840&clubId=11018'],
    ['Nitin Anson','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=874636&clubId=11018'],
    ['Phillip Whyne','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164309&clubId=11018'],

    ['Ponnar krishnasamy','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164314&clubId=11018']
    ['Ramesh Somasundaram','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2129976&clubId=11018'],
    ['Rathish Ravi','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164313&clubId=11018'],
    ['Ravi Bhadresa','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164311&clubId=11018'],  

    ['Samundiswaran Velpandian','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1276520&clubId=11018'],
    ['Sekar Venkatesh','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2076246&clubId=11018'],

    
    ['Sharad Jajoo','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1112872&clubId=11018'],
    ['Sivanandan Vijayakumar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164310&clubId=11018'],
    ['Sivaramakrishnan Rathinam','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1390896&clubId=11018']
    ['Subhani Shaik','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751859&clubId=11018']
    ], teamphoto: 'batball.jpg'},









    {teamN: 'Waterloo Gladiators', playerList:
    [
      ['Aadit Mehrotra','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164941&clubId=11018'],
      ['Abdullah Khalid (VC/Wk)','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164918&clubId=11018'],
      ['Abhiraam Biju','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=983910&clubId=11018'],
      ['Ahsan Imam','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164931&clubId=11018'],
      ['Ahsan Shahid','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164919&clubId=11018'],
      ['Akhtar Hussain','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164934&clubId=11018'],
      
      ['Arkadeep Das','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164949&clubId=11018']
      ['Gurjit Singh Saini','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164939&clubId=11018'],
      ['Hamza Abid','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164935&clubId=11018'],
      ['Hamza Mirza (C)','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=850662&clubId=11018'],
      ['Hamza Yousafzai','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164921&clubId=11018'],
    ['Haris Bhatti','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164926&clubId=11018'],
   
    

    ['Harwaris Gill','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164937&clubId=11018'],
    ['Hussain Akhbar','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164920&clubId=11018'],
    ['Jass Bajwa','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164929&clubId=11018'],
    ['Mainul Raiyan Haque','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164930&clubId=11018'],
    ['Mayank Kanoria','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164940&clubId=11018'],
    ['Mohammad Adnan','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164923&clubId=11018'],
    ['Naveed Iqbal Tareen','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164925&clubId=11018'],

    ['Naveed Khan','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164938&clubId=11018'],
    ['Neeraj Bhatia','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164945&clubId=11018'],
    ['Nikhil Ratesar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164946&clubId=11018'],
    ['Nishant Vasudev','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164948&clubId=11018'],
    ['Paramveer Singh','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164936&clubId=11018'],
    ['Rai Umar','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164932&clubId=11018'],
    ['Rai Mohammad Ali','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324942&clubId=11018'],

   
    ['Raveepaul Singh','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164944&clubId=11018'],
    ['Saad Qazi','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164933&clubId=11018'],
    ['Sachin Vashista','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164943&clubId=11018'],
    
    ['Sorabh Arora','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164928&clubId=11018'],
    
    ['Talha Ashfaq','Bowler','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164927&clubId=11018'],
    ['Talha Yousafzai','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164922&clubId=11018'],

    ['Umar Manzar ','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164924&clubId=11018'],
    ['Vikas Tomar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164947&clubId=11018'],
    ['Viraj Uberoi','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2164942&clubId=11018'],
    
    ], teamphoto: 'batball.jpg'},












   {teamN: 'Young 11', playerList:
   [['Ahmed Shaikh','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752493&clubId=11018'],
   ['Ashrey Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2180894&clubId=11018'],
   ['Ashrey Krovi','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752507&clubId=11018'],
   ['Axil Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2180891&clubId=11018'],
   ['Bhuvan Kilaru ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752503&clubId=11018'],
   ['Dhawal B','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752496&clubId=11018'],

   ['Dinesh Tirumallsetty','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752494&clubId=11018'],
   ['Harsh  Bhavsar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2180892&clubId=11018'],
   ['Hemant Kumar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752504&clubId=11018'],
   ['Himavanth Reddy ','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752495&clubId=11018'],


   ['Jay Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1778514&clubId=11018'],
   ['Kavin Patel','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2180893&clubId=11018'],
   ['Krishna Chaitanya Nimmala','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273852&clubId=11018'],
   ['Mailik Patel ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1389547&clubId=11018'],
   ['Navpreet Singh ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1757510&clubId=11018'],
   ['Nikhil Nisangi ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752505&clubId=11018'],
   ['Nitish Meelu','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1324956&clubId=11018'],

   ['Parth Thakkar (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273854&clubId=11018'],
   ['Ranvir Lastname ','All Rounder',' Ranvir Lastname'],
   ['Sai Ram Marri (VC)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1383524&clubId=11018'],
   ['Shikar Lastname','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1752506&clubId=11018'],
   ['Siddharth Patel ','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273859&clubId=11018'],


   ['Sunil Kumar Kambhampati','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1284810&clubId=11018'],
   ['Vatsal P. Patel ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1772728&clubId=11018'],
   ['Vineeth Nallmadugu','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1273866&clubId=11018']], teamphoto: 'batball.jpg'},







   {teamN: 'ZMCC Kitchener', playerList:
    [['Abbasi Ziyan','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1366134&clubId=11018']
    ['Abdul Jabbar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751139&clubId=11018'],
    ['Abhimanyu Katey','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1774502&clubId=11018'],
    ['Adnan Azam','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=2151998&clubId=11018']
    ['Hamza Talaal','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751131&clubId=11018'],
    ['Hasanain A','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758992&clubId=11018'],
    ['Hasnain Aamir','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751141&clubId=11018'],
    ['Imran Kashif ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751134&clubId=11018'],


    ['Khalid Gillani ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751145&clubId=11018'],
    ['Liaqat Ali ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751140&clubId=11018'],
    ['Mehmood Pirzada','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751136&clubId=11018'],
    ['Mohammad Adil','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751132&clubId=11018'],
    ['Mohsan Butt','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751142&clubId=11018'],
    ['Nasir Janjua','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758993&clubId=11018'],
    

    ['Naveed Jailani (C)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751129&clubId=11018'],
    ['Navjeet Singh','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1768283&clubId=11018'],
    ['Owais Asghar','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751130&clubId=11018'],
    ['Sajid Gilani ','Batsman','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1794841&clubId=11018'],
    ['Samir Ajmal','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751137&clubId=11018'],
    ['Shariq Mohammad ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751128&clubId=11018'],
    

    ['Sunit Thakur ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1759027&clubId=11018'],
    ['Syed Yakood Maqsusi ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=547949&clubId=11018'],
    ['Syed Ali Raxa','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1387093&clubId=11018'],
    ['Taha Badar (VC)','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1382646&clubId=11018'],
    ['Tariq Yousaf ','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1751133&clubId=11018'],
    ['Vicky Sharma','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1758991&clubId=11018'],
    ['Zaki Khan','All Rounder','https://cricclubs.com/SouthernOntarioCricketLeague/viewPlayer.do?playerId=1794842&clubId=11018']], teamphoto: 'batball.jpg'}







    
  ]



  for (var i = 0; i < teamInfo.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    if(params == teamInfo[i].teamN.replace(/\s/g, '')){
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
    rows.push(<ListView name={teamListData[i][0]} role={teamListData[i][1]} />);
}
  return (
    <section
      {...props}
      className={outerClasses}
    >


<SectionHeader data={sectionHeader} className="center-content"  data-reveal-delay="200"/>

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